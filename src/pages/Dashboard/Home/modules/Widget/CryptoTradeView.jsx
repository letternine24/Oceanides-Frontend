import React, { useEffect } from 'react';
import "./Tradeview.css"; 

const CryptoTradeView = () => {
    const containerId = 'crypto-widget-container';
    const scriptId = 'crypto-tradingview-script';

    useEffect(() => {
        const container = document.getElementById(containerId);

        if (container) {
            container.innerHTML = ''; // Clear existing contents
        }

        if (container && !document.getElementById(scriptId)) {
            const script = document.createElement('script');
            script.id = scriptId;
            script.src = 'https://s3.tradingview.com/tv.js';
            script.async = true;

            script.onload = () => {
                if (window.TradingView) {
                    new window.TradingView.widget({
                        "container_id": containerId,
                        "width": 980,
                        "height": 1000,
                        "symbol": "NASDAQ:AAPL",
                        "interval": "D",
                        "timezone": "Etc/UTC",
                        "theme": "light",
                        "style": "1",
                        "locale": "en",
                        "toolbar_bg": "#f1f3f6",
                        "enable_publishing": false,
                        "allow_symbol_change": true,
                        "autosize": true
                    });
                }
            };

            document.body.appendChild(script);
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

export default CryptoTradeView;