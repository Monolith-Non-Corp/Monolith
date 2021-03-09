import Flickity from 'react-flickity-component'
import Fade from 'react-reveal/Fade';

import styles from './about.module.css'
import data from './data'

export default () => (
    <div id='about' className={styles.container}>
        <div className='p-10 w-auto flex flex-col gap-y-10 justify-center items-center bg-gray-200'> {/* bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 */}
            <Fade left>
                <div className='text-center md:text-2xl text-xl tracking-wider md:mx-60 mx-2'>
                    <p>
                        Blasting fast websites with modern technologies, intelligently built.
                    </p>
                </div>
            </Fade>
            <Fade right>
                <div className='relative md:w-1/2 w-full md:mx-0 mx-2'>
                    <Flickity options={{
                        pauseAutoPlayOnHover: false,
                        prevNextButtons: false,
                        initialIndex: 2,
                        wrapAround: true,
                        pageDots: false,
                        autoPlay: 3000,
                    }}>
                        {data.map(({ href, forms }, i) => (
                            <div key={i} className='flex flex-nowrap justify-center items-center' style={{ width: '200px' }}>
                                <a href={href} className='hover:opacity-80'>
                                    {forms}
                                </a>
                            </div>
                        ))}
                    </Flickity>
                </div>
            </Fade>
        </div>
    </div>
)