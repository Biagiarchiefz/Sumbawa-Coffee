/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {                                             // import url link google font yang ingin digunakan di dalam file index.css
      fontFamily: {                                      // nama dari tulisan fontFamily tidak boleh bebas
        primary : ["Times New Roman", "sans-serif"]      // penamaan font boleh bebas, tetapi nama font di dalam [""] tidak boleh bebas 
    },
  },
  plugins: [],
}
}
