import React, { ChangeEvent, FormEvent } from 'react';
import { logarSistema, Usuario as UsuarioType } from './usuarios';

export interface Usuario {
  id?: string;
  email: string;
  senha: string;
}


interface LoginProps {
  usuario: UsuarioType;
  setUsuario: React.Dispatch<React.SetStateAction<{ id: string; email: string; senha: string; }>>;
  setErro: React.Dispatch<React.SetStateAction<string>>;
}

const Login: React.FC<LoginProps> = ({ usuario, setUsuario, setErro }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    setUsuario((objetoAtual) => {
      return { ...objetoAtual, [fieldName]: fieldValue };
    });
  };

  const handleLogin = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    logarSistema({ ...usuario, id: '' }, setUsuario, setErro);
  };

  return (
    <div className="login">

      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-11 w-auto"
            src="/logo-branca.png"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-200">
            Faça seu login e deixe um comentário

          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-100">
                E-mail
              </label>
              <div className="mt-2">
                <input
                  type="text" id="email" name="email" value={usuario.email} onChange={handleChange}
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-zinc-200 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-100">
                  Senha
                </label>
                {/* <div className="text-sm">
                  <a href="#" className="font-semibold text-zinc-200 hover:text-zinc-500">
                    Forgot password?
                  </a>
                </div> */}
              </div>
              <div className="mt-2">
                <input
                  type="password" id="senha" name="senha" value={usuario.senha} onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-zinc-200 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-pink-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-200"
              >
                Fazer Login
              </button>
            </div>
          </form>

          {/* <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <a href="#" className="font-semibold leading-6 text-zinc-200 hover:text-zinc-500">
              Start a 14 day free trial
            </a>
          </p> */}
        </div>
      </div>
    </div>

  );
};

export default Login;
