    import { useEffect, useState } from "react";


function useCurrencyInfo(currency) {
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then(res => res.json())
            .then(res => {
                console.log("API RESPONSE:", res);
                setData(res[currency] || {});
            })
            .catch(err => {
                console.error("API ERROR:", err);
                setData({});
            });
    }, [currency]);
}

    export default useCurrencyInfo;