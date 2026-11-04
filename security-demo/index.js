const https = require('https');

function checkSecurityHeaders(url) {
    console.log(`Checking security status for: ${url}...`);
    https.get(url, (res) => {
        console.log('Response Status:', res.statusCode);
        console.log('Security Headers:', res.headers);
    }).on('error', (e) => {
        console.error('Error checking URL:', e);
    });
}

checkSecurityHeaders('https://google.com');
