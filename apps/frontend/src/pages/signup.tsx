import { useForm, SubmitHandler } from 'react-hook-form';
import clsx from 'clsx';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { api } from '../lib/services/api';
import { SignInInputs, signInSchema } from './signin';

type SignUpInputs = SignInInputs & {
  confirm: string;
};

const signUpSchema = signInSchema
  .extend({
    confirm: z.string(),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.confirm)
      ctx.addIssue({
        code: 'custom',
        message: "Passwords don't match",
        path: ['confirm'], // path of error
      });
  });

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpInputs>({
    resolver: zodResolver(signUpSchema),
  });
  const onSubmit: SubmitHandler<SignUpInputs> = async (data) => {
    try {
      const res = await api.post('auth/login', data);
      if (res.data) {
        console.log(res.data);
        //
      }
    } catch (error) {
      //
    }
  };

  return (
    <main className="h-screen bg-white">
      <div className="container mx-auto flex items-center justify-center sm:h-full">
        <div className="mx-auto w-full max-w-lg rounded-lg border-gray-200 py-16 px-10 text-center sm:border sm:px-12">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mb-8 flex flex-col gap-y-6"
          >
            <div>
              <label htmlFor="username" className="sr-only">
                Nome do usuário
              </label>
              <input
                id="username"
                name="username"
                type="text"
                placeholder="Nome de usuário"
                className={clsx(
                  'w-full rounded-md border border-gray-300 bg-transparent py-3 px-5 text-base text-gray-900 placeholder-gray-500 outline-none ring-1 ring-inset ring-transparent',
                  errors.username
                    ? 'border-red-500 focus:placeholder-red-500 focus:ring-red-500'
                    : 'focus:border-green-500 focus:outline-none focus:ring-green-500'
                )}
                {...register('username')}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Senha
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Senha"
                autoComplete="current-password"
                className={clsx(
                  'w-full rounded-md border border-gray-300 bg-transparent py-3 px-5 text-base text-gray-900 placeholder-gray-500 outline-none ring-1 ring-inset ring-transparent',
                  errors.password
                    ? 'border-red-500 focus:placeholder-red-500 focus:ring-red-500'
                    : 'focus:border-green-500 focus:outline-none focus:ring-green-500'
                )}
                {...register('password')}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Senha
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Confirmar senha"
                autoComplete="current-password"
                className={clsx(
                  'w-full rounded-md border border-gray-300 bg-transparent py-3 px-5 text-base text-gray-900 placeholder-gray-500 outline-none ring-1 ring-inset ring-transparent',
                  errors.password
                    ? 'border-red-500 focus:placeholder-red-500 focus:ring-red-500'
                    : 'focus:border-green-500 focus:outline-none focus:ring-green-500'
                )}
                {...register('confirm')}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember"
                  name="remember"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  {...register('remember')}
                />
                <label
                  htmlFor="remember"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Lembre de mim
                </label>
              </div>
            </div>
            <input
              type="submit"
              value="Entrar"
              className="w-full cursor-pointer rounded-md border bg-green-600 py-3 px-5 text-base text-white transition hover:bg-opacity-90"
            />
          </form>
        </div>
      </div>
    </main>
  );
}
