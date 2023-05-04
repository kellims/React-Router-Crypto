import { Link } from 'react-router-dom';

function CryptoIndex() {
    const currencies = [
        { name: "Bitcoin", symbol: "BTC" },
        { name: "Litecoin", symbol: "LTC" },
        { name: "Ethereum", symbol: "ETH" },
        { name: "Ethereum Classic", symbol: "ETC" },
        { name: "Stellar Lumens", symbol: "XLM" },
        { name: "Dash", symbol: "DASH" },
        { name: "Ripple", symbol: "XRP" },
        { name: "Zcash", symbol: "ZEC" }
    ];

    return(
        <>
            <h2>My currencies:</h2>
            {currencies.map((currency, idx) => {
                return(
                    <div key={idx}>
                        <Link to={`/price/${currency.symbol}`}>{currency.name}</Link>
                    </div>
                )

            })}
        </>
    )
}

export default CryptoIndex;