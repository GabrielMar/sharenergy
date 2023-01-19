import { signIn } from 'next-auth/react';
import Image from 'next/image';
import { useForm, SubmitHandler } from 'react-hook-form';

type LoginInputs = {
  username: string;
  password: string;
};

export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginInputs>();
  const onSubmit: SubmitHandler<LoginInputs> = (data) => {
    signIn('credentials', data);
  };

  console.log(watch('username')); // watch input value by passing the name of it

  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <Image
            className="w-full"
            src="/logo.png"
            alt="Sharenergy"
            width={234}
            height={25}
          />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Faça login em sua conta
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="username" className="sr-only">
                Nome do usuário
              </label>
              <input
                id="username"
                name="username"
                type="text"
                className={`relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 invalid:border-pink-500 invalid:text-pink-600 focus:z-10 focus:border-green-500 focus:outline-none focus:ring-green-500 ${
                  errors.username
                    ? // ? 'invalid:border-pink-500 focus:invalid:border-pink-500'
                      ''
                    : ''
                }`}
                placeholder="Endereço de e-mail"
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
                autoComplete="current-password"
                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
                placeholder="Senha"
                {...register('password', {
                  required: true,
                  pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
                })}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Lembre de mim
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-green-600 hover:text-green-500"
              >
                Esqueceu sua senha?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-green-600 py-2 px-4 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Sign in
            </button>
          </div>
        </form>

        {errors.username && <span>username field is required</span>}
        {errors.password && <span>password field is required</span>}
      </div>
    </div>
  );
}
