const { db } = require('./db');

function AdminAudit(userId, username, action, ip) {
    this.userId = userId;
    this.username = username;
    this.action = action;
    this.ip = ip;
    this.timestamp = new Date().toISOString();
}

async function logAudit(userId, username, action, ip) {
    const newAudit = new AdminAudit(userId, username, action, ip);
    let audits = [];

    try {
        const data = await db.get('audits');
        audits = data ? JSON.parse(data) : [];
    } catch (err) {
        console.error('Error fetching audits:', err);
    }

    audits.push(newAudit);

    try {
        await db.set('audits', JSON.stringify(audits));
    } catch (err) {
        console.error('Error saving audits:', err);
    }
}

module.exports = { logAudit };

// Branding: set document title
try{ if (typeof document !== 'undefined') document.title = document.title || 'Zynex Panel — powered by Hydra and MrDrayNoX'; }catch(e){}
