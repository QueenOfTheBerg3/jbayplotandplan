module.exports = {
    purge: [
        './components/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'media',
    theme: {
        extend: {
            colors: {
                'accent-test': '#333',
                primary: '#073b4c',
                secondary: '#149dcc',
            },
            height: {
                'mobile-nav': '56px',
                'normal-nav': '80px',
            },
            inset: {
                'mobile-nav': '56px',
                'normal-nav': '80px',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
