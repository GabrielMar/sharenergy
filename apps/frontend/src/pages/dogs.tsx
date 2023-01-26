import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';

import { dogs, url } from '../lib/services/dogs';
import Loading from '../components/Loading';

const videoFormats = ['mp4', 'webm', 'ogg'] as const;

export default function Dogs() {
  const [refresh, setRefresh] = useState(0);

  const { isLoading, error, data } = useQuery({
    queryKey: ['dogImage', refresh],
    queryFn: () => dogs.get('').then((res) => res.data),
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    console.log('update');
  }, [refresh]);

  if (isLoading) return <Loading />;

  if (error) return <div>error</div>;

  const handleClick = () => {
    setRefresh((old) => old + 1);
  };

  return (
    <div className="mx-auto flex flex-col items-center justify-evenly gap-y-16">
      <button
        onClick={handleClick}
        className="rounded-lg bg-sky-500 px-4 py-2 text-lg font-medium text-white shadow-sm"
      >
        Atualizar
      </button>
      <div className="relative h-96 w-96">
        {videoFormats.some(
          (format) => format === data.split('.')[1].toLowerCase()
        ) ? (
          <video src={url + data} autoPlay loop className="inset-0"></video>
        ) : (
          <Image
            src={url + data}
            alt="dog image"
            fill
            placeholder="blur"
            blurDataURL="https://via.placeholder.com/1"
            className="object-contain"
          />
        )}
      </div>
    </div>
  );
}

Dogs.layout = true;
