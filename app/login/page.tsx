"use client"
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { useState, useEffect } from 'react';
import Login from '@/components/Login';


export default function LoginPage() {

  const [usuario, setUsuario] = useState({ id: "", email: "", senha: "" });
  const [erro, setErro] = useState("");

  useEffect(() => {
    if (usuario.id.length > 0 && usuario.email.length > 0) {
      alert("Login efetuado com sucesso!");
      setUsuario({ id: "", email: "", senha: "" });
    }
    if (erro.length > 0) {
      alert(erro);
      setErro("");
    }
  }, [usuario, erro]);

  return (
    <>
      <Header />
      <main className="bg-slate-800 min-h-screen flex-grow p-10">
        <h1 className='text-3xl font-black text-sky-100 pt-10 pl-10 pb-5'> 🔒 Área de Login </h1>
        <Login usuario={usuario} setUsuario={setUsuario} setErro={setErro} />
      </main>
      <Footer />
    </>
  );
}
