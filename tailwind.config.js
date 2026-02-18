export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                dark: '#050505',
                'dark-secondary': '#0f0f0f',
                'electric-blue': '#00d9ff',
                'cyber-purple': '#b000d4',
                'gray-dark': '#1a1a1a',
                'light-bg': '#f8fafc',
                'light-secondary': '#e2e8f0',
            },
            backdropBlur: {
                xs: '2px',
            },
            animation: {
                shimmer: 'shimmer 2s infinite',
                'gradient-shift': 'gradient-shift 6s ease infinite',
                'float': 'float 3s ease-in-out infinite',
                'pulse-slow': 'pulse 3s ease-in-out infinite',
            },
            keyframes: {
                shimmer: {
                    '0%': { backgroundPosition: '-1000px 0' },
                    '100%': { backgroundPosition: '1000px 0' },
                },
                'gradient-shift': {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
            },
            backgroundSize: {
                shimmer: '1000px 100%',
            },
            fontSize: {
                'xs': '0.75rem',
                'sm': '0.875rem',
                'base': '1rem',
                'lg': '1.125rem',
                'xl': '1.25rem',
                '2xl': '1.5rem',
                '3xl': '1.875rem',
                '4xl': '2.25rem',
                '5xl': '3rem',
                '6xl': '3.75rem',
                '7xl': '4.5rem',
            },
            fontFamily: {
                'inter': ['Inter', 'sans-serif'],
                'mono': ['Space Mono', 'monospace'],
            },
        },
    },
    plugins: [],
}
