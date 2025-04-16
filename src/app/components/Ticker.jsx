import { useEffect } from 'react';

export default function Ticker() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://widgets.coingecko.com/gecko-coin-price-marquee-widget.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
        <>
            {/* ticker with fade effect */}
            <div className=" relative z-50">
                <gecko-coin-price-marquee-widget locale="en" dark-mode="true" outlined="true" coin-ids="" initial-currency="usd"></gecko-coin-price-marquee-widget>
            </div>
        </>
    );
}