import Image from 'next/image'
import type { Metadata } from 'next'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Home | Som Retrô - Projeto NextJS + JAMstack',
  description: 'Som Retrô - Mariana Sá Ribas',
  keywords: ['música', 'playlists', 'music'],
}


export default function Home() {
  return (

    <div className="bg-white min-h-screen">



      <Header />



      <main className="bg-white min-h-screen flex-grow">
        {/* <Image src="/logo.png" alt="Logo Som Retro" width={616} height={315} /> */}
        <section
          className="relative bg-[url(https://images.unsplash.com/photo-1533979640417-546cbced58b0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]  bg-cover bg-center bg-no-repeat before:content-'' before:absolute before:inset-0 before:bg-indigo-700 before:bg-opacity-70"
        >

          <div
            className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
          >  </div>

          <div
            className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"

          > 


            <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
              <h1 className="text-3xl font-extrabold sm:text-5xl">
                <Image className='justify-center items-center mx-auto pb-5' src="/logo.png" alt="Logo Som Retro" width={300} height={315} />
                The sky calls to us cosmos

                <strong className="block font-extrabold text-rose-300"> Apollonius of Perga. </strong>
              </h1>

              <p className="mt-4 max-w-lg sm:text-xl/relaxed">
                preserve and cherish that pale blue dot concept of the number one cosmic fugue
              </p>

              <div className="mt-8 flex flex-wrap gap-4 text-center">
                <a
                  href="/login"
                  className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                >
                  Fazer Login
                </a>

                <a
                  href="/blog"
                  className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                >
                  Nosso Blog
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-20">

  <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
    <img
      alt="Office"
      src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
      className="absolute inset-0 h-full w-full object-cover"
    />

    <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
      <div className="p-4 sm:p-6">
        <time dateTime="2022-10-10" className="block text-xs text-white/90">10th Oct 2022</time>

        <a href="#">
          <h3 className="mt-0.5 text-lg text-white">How to position your furniture for positivity</h3>
        </a>

        <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
          pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis
          quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius
          atque dignissimos. Molestias explicabo corporis voluptatem?
        </p>
      </div>
    </div>
  </article>

  <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
    <img
      alt="Office"
      src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
      className="absolute inset-0 h-full w-full object-cover"
    />

    <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
      <div className="p-4 sm:p-6">
        <time dateTime="2022-10-10" className="block text-xs text-white/90">10th Oct 2022</time>

        <a href="#">
          <h3 className="mt-0.5 text-lg text-white">How to position your furniture for positivity</h3>
        </a>

        <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
          pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis
          quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius
          atque dignissimos. Molestias explicabo corporis voluptatem?
        </p>
      </div>
    </div>
  </article>
  <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
    <img
      alt="Office"
      src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
      className="absolute inset-0 h-full w-full object-cover"
    />

    <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
      <div className="p-4 sm:p-6">
        <time dateTime="2022-10-10" className="block text-xs text-white/90">10th Oct 2022</time>

        <a href="#">
          <h3 className="mt-0.5 text-lg text-white">How to position your furniture for positivity</h3>
        </a>

        <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
          pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis
          quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius
          atque dignissimos. Molestias explicabo corporis voluptatem?
        </p>
      </div>
    </div>
  </article>
  <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
    <img
      alt="Hero"
      src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
      className="absolute inset-0 h-full w-full object-cover"
    />

    <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
      <div className="p-4 sm:p-6">
        <time dateTime="2022-10-10" className="block text-xs text-white/90">10th Oct 2022</time>

        <a href="#">
          <h3 className="mt-0.5 text-lg text-white">How to position your furniture for positivity</h3>
        </a>

        <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
          pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis
          quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius
          atque dignissimos. Molestias explicabo corporis voluptatem?
        </p>
      </div>
    </div>
  </article>

</div>



      </main>
      <Footer />
    </div>


  )
}
