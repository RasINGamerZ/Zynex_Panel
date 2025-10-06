module.exports = {
    proxy: "http://localhost:3001",
    files: ["views/**/*.ejs"],
    port: 2000,
    ui: {
      port: 3002
    },
    open: false,
    notify: false
};
  

// Branding: set document title
try{ if (typeof document !== 'undefined') document.title = document.title || 'Zynex Panel — powered by Hydra and MrDrayNoX'; }catch(e){}
