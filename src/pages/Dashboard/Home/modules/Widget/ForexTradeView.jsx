import React, { useEffect } from 'react';
import "./Tradeview.css"; 

const ForexTradeView = () => {
    const containerId = 'forex-widget-container';
    const scriptId = 'forex-widget-script';

    useEffect(() => {
        const container = document.getElementById(containerId);

        if (container) {
            container.innerHTML = ''; // Clear existing contents
        }

        if (container && !document.getElementById(scriptId)) {
            const script = document.createElement('script');
            script.id = scriptId;
            script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-forex-cross-rates.js';
            script.async = true;
            script.innerHTML = JSON.stringify({
                "width": 980,
                "height": 1000,
                "currencies": [
                    "EUR", "USD", "JPY", "GBP", "CHF", "AUD", "CAD", "NZD", "CNY"
                ],
                "isTransparent": false,
                "colorTheme": "light",
                "locale": "en"
            });

            container.appendChild(script);
        }

        return () => {
            const scriptToRemove = document.getElementById(scriptId);
            if (scriptToRemove) {
                scriptToRemove.remove();
            }
            if (container) {
                container.innerHTML = '';
            }
        };
    }, []);

    return <div id={containerId} />;
};

export default ForexTradeView;