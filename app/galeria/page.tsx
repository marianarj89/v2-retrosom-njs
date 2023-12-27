"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Key } from 'react';

async function getGalleryImages() {
  const unplashApiKey = process.env.ACCESS_KEY_UNPLASH;
  const collectionId = 3706668;
  const accessKey = unplashApiKey;

  const galleryImages = [];

  for (let i = 0; i < 10; i++) {
    const response = await fetch(`https://source.unsplash.com/collection/${collectionId}/480x480`, {
      headers: {
        Authorization: `Client-ID ${accessKey}`,
      },
    });
    galleryImages.push(response.url);
  }

  return galleryImages;
}

// export const metadata: Metadata = {
//   title: 'Galeria | Som Retrô - Projeto NextJS + JAMstack',
//   description: 'Som Retrô - Mariana Sá Ribas',
//   keywords: ['música', 'playlists', 'music'],
// };

function Galeria() {
  const [galleryImages, setGalleryImages] = useState<string[]>([]);

  useEffect(() => {
    const fetchGalleryImages = async () => {
      const images = await getGalleryImages();
      setGalleryImages(images);
    };

    fetchGalleryImages();
  }, []);

  return (
    <div className="bg-white min-h-screen">
<Header />
      <main>
        <h1 className='text-3xl font-black text-sky-900 pt-10'> Galeria de Imagens</h1>
        <div className="w-1/2 relative flex flex-wrap justify-around p-5">
          {galleryImages.map && galleryImages.map((imageUrl: string, index: Key) => (
            <span key={index} className="w-48 h-48 p-5 bg-aliceblue shadow-md m-5">
              <Image src={imageUrl} alt={`Image ${index}`} width={480} height={480} />
            </span>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Galeria;
