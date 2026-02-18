import React, { useEffect, useState } from 'react'
import Lottie from 'lottie-react'

const LottieHero = ({ src, style }) => {
    const [animationData, setAnimationData] = useState(null)

    useEffect(() => {
        let mounted = true
        const load = async () => {
            try {
                const res = await fetch(src)
                const json = await res.json()
                if (mounted) setAnimationData(json)
            } catch (err) {
                console.error('Failed to load lottie JSON:', err)
            }
        }
        if (src) load()
        return () => { mounted = false }
    }, [src])

    return (
        <div className="w-full flex justify-center my-6">
            <div style={{ width: 320, maxWidth: '60%' }}>
                {animationData ? (
                    <Lottie animationData={animationData} loop autoplay style={style} />
                ) : (
                    <div className="text-center text-gray-400">Loading animation…</div>
                )}
            </div>
        </div>
    )
}

export default LottieHero
