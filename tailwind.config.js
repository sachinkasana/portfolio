module.exports = {
  mode: 'jit',
  purge: [
    // if you have more folder to style, add your own here and use the same rules as the below setting
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        // have edited the _document.js and change the font family there? change this too!
        poppins: '"Poppins", sans-serif',
        roboto: '"Roboto", sans-serif',
      },
      // edit this to match your customization, below are example to setting color and font weight
      typography: (theme) => ({
        default: {
          css: {
            color: theme('colors.gray.900'),

            p: {
              color: theme('colors.gray.800'),
            },
            h2: {
              color: theme('colors.gray.900'),
            },
            h3: {
              color: theme('colors.gray.900'),
            },
            h4: {
              color: theme('colors.gray.900'),
            },
            a: {
              'color': theme('colors.pink.500'),
              '&:hover': {
                color: theme('colors.pink.400'),
              },
            },
          },
        },

        dark: {
          css: {
            color: theme('colors.gray.300'),
            code: {
              color: theme('colors.gray.400'),
            },
            strong: {
              color: theme('colors.gray.400'),
            },
            blockquote: {
              color: theme('colors.gray.400'),
              fontWeight: theme('font.normal'),
            },
            h2: {
              color: theme('colors.gray.200'),
            },
            h3: {
              color: theme('colors.gray.200'),
            },
            h4: {
              color: theme('colors.gray.200'),
            },
            a: {
              'color': theme('colors.pink.500'),
              '&:hover': {
                color: theme('colors.pink.400'),
              },
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {
      typography: ['dark'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
