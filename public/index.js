// four stock symbols: GME, MSFT, DIS, and BNTX.



const responseJSON = '{"stock-symbols": ["GME", "MSFT", "DIS", "BNTX"]}';
const responseObj = JSON.parse(responseJSON);
const stockSymbols = responseObj["stock-symbols"];
console.log("Stock symbols:", stockSymbols);




// let GME = result.GME
// let MSFT = result.MSFT
// let DIS = result.DIS
// let BTNX = result.BTNX

// const stocks = [GME, MSFT, DIS, BNTX];

// Bonus Note: 
// Another way to write the above lines would to refactor it as:
// const {GME, MSFT, DIS, BTNX} = result    
// This is an example of "destructuring" an object
// "Destructuring" creates new variables from an object or an array

// const {GME, MSFT, DIS, BTNX} = result 

async function main() {
    let response = await fetch('https://api.twelvedata.com/time_series?symbol=GME,MSFT,DIS,BNTX:Huobi,TRP:TSX&interval=1min&apikey=d4e91f22c83e451bbd79fa8894b4a8b9.json');
    let resultObject = awaitresponse.json();
    console.log(resultObject);
    
    const timeChartCanvas = document.querySelector('#time-chart');
    const highestPriceChartCanvas = document.querySelector('#highest-price-chart');
    const averagePriceChartCanvas = document.querySelector('#average-price-chart');

}

 main()

