import React, { useEffect } from 'react'

const CSSCheck = () => {
    useEffect(() => {
        const el = document.getElementById('css-check-text')
        const btn = document.getElementById('css-check-btn')
        if (el) {
            const style = window.getComputedStyle(el)
            console.log('CSSCheck: computed color for #css-check-text =>', style.color)
        }
        if (btn) {
            const bstyle = window.getComputedStyle(btn)
            console.log('CSSCheck: computed background for #css-check-btn =>', bstyle.backgroundColor)
        }
    }, [])

    return (
        <div className="fixed bottom-4 right-4 z-50 p-3 glass-effect rounded-md text-sm">
            <div id="css-check-text" className="text-electric-blue font-bold">CSS Check: electric-blue text</div>
            <div className="mt-2">
                <button id="css-check-btn" className="px-3 py-1 bg-electric-blue text-dark rounded">Button</button>
            </div>
        </div>
    )
}

export default CSSCheck
