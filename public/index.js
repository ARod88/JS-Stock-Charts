async function main() {
    let response = await fetch('https://api.twelvedata.com/time_series?symbol=GME,MSFT,DIS,BNTX:Huobi,TRP:TSX&interval=1min&apikey=d4e91f22c83e451bbd79fa8894b4a8b9.json');
    let resultObject = response.json();
    console.log(resultObject);
    
    const timeChartCanvas = document.querySelector('#time-chart');
    const highestPriceChartCanvas = document.querySelector('#highest-price-chart');
    const averagePriceChartCanvas = document.querySelector('#average-price-chart');

}

 main()

