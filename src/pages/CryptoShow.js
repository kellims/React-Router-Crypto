import { useParams } from "react-router";

import { useState, useEffect } from "react";

function CryptoShow() {
    //Setting a variable called symbol that matches the value of whatever the param is in the URL. It could be BTC, LTC, etc. Make sure that the symbol here matches what you called it in the app where you created the params
    const { symbol } = useParams();
    console.log(symbol)

    //Give coin a starting value of null;
    const [coin, setCoin] = useState(null)

    async function fetchCoinInfo(){
        try {
            //Made a fetch request to the API and set the value of that to data.
            let data = await fetch(`http://rest-sandbox.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=EF7192E6-3045-4D37-912F-32EE5EEBC3C1`)
            //Make sure we parse this so that it comes into our app as JSON
            data = await data.json();
            //Console log it so we can see what the data coming in is when we're trying to use it in our component
            console.log(data);
            //Set the value of coin to the data retrived from the API
            setCoin(data);

        } catch(err) {
            console.log(err);
        }
    }

    //run this function, and then how often do you want to run in? The [] means just one time. I want to make one call using my useEffect that invokes the fetchCoinInfo function which alerts my API call. The second argument insures we do not make constant calls to the API as that will kill our key
    useEffect(() => {
        fetchCoinInfo()
    }, [])

    //This is just a function to be invoked when the coin is loaded. Meaning when the coin does not still have its starting value of null
    function loaded() {
        return(
            <>
                <h1>The coin {symbol} has a value of ${coin.rate.toFixed(3)} in {coin.asset_id_quote}</h1>
            </>
        )
    }

    function loading(){
        return(
            <h1>Loading</h1>
        )
    }

    return(
        <>
        {/*Need to make sure, because this is an async call to an API, that we handle what happens while we're still waiting for the API to load*/}
            {coin ? loaded() : loading()}
        </>
    )
}

export default CryptoShow