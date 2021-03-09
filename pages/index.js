import { NextSeo } from 'next-seo'
import { useEffect } from 'react';
import { useController } from 'react-scroll-parallax';

import Profile from '../components/Profile/index'
import About from '../components/About/index'
import Title from '../components/Title/index'
import Gallery from '../components/Gallery/index'
import Footer from '../components/Footer/index'
import readGalleryItems from './utils'

export default function Home({ items }) {
  //Parallax scroll fix
  if (typeof window !== 'undefined') {
    const { parallaxController } = useController();
    useEffect(() => {
      const handler = () => {
        parallaxController.update()
        window.scrollBy(0, 1)
      }
      window.addEventListener('load', handler)
      return () => window.removeEventListener('load', handler)
    }, [parallaxController])
  }

  return (
    <>
      <NextSeo
        title='Monolith'
        description='Monolith landing page'
        canonical='http://monolith.dev'
        openGraph={{
          url: 'http://monolith.dev',
          title: 'Monolith',
          description: 'Monolith landing page',
          images: [
            {
              url: '../public/images/profile.png',
              width: 300,
              height: 300,
              alt: 'profile picture',
            }
          ],
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <div className='h-full no-scrollbar select-none'>
        <Profile />
        <Title />
        <About />
        <Gallery items={items} />
        <Footer />
      </div>
    </>
  )
}

export async function getStaticProps(context) {
  const items = await readGalleryItems()
  return {
    props: {
      items: items
    },
  }
}