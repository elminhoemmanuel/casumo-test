module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    
    extend: {
      colors: {
        caspurple1: '#4C00C2',
        caspurple2: '#32007E',
        caspurple3: '#3B058E',
        casgreen: '#19AC51',
        casred: '#FC484C',
        casash: '#D3D8E1',
        casash2: '#798291',
        casash3: '#444E5D',
        casdark: '#1A212C',
        casmint:"#01c9c7",
        caslightash:"#666f7b",

        
      }
    },

    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked'],
    }
  },
  plugins: [],
}
