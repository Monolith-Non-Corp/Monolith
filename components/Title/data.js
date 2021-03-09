const Gradients = () => (
    <def>
        <linearGradient id="gradient-1" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#3F5470" />
            <stop offset="100%" stopColor="#1F2937" />
        </linearGradient>
        <linearGradient id="gradient-2" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#4B5563" />
            <stop offset="100%" stopColor="#647082" />
        </linearGradient>
        <linearGradient id="gradient-3" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#D1D5DB" />
            <stop offset="100%" stopColor="#F9FCFF" />
        </linearGradient>
        <linearGradient id="gradient-4" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#F9FCFF" />
            <stop offset="100%" stopColor="#D1D5DB" />
        </linearGradient>
        <linearGradient id="gradient-5" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#647082" />
            <stop offset="100%" stopColor="#4B5563" />
        </linearGradient>
    </def>
)
const M1 = {
    bounds: [100, 100],
    forms: [
        <svg viewBox='0 0 100 100'>
            <Gradients />
            <rect fill='url(#gradient-1)' x='0' y='0' width='100' height='100' />
        </svg>,
        <svg viewBox='0 0 100 100'>
            <rect fill='url(#gradient-2)' x='25' y='50' width='50' height='50' />
        </svg>,
        <svg viewBox='0 0 100 100'>
            <ellipse fill='url(#gradient-3)' cx='50' cy='50' rx='25' ry='25' />
        </svg>,
    ],
}
const O2 = {
    bounds: [100, 100],
    forms: [
        <svg viewBox='0 0 100 100'>
            <ellipse fill='url(#gradient-1)' cx='50' cy='50' rx='50' ry='50' />
        </svg>,
        <svg viewBox='0 0 100 100'>
            <ellipse fill='url(#gradient-2)' cx='50' cy='65' rx='35' ry='35' />
        </svg>,
        <svg viewBox='0 0 100 100'>
            <ellipse fill='url(#gradient-3)' cx='50' cy='75' rx='25' ry='25' />
        </svg>,
    ],
}
const N3 = {
    bounds: [100, 100],
    forms: [
        <svg viewBox='0 0 100 100'>
            <rect fill='url(#gradient-3)' x='50' y='0' width='50' height='100' />
        </svg>,
        <svg viewBox='0 0 100 100' version='1.1'>
            <polygon fill='url(#gradient-2)' points='0,0 0,100 100,100' />
        </svg>,
        <svg viewBox='0 0 100 100'>
            <rect fill='url(#gradient-1)' x='0' y='0' width='50' height='100' />
        </svg>,
    ],
}
const O4 = {
    bounds: [100, 100],
    forms: [
        <svg viewBox='0 0 100 100'>
            <ellipse fill='url(#gradient-1)' cx='50' cy='50' rx='50' ry='50' />
        </svg>,
        <svg viewBox='0 0 100 100'>
            <ellipse fill='url(#gradient-2)' cx='50' cy='65' rx='35' ry='35' />
        </svg>,
        <svg viewBox='0 0 100 100'>
            <ellipse fill='url(#gradient-3)' cx='50' cy='75' rx='25' ry='25' />
        </svg>,
    ],
}
const L5 = {
    bounds: [100, 100],
    forms: [
        <svg viewBox='0 0 100 100'>
            <rect fill='url(#gradient-1)' x='0' y='0' width='50' height='100' />
        </svg>,
        <svg viewBox='0 0 100 100' version='1.1'>
            <polygon fill='url(#gradient-4)' points='0,0 0,100 75,100' />
        </svg>,
    ],
}
const I6 = {
    bounds: [100, 100],
    forms: [
        <svg viewBox='0 0 100 100' version='1.1'>
            <polygon fill='url(#gradient-5)' points='0,0 0,100 75,100' />
        </svg>,
        <svg viewBox='0 0 100 100' version='1.1'>
            <polygon fill='url(#gradient-1)' points='0,0 75,100 75,0' />
        </svg>,
        <svg viewBox='0 0 100 100'>
            <ellipse fill='url(#gradient-3)' cx='38' cy='25' rx='25' ry='25' />
        </svg>,
    ],
}
const T7 = {
    bounds: [100, 100],
    forms: [
        <svg viewBox='0 0 100 100'>
            <rect fill='url(#gradient-2)' x='0' y='0' width='100' height='50' />
        </svg>,
        <svg viewBox='0 0 100 100'>
            <rect fill='url(#gradient-3)' x='25' y='0' width='50' height='100' />
        </svg>,
    ],
}
const H8 = {
    bounds: [100, 100],
    forms: [
        <svg viewBox='0 0 100 100'>
            <rect fill='url(#gradient-1)' x='0' y='0' width='100' height='100' />
        </svg>,
        <svg viewBox='0 0 100 100'>
            <rect fill='url(#gradient-2)' x='25' y='0' width='50' height='100' />
        </svg>,
        <svg viewBox='0 0 100 100'>
            <ellipse fill='url(#gradient-3)' cx='50' cy='50' rx='25' ry='25' />
        </svg>,
    ],
}

export default [M1, O2, N3, O4, L5, I6, T7, H8];