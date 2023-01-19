import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import { name } from '../constants/brand';
import { useRouter } from 'next/router';

export const navigation = [
  { name: 'Gatos', href: '/cats' },
  { name: 'Cachorros', href: '/dogs' },
  { name: 'Usuários', href: '/users' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeStart', handleClose);
    return () => {
      router.events.off('routeChangeStart', handleClose);
    };
  }, [router.events]);

  const handleClickOpen = () => {
    setMobileMenuOpen(true);
  };

  const handleClose = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="w-full">
      <div className="container mx-auto">
        <nav className="mx-6 flex items-center justify-between lg:justify-start">
          <Logo />
          <button
            type="button"
            className="p-2.5 text-gray-700 lg:hidden"
            onClick={handleClickOpen}
          >
            <span className="sr-only">Open main menu</span>
            <MenuIcon aria-hidden="true" />
          </button>
          <ul className="ml-32 hidden lg:flex lg:justify-center lg:gap-x-12">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="py-2 text-base font-medium text-gray-700 hover:text-green-600"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={handleClose}
          fullScreen
          className="lg:hidden"
        >
          <DialogContent
            sx={{
              paddingTop: 0,
            }}
          >
            <div className="flex items-center justify-between">
              <Logo />
              <button
                type="button"
                className="p-2.5 text-gray-700"
                onClick={handleClose}
              >
                <span className="sr-only">Close menu</span>
                <CloseIcon aria-hidden="true" />
              </button>
            </div>
            <ul className="space-y-2 py-6">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </DialogContent>
        </Dialog>
      </div>
    </header>
  );
}

const Logo = () => (
  <Link href="/" className="relative h-20 w-36">
    <span className="sr-only">{name}</span>
    <Image src="/logo.png" alt="logo" fill className="object-contain" />
  </Link>
);
