import { useForm, SubmitHandler } from 'react-hook-form';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import clsx from 'clsx';

type LoginInputs = {
  username: string;
  password: string;
  remember: boolean;
};

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>();
  const onSubmit: SubmitHandler<LoginInputs> = async (data) => {
    console.log({ data });
    const x = await signIn('credentials', data);
    console.log({ x });
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
                {...register('username', {
                  required: true,
                  minLength: 3,
                  maxLength: 32,
                })}
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
                {...register('password', {
                  required: true,
                  // pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
                })}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember"
                  name="remember"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  {...register('remember', {
                    required: false,
                  })}
                />
                <label
                  htmlFor="remember"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Lembre de mim
                </label>
              </div>

              <div className="text-sm">
                <Link
                  href=""
                  className="font-medium text-blue-500 hover:text-blue-700"
                >
                  Esqueceu a senha?
                </Link>
              </div>
            </div>
            <input
              type="submit"
              value="Entrar"
              className="w-full cursor-pointer rounded-md border bg-green-600 py-3 px-5 text-base text-white transition hover:bg-opacity-90"
            />
          </form>
          <p className="text-base text-gray-700">
            Ainda não é membro?{' '}
            <Link href="" className="text-blue-700 hover:underline">
              Criar conta
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
