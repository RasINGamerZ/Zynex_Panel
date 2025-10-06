/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.ejs", "./plugins/**/**/*.ejs"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
// Branding: set document title
try{ if (typeof document !== 'undefined') document.title = document.title || 'Zynex Panel — powered by Hydra and MrDrayNoX'; }catch(e){}
