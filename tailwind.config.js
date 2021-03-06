module.exports = {
    purge: ['./src/!**!/!*.{js,jsx,ts,tsx}'],
    darkMode: 'media',
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
    ],
};
