function Cell(color, alive) {
    this._color = color
    this._alive = alive
}

Cell.prototype = {
    constructor: Cell
}

function toRGB(cols) {
    return ((cols[0] << 16) + (cols[1] << 8) + cols[2])
}

function hsl2rgb(h, s, l) {
    var r, g, b

    if (s == 0) {
        r = g = b = l
    } else {
        function hue2rgb(p, q, t) {
            if (t < 0) t += 1
            if (t > 1) t -= 1
            if (t < 1 / 6) return p + (q - p) * 6 * t
            if (t < 1 / 2) return q
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
            return p
        }

        var q = l < 0.5 ? l * (1 + s) : l + s - l * s
        var p = 2 * l - q
        r = hue2rgb(p, q, h + 1 / 3)
        g = hue2rgb(p, q, h)
        b = hue2rgb(p, q, h - 1 / 3)
    }

    return [r * 255, g * 255, b * 255]
}

export function rainbow(i) {
    return toRGB(hsl2rgb(Math.sin(i), 0.5, 0.5))
}

export function gridReducer(state, { type, rgb, width, height, data }) {
    function neighbours(x, y) {
        const w = state.length
        const h = state[0].length
        let sum = 0;

        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                const _x = x + i
                const _y = y + j
                if (_x < 0 || _x >= w) continue
                if (_y < 0 || _y >= h) continue
                if (_x === x && _y === y) continue
                const cell = state[_x][_y]
                if (cell._alive) {
                    sum++
                }
            }
        }

        return sum;
    }

    switch (type) {
        case 'scramble': {
            const grid = []
            for (let i = 0, j = 0; j < width; i++, j += 7) {
                grid[i] = []
                for (let k = 0, l = 0; l < height; k++, l += 7) {
                    const alive = (Math.random() * 3) | 0
                    grid[i].push(new Cell(rgb, alive))
                }
            }
            return grid;
        }
        case 'update': {
            const grid = []
            for (let i = 0; i < state.length; i++) {
                grid[i] = []
                for (let j = 0; j < state[i].length; j++) {
                    const count = neighbours(i, j)
                    const cell = state[i][j];
                    if (count < 2 || count > 3) {
                        grid[i][j] = new Cell(0x0, false)
                    } else if (!cell._alive && count === 3) {
                        grid[i][j] = new Cell(rgb, true)
                    } else {
                        grid[i][j] = cell;
                    }
                }
            }
            return grid
        }
        case 'edit': {
            const grid = [...state]
            for (const {x, y} of data) {
                grid[x][y] = new Cell(rgb, true)
            }
            return grid
        }
        default: return state
    }
}

export function tempReducer(state, { type, data }) {
    switch (type) {
        case 'push': {
            const _state = [...state]
            _state.push(data)
            return _state
        }
        case 'clear': return []
        default: return state
    }
}