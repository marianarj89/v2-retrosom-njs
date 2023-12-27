"use client"
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import RandomUserGenerator from '@/components/Quem_Somos'
import Image from 'next/image'

import type { Metadata } from 'next'

// export const metadata: Metadata = {
//     title: 'Quem Somos | Som Retrô - Projeto NextJS + JAMstack',
//     description: 'Som Retrô - Mariana Sá Ribas',
//     keywords: ['música', 'playlists', 'music'],
// }

export default function Faq() {

    return (
        <div className="bg-gray-800 min-h-screen p-15">
            <Header />
            <h1 className='text-3xl font-black text-sky-100 pt-10 pl-10'> FAQ - Perguntas Frequentes</h1>
            <main className="bg-slate-800 min-h-screen flex-grow p-10">
            <div className="space-y-4">
  <details className="group [&_summary::-webkit-details-marker]:hidden" open>
    <summary
      className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900 dark:bg-gray-900 dark:text-white"
    >
      <h2 className="font-medium">1. Lorem ipsum dolor sit amet consectetur adipisicing?</h2>

      <svg
        className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
      </svg>
    </summary>

    <p className="mt-4 px-4 leading-relaxed text-gray-700 dark:text-stone-900 bg-gray-50 p-10 rounded-lg">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in,
      recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo
      consequuntur distinctio corporis earum similique!
    </p>
  </details>

  <details className="group [&_summary::-webkit-details-marker]:hidden">
    <summary
      className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900 dark:bg-gray-900 dark:text-white"
    >
      <h2 className="font-medium">2. Lorem ipsum dolor sit amet consectetur adipisicing?</h2>

      <svg
        className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
      </svg>
    </summary>

    <p className="mt-4 px-4 leading-relaxed text-gray-700 dark:text-stone-900 bg-gray-50 p-10 rounded-lg">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in,
      recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo
      consequuntur distinctio corporis earum similique!
    </p>
  </details>
  <details className="group [&_summary::-webkit-details-marker]:hidden">
    <summary
      className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900 dark:bg-gray-900 dark:text-white"
    >
      <h2 className="font-medium">3. Lorem ipsum dolor sit amet consectetur adipisicing?</h2>

      <svg
        className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
      </svg>
    </summary>

    <p className="mt-4 px-4 leading-relaxed text-gray-700 dark:text-stone-900 bg-gray-50 p-10 rounded-lg">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in,
      recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo
      consequuntur distinctio corporis earum similique!
    </p>
  </details>
</div>

            </main>
            <Footer />
        </div>
    );
}
