module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['src/**/*.jsx', 'src/**/*.tsx'],
  },

  theme: {
    extend: {
      colors: {
        github: {
          1: '#24292e',
        },
        twitter: {
          1: '#1da1f2',
        },
        google: {
          1: '#4285f4',
          2: '#34a853',
          3: '#fbbc05',
          4: '#ea4335',
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['disabled'],
      cursor: ['disabled'],
    },
  },
  plugins: [],
};
