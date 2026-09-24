async function convertCurrency() {

    let amount = document.getElementById("amount").value;
    let fromCurrency = document.getElementById("fromCurrency").value;
    let toCurrency = document.getElementById("toCurrency").value;

    if (amount === "") {
        document.getElementById("result").innerText =
            "Please enter an amount";
        return;
    }

    try {

        const url = `https://api.frankfurter.dev/v2/rate/${fromCurrency}/${toCurrency}`;

        let response = await fetch(url);

        let data = await response.json();

        let convertedAmount = amount * data.rate;

        document.getElementById("result").innerText =
            `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;

    } catch (error) {

        document.getElementById("result").innerText =
            "Error fetching currency data";

        console.log(error);
    }
}