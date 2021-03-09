import dynamic from 'next/dynamic'

export default dynamic(() => import('./cowen'), {
    ssr: false
})