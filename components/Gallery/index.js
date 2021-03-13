import { useCallback, useRef, useState } from 'react';
import Fade from 'react-reveal/Fade';

import styles from './gallery.module.css'
import Button from '../Util/button'

function ItemContent({ content }) {
    return (
        <div className='flex-1 p-5 md:block hidden bg-white bg-opacity-90'>
            <pre className='whitespace-pre-line font-sans'>
                {content}
            </pre>
        </div>
    )
}

function ItemAbout({ name, repository, url, tech }) {
    return (
        <div className='flex flex-col flex-none border-l-2 border-r-2 border-gray-300 bg-white bg-opacity-90'>
            <div className='flex-1 p-5'>
                <div className={styles._grid}>
                    {tech.map((x, index) => (
                        <div key={index}>
                            <p>{x}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className='p-5'>
                <a className='block text-xl' style={{ fontWeight: '600' }}>
                    {name}
                </a>
                <a className='block text-base underline'>
                    {repository}
                </a>
            </div>
        </div>
    )
}

function Item({ data, side }) {
    const { data: { name, repository, url, tech }, content } = data
    const ref = useRef()
    const enter = useCallback((e) => {
        const box = ref.current.getBoundingClientRect();
        const x = -(e.clientY - box.y - (box.height / 2)) / (150 * box.height / box.width)
        const y = (e.clientX - box.x - (box.width / 2)) / 150
        ref.current.style.transform = `perspective(${box.width}px) rotateX(${x}deg) rotateY(${y}deg)`
    }, [ref])
    const leave = useCallback((e) => {
        ref.current.style.transform = ''
    }, [ref])
    const left = side === 'left'
    const ABOUT = <ItemAbout name={name} repository={repository} url={url} tech={tech} />
    const CONTENT = <ItemContent content={content} />

    return (
        <a href={repository} className={`xl:transform ${left ? 'xl:-translate-x-1/4' : 'xl:translate-x-1/4'}`}>
            <div ref={ref} className={`transition duration-500 ease-out w-full h-full p-5`} onMouseMove={enter} onMouseLeave={leave}>
                <Fade left={left} right={!left}>
                    <div className={`w-full h-full flex md:flex-row flex-col shadow-lg text-black text-base ${left ? 'md:text-right' : 'md:text-left'}`}>
                        {left
                            ? (<>{CONTENT}{ABOUT}</>)
                            : (<>{ABOUT}{CONTENT}</>)
                        }
                    </div>
                </Fade>
            </div>
        </a>
    )
}

export default function Gallery({ items }) {
    return (
        <div id='gallery' className={styles.container}>
            <div className='xl:px-96 lg:px-10 px-1 py-20 bg-gray-800 bg-repeat bg-fixed' style={{ backgroundImage: 'url(/images/tile_dark.png)' }}>
                <div className='text-center flex flex-col gap-y-6 mb-10'>
                    <p className={styles.title}>
                        Created with Passion
                    </p>
                    <p className={styles.description}>
                        Sample sites and experiences.
                    </p>
                </div>
                <div className='grid grid-cols-1 grid-flow-row'>
                    {items && items.map((data, index) => (
                        <Item data={data} key={index} side={index % 2 === 0 ? 'left' : 'right'} />
                    ))}
                </div>
                <div className='text-center absolute bottom-0 p-10 left-0 w-full'>
                    <Button content='View All' href='https://github.com/Monolith-Non-Corp' />
                </div>
            </div>
        </div>
    )
}