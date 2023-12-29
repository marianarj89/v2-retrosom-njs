import React from 'react';

export const dynamic = 'force-static'
const Footer: React.FC = () => {
  return (
    <footer className="dark:bg-gray-800 bottom-0 left-0 w-full">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <img className="h-10 w-auto float-left" src="/logo-branca.png" alt="" />
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024 <a href="#" className="hover:underline">Som Retrô</a>. Projeto Final JAMstack + Next.js. | Mariana Sá Ribas
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">Sobre nós</a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">Playlists</a>
          </li>
          <li>
            <a href="/blog" className="hover:underline me-4 md:me-6">Blog</a>
          </li>
          <li>
            <a href="/galeria" className="hover:underline me-4 md:me-6">Galeria</a>
          </li>
          <li>
            <a href="#" className="hover:underline">Contato</a>
          </li>
        </ul>


      </div>
    </footer>
  );
};

export default Footer;
