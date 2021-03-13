import { useCallback, useEffect, useState } from 'react';
import { Parallax } from "react-scroll-parallax";
import { Star } from 'react-github-buttons'
import Fade from 'react-reveal/Fade';

import styles from './profile.module.css'
import Life from '../Life/index';

function LetterReveal({ word }) {
    const [letters, setLetters] = useState([])
    const [hover, setHover] = useState(false)
    const states = [] //Build states
    for (let index = 1; index <= word.length; index++) {
        states.push(word.substring(1, index))
    }

    useEffect(() => {
        if (hover) {
            if (letters.length < word.length - 1) {
                show()
            }
        } else {
            if (letters.length) {
                hide()
            }
        }
    }, [letters.length, hover])

    const show = useCallback(() => {
        setTimeout(() => {
            setLetters(states[letters.length + 1])
        }, 50)
    }, [letters, letters.length])

    const hide = useCallback(() => {
        setTimeout(() => {
            setLetters(states[letters.length - 1])
        }, 80)
    }, [letters, letters.length])

    const enter = () => {
        setHover(true)
    }

    const leave = () => {
        setHover(false)
    }

    return (
        <span onMouseEnter={enter} onMouseLeave={leave}>
            <span className='opacity-70'>{word[0]}</span>{''}<span className='opacity-60 text-4xl'>{letters}</span>
        </span>
    )
}

export default () => (
    <div id='profile' className='h-screen relative'>
        <Life />
        <div className={styles.index}>
            <div className={styles.left}>
                <Fade left>
                    <Parallax y={[30, -30]}>
                        <img src='images/profile.png' className='w-full h-full shadow-lg' />
                    </Parallax>
                </Fade>
            </div>
            <div className={styles.right}>
                <Parallax y={[30, -30]}>
                    <div className='flex flex-col space-y-2'>
                        <Fade top>
                            <p className='flex-none md:text-8xl text-6xl tracking-widest grid grid-flow-col'>
                                <LetterReveal word='Edgar' />
                                <LetterReveal word='Alejandro' />
                                <LetterReveal word='Garcia' />
                                <LetterReveal word='Castrejon' />
                            </p>
                        </Fade>
                        <hr />
                        <Fade cascade right>
                            <div>
                                <p className='text-lg tracking-wider'>
                                    IT engineer,{' '}
                                    <span className='font-bold'>Software developer</span>,{' '}
                                        Full-stack web developer{' '}
                                </p>
                                <p className=' text-lg tracking-wider'>
                                    <span className='font-bold'>Morelos</span>, México
                                </p>
                            </div>
                        </Fade>
                    </div>
                </Parallax>
            </div>
        </div>
        <div className={styles.github}>
            <Star owner='BunnyCinnamon' repo='Improbable-plot-machine' />
        </div>
        <div className={styles.scroll}>
            <a href='#title'>
                <svg x="0px" y="0px" viewBox="0 0 167 100">
                    <polygon
                        style={{ fill: '#e30ba2', stroke: '#e30ba2' }}
                        points="137.4,0 83.5,105.9 29.6,0 "
                    />
                </svg>
            </a>
        </div>
    </div>
)