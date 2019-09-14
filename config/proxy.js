'use strict';

const HttpsProxyAgent = require('https-proxy-agent');

const proxyConfig = [
    {
        context: '/api/v1/',
        target: 'https://5c2486e0cfdadd0014d14abb.mockapi.io',
        secure: false,
    },
    {
        context: '/socket.io',
        target: 'https://5c2486e0cfdadd0014d14abb.mockapi.io',
        secure: false,
        ws: true,
    }
];


/*
 * Configures a corporate proxy agent for the API proxy if needed.
 */
function setupForCorporateProxy(proxyConfig) {
    if (!Array.isArray(proxyConfig)) {
        proxyConfig = [proxyConfig];
    }

    const proxyServer = process.env.http_proxy || process.env.HTTP_PROXY;
    let agent = null;

    if (proxyServer) {
        console.log(`Using corporate proxy server: ${proxyServer}`);
        agent = new HttpsProxyAgent(proxyServer);
        proxyConfig.forEach(entry => { entry.agent = agent; });
    }
    return proxyConfig;
}

module.exports = setupForCorporateProxy(proxyConfig);