import { useState } from 'react';
import Image from 'next/image';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

import { cats } from '../lib/services/cats';

const statusCode = [
  100, 101, 102, 103, 200, 201, 202, 203, 204, 206, 207, 300, 301, 302, 303,
  304, 305, 307, 308, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410,
  411, 412, 413, 414, 415, 416, 417, 418, 420, 421, 422, 423, 424, 425, 426,
  429, 431, 444, 450, 451, 497, 498, 499, 500, 501, 502, 503, 504, 506, 507,
  508, 509, 510, 511, 521, 522, 523, 525, 599,
] as const;

export default function Cats() {
  const [code, setCode] = useState('0');

  const handleChange = (value: string) => {
    setCode(value);
  };

  return (
    <div className="mx-auto flex flex-col items-center gap-y-16">
      <Autocomplete
        disablePortal
        options={statusCode}
        onChange={(e) => handleChange(e.currentTarget.textContent)}
        renderInput={(params) => (
          <TextField {...params} label="Selecione um código" />
        )}
        className="w-80"
      />
      <div className="relative h-96 w-96">
        <Image
          src={`${cats}${code}`}
          alt="cat image"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}

Cats.layout = true;
