
export default function Button({ content, ...rest }) {
    return (
        <a className='text-white transition-colors bg-pink-600 p-3 px-5 relative'{...rest}>
            <span>{content}</span>{' '}
            <svg className='inline-block' stroke='#FFF' strokeWidth='2' width='23' height='14' version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 23 14">
                <line x1="22" y1="7" x2="16" y2="1"></line>
                <line x1="22" y1="7" x2="16" y2="13"></line>
                <line x1="0" y1="7" x2="23" y2="7"></line>
            </svg>
            <div className='transition-transform w-full h-full absolute left-0 top-0 bg-transparent border-2 border-pink-600 transform hover:translate-x-1 hover:translate-y-1 translate-x-2 translate-y-2' />
        </a>
    )
}