import Image from 'next/image';
import Link from 'next/link';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { navigation } from './Header';
import { contacts, media, name } from '../constants/brand';

export default function Footer() {
  return (
    <footer className="relative z-10 bg-white pt-20 pb-10">
      <div className="container mx-auto">
        <div className="mx-4 flex flex-wrap justify-between">
          <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
            <div className="mb-10 w-full">
              <Link href="/" className="relative mb-6 inline-block h-7 w-64">
                <span className="sr-only">{name}</span>
                <Image src="/logo.png" alt="logo" fill />
              </Link>
              <p className="mb-7 text-base text-gray-700">
                Desenvolvemos soluções que contribuem com o crescimento das
                energias renováveis no Brasil e no mundo.
              </p>
              <div className="space-y-2">
                <a
                  href={`tel:${contacts.tel1}}`}
                  className="flex items-center text-sm font-medium text-gray-900"
                >
                  <span className="mr-3 text-green-400">
                    <LocalPhoneIcon />
                  </span>
                  <span>{contacts.tel1}</span>
                </a>
                <a
                  href={`tel:${contacts.tel2}}`}
                  className="flex items-center text-sm font-medium text-gray-900"
                >
                  <span className="mr-3 text-green-400">
                    <LocalPhoneIcon />
                  </span>
                  <span>{contacts.tel2}</span>
                </a>
                <a
                  href={`mailto:${contacts.mail}}`}
                  className="flex items-center text-sm font-medium text-gray-900"
                >
                  <span className="mr-3 text-green-400">
                    <EmailIcon />
                  </span>
                  <span>{contacts.mail}</span>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
            <div className="mb-10 w-full">
              <h4 className="mb-9 text-lg font-semibold text-gray-900">
                Páginas
              </h4>
              <ul>
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="mb-2 inline-block text-base leading-loose text-gray-700 hover:text-green-600"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
            <div className="mb-10 w-full">
              <h4 className="mb-9 text-lg font-semibold text-gray-900">
                Siga-nos no
              </h4>
              <div className="mb-6 flex items-center">
                <a
                  href={media.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] text-gray-900 hover:border-green-400 hover:bg-green-400 hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                >
                  <FacebookIcon />
                </a>
                <a
                  href={media.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] text-gray-900 hover:border-green-400 hover:bg-green-400 hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                >
                  <InstagramIcon />
                </a>
                <a
                  href={media.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] text-gray-900 hover:border-green-400 hover:bg-green-400 hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                >
                  <TwitterIcon />
                </a>
                <a
                  href={media.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] text-gray-900 hover:border-green-400 hover:bg-green-400 hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                >
                  <LinkedInIcon />
                </a>
              </div>
              <p className="text-base text-gray-700">
                &copy; {new Date().getFullYear()} {name}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
