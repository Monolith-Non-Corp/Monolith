import { Graphics, Stage, useTick } from '@inlet/react-pixi';
import { useCallback, useEffect, useReducer, useRef, useState } from 'react';
import Fade from 'react-reveal/Fade';

import styles from './cowen.module.css'
import { gridReducer, tempReducer, rainbow } from './utils'

const getSize = () => ({
    width: window.innerWidth,
    height: window.innerHeight
});

const Size = ({ children }) => {
    const [size, setSize] = useState(getSize);
    useEffect(() => {
        const update = () => setSize(getSize());
        window.onresize = update;
        return () => (window.onresize = null);
    }, []);
    return children(size);
};

function Canvas({ width, height, node }) {
    const [grid, dispatch] = useReducer(gridReducer, [])
    const [tempgrid, tempdispatch] = useReducer(tempReducer, [])
    const count = useRef(0);
    const active = useRef(false)
    const edit = useCallback((e) => {
        const _x = e.changedTouches ? e.changedTouches[0].pageX : e.clientX;
        const _y = e.changedTouches ? e.changedTouches[0].pageY : e.clientY;
        const x = Math.floor(_x / 7);
        const y = Math.floor(_y / 7);
        if (x >= 0 && x < grid.length && y >= 0 && y < grid[0].length) {
            if (e.type === 'mousedown' || e.type === 'touchstart') {
                active.current = 1;
            } else if (e.type === 'mouseup' || e.type === 'touchend') {
                active.current = 0;
            } else if (e.type === 'mouseout') {
                active.current = 0;
            }

            if (active.current === 1) {
                tempdispatch({
                    type: 'push',
                    data: { x, y },
                })
            } else if (tempgrid.length > 0) {
                dispatch({
                    type: 'edit',
                    data: tempgrid,
                })
                tempdispatch({
                    type: 'clear',
                })
            }
        }
    }, [grid, grid.length, tempgrid, tempgrid.length, tempdispatch, dispatch])
    useEffect(() => {
        node.current.addEventListener('mousemove', edit, false)
        node.current.addEventListener('mousedown', edit, false)
        node.current.addEventListener('mouseup', edit, false)
        node.current.addEventListener('touchmove', edit, false)
        node.current.addEventListener('touchend', edit, false)
        node.current.addEventListener('touchstart', edit, false)
        return () => {
            node.current.removeEventListener('mousemove', edit)
            node.current.removeEventListener('mousedown', edit)
            node.current.removeEventListener('mouseup', edit)
            node.current.removeEventListener('touchmove', edit)
            node.current.removeEventListener('touchend', edit)
            node.current.removeEventListener('touchstart', edit)
        }
    }, [node, node.current, edit])
    useEffect(() => {
        setTimeout(() => {
            dispatch({
                type: 'scramble',
                rgb: rainbow(count.current),
                width: width,
                height: height,
            })
            dispatch({
                type: 'update',
                rgb: rainbow(count.current * 0.005)
            })
        }, 0)
    }, [dispatch])
    useTick(() => {
        if (count.current++ % 2 === 0) {
            setTimeout(() => {
                dispatch({
                    type: 'update',
                    rgb: rainbow(count.current * 0.005)
                })
            }, 0)
        }
    })
    const draw = useCallback(g => {
        g.clear()
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {
                const cell = grid[i][j];
                if (cell._alive) {
                    g.beginFill(cell._color, 0.5)
                    g.drawRect(i * 7, j * 7, 6, 6)
                    g.endFill()
                }
            }
        }
        for (const { x, y } of tempgrid) {
            g.beginFill(0x000000, 0.5)
            g.drawRect(x * 7, y * 7, 6, 6)
            g.endFill()
        }
    }, [grid, tempgrid])

    return <Graphics draw={draw} />
}

export default function Cowen() {
    const node = useRef(null);
    return (
        <div ref={node} className='fixed'>
            <Fade>
                <Stage
                    {...getSize()}
                    options={{
                        resizeTo: window,
                        autoDensity: true,
                        transparent: true
                    }}
                    className='bg-gray-50'
                    children={(
                        <Size>
                            {({ width, height }) => <Canvas width={width} height={height} node={node} />}
                        </Size>
                    )}
                />
            </Fade>
        </div>
    )
}