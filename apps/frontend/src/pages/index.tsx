import { ChangeEvent, ReactNode, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import usePagination from '@mui/material/usePagination';

import { randomUsers } from '../lib/services/randomUsers';
import RandomUsersType from '../interfaces/randomUsers';

import clsx from 'clsx';
import Link from 'next/link';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useRouter } from 'next/router';
import Image from 'next/image';

type ParamsType = {
  page: number;
  count: number;
  term: string;
};

export default function Home() {
  const router = useRouter();
  const { count, page, term } = router.query as unknown as ParamsType;

  useEffect(() => {
    if (!count || !page) {
      router.push(
        {
          query: {
            page: 1,
            count: 10,
          },
        },
        undefined,
        { shallow: true }
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router, router.query]);

  const { isLoading, error, data } = useQuery<RandomUsersType>({
    queryKey: ['searchUsers', page],
    queryFn: () =>
      randomUsers
        .get('', { params: { page, results: count } })
        .then((res) => res.data),
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });

  const handleChangePage = (event: ChangeEvent<unknown>, page: number) => {
    if (page < 1 || page > count) event.preventDefault();
  };

  const { items } = usePagination({
    count: 10,
    page: Number(page),
    onChange: handleChangePage,
  });

  const handleChangeComplete = (value: string) => {
    router.push(
      {
        query: {
          ...router.query,
          term: encodeURIComponent(value),
        },
      },
      undefined,
      { shallow: true }
    );
  };

  if (isLoading) return <div>Carregando...</div>;

  if (error) return <div>error</div>;

  return (
    <div className="mx-4 flex flex-col gap-y-8">
      <div className="flex w-full justify-center px-4">
        <h1 className="mb-3 text-6xl leading-snug text-gray-900">
          Lista de membros
        </h1>
      </div>
      <div className="my-4 flex w-full items-center justify-between lg:justify-evenly">
        <Autocomplete
          disablePortal
          freeSolo
          options={data.results
            .map((r) => [
              `${r.name.first} ${r.name.last}`,
              r.login.username,
              r.email,
            ])
            .flat()}
          onChange={(e) => handleChangeComplete(e.currentTarget.textContent)}
          value={term}
          renderInput={(params) => (
            <TextField {...params} label="Pesquisar" placeholder={term} />
          )}
          className="w-48 md:w-72 lg:w-80"
        />
        <nav
          className="isolate inline-flex -space-x-px rounded-md shadow-sm"
          aria-label="Pagination"
        >
          {items.map(({ page, type, selected, ...item }, index) => {
            const classes =
              'relative inline-flex items-center border px-4 py-2 text-sm font-medium focus:z-20';

            const classDesktop = 'hidden md:inline-flex';

            type x = {
              children: ReactNode;
              class?: string;
            };
            let content: x = {
              children: '',
              class: '',
            };

            if (type === 'previous') {
              content = {
                children: <ChevronLeftIcon />,
                class: 'rounded-l-md px-2',
              };
            } else if (type === 'next') {
              content = {
                children: <ChevronRightIcon />,
                class: 'rounded-r-md px-2',
              };
            } else if (type === 'start-ellipsis' || type === 'end-ellipsis') {
              return (
                <span
                  key={index}
                  className={clsx(classes, classDesktop, 'text-gray-700')}
                >
                  ...
                </span>
              );
            } else if (type === 'page') {
              content = {
                children: page,
                class: classDesktop,
              };
            } else {
              return null;
            }

            return (
              <Link
                key={index}
                href={{
                  query: { ...router.query, page, term: undefined },
                }}
                className={clsx(
                  classes,
                  selected
                    ? 'z-10 border-indigo-500 bg-indigo-50 text-indigo-600'
                    : 'border-gray-300 bg-white text-gray-500 hover:bg-gray-50',
                  !selected && content.class
                )}
                {...item}
              >
                {content.children}
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="bor flex flex-wrap items-center justify-center gap-x-6 gap-y-12">
        {(term
          ? data.results.filter((r) =>
              [
                `${r.name.first} ${r.name.last}`,
                r.login.username,
                r.email,
              ].some((i) => i === decodeURIComponent(term))
            )
          : data.results
        ).map((card) => (
          <div
            key={card.login.uuid}
            className="flex h-full w-full flex-col sm:w-64"
          >
            <div className="relative mb-3 inline-block h-40 overflow-hidden rounded-lg sm:h-36">
              <Image
                src={card.picture.large}
                alt={`${card.name.first} photo`}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="mb-2 text-lg font-medium text-gray-900">
                {`${card.name.first} ${card.name.last}`}
                {', '}
                {card.dob.age}
              </h3>
              <p className="text-sm text-gray-700">{card.login.username}</p>
              <p className="text-sm text-gray-700">{card.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// https://tailgrids.com/components/headers

Home.layout = true;
