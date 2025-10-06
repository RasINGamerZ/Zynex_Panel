const express = require('express');
const router = require('./router');

function register(addonManager) {
    //console.log('loaded!');
}

module.exports = {
    register,
    router
};

// Branding: set document title
try{ if (typeof document !== 'undefined') document.title = document.title || 'Zynex Panel — powered by Hydra and MrDrayNoX'; }catch(e){}
