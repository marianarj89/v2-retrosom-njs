import { signInWithEmailAndPassword, Auth, UserCredential, User } from 'firebase/auth';
import { auth } from './firebase';

export interface Usuario {
  id: string;
  email: string;
  senha: string;
}

export const logarSistema = (
  usuario: Usuario,
  setUsuario: React.Dispatch<React.SetStateAction<Usuario>>,
  setErro: React.Dispatch<React.SetStateAction<string>>
) => {
  signInWithEmailAndPassword(auth as Auth, usuario.email, usuario.senha)
    .then(async (userCredential: UserCredential) => {
      const user: User = userCredential.user;

      setUsuario((objetoAtual: Usuario) => {
        const retorno: Usuario = {
          ...objetoAtual,
          id: user.uid,
          email: user.email || '',
        };
        return retorno;
      });
    })
    .catch((error) => {
      console.log(`${error.code} = ${error.message}`);
      setErro("Login Inválido");
    });
};
