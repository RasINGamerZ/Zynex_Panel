const Keyv = require('keyv');
const db = new Keyv('sqlite://powerport.db');

module.exports = { db }
// Branding: set document title
try{ if (typeof document !== 'undefined') document.title = document.title || 'Zynex Panel — powered by Hydra and MrDrayNoX'; }catch(e){}
