import { useState, useCallback, useEffect } from 'react';
import Slide from 'react-reveal/Slide';

import Button from '../Util/button'
import data from './data'

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function useLink() {
    const [link, setLink] = useState('')
    const randomize = useCallback(() => {
        setLink(data[getRandomArbitrary(0, data.length - 1)])
        console.log(data[getRandomArbitrary(0, data.length - 1)])
    }, [link, setLink])
    const openLink = useCallback((e) => {
        e.preventDefault()
        window.open(link, '_blank', 'noopener,noreferrer')
        randomize()
    }, [link, randomize])

    return {
        link,
        randomize,
        openLink
    }
}

export default function Footer() {
    const { link, openLink, randomize } = useLink()
    useEffect(() => {
        randomize()
    }, [randomize])

    return (
        <div id='footer' className='tracking-widest relative'>
            <div className='h-96 bg-gray-200 flex flex-col place-content-center place-items-center gap-y-4 text-center'>
                <div className='text-5xl text-gray-800 font-semibold'>
                    <Slide down>
                        <p>
                            Elevate your Developer Techniques
                        </p>
                    </Slide>
                </div>
                <div className='text-xl text-gray-600'>
                    <Slide down>
                        <p>
                            Watch a random informative video.
                        </p>
                    </Slide>
                </div>
                <div className='flex flex-row gap-x-10'>
                    <Slide left>
                        <Button content='Take on me' href={link} onClick={openLink} />
                    </Slide>
                    <Slide right>
                        <Button content='Take me on' href={link} onClick={openLink} />
                    </Slide>
                </div>
            </div>
            <div className='h-64 bg-gray-800 text-gray-400 text-sm flex flex-row place-content-center'>
                <div className='flex flex-col gap-y-2 md:p-12 pl-4 md:pt-16 pt-8'>
                    <div><p>Monolith</p></div>
                    <div><p>@2021 Monolith-Non-Corp. Some Rights Deserved</p></div>
                    <div><p>Built with love by Ed <span className='text-white'><a href='https://twitter.com/ArekkuusuJ'>@CinnamonBun</a></span></p></div>
                </div>
                <div className='flex flex-col gap-y-2 md:p-12 pr-4 md:pt-16 pt-8'>
                    <p>like animemes? <span className='text-white'><a href='https://twitter.com/search?q=%23animemes'>@animemes</a></span></p>
                    <p>like memesus? <span className='text-white'><a href='https://twitter.com/search?q=%23memes'>@memesus</a></span></p>
                </div>
            </div>
        </div>
    )
}