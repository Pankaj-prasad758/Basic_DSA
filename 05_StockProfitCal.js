// calculate profit from stock

const StockProfit = (prices) => {
    let globalProfit = 0;

    for (let i = 0; i < prices.length - 1; i++) {
        for (let j = i + 1; j < prices.length; j++) {
    const currentProfit = prices[j] - prices[i]
            if(currentProfit > globalProfit) globalProfit = currentProfit
        }
        
    }
    return globalProfit
}
// console.log(StockProfit([7,3,4,8,4,9,16]));


// greedy algorithms

const maxProfit = (prices) => {
    let minStockPurchasePrice = prices[0] || 0;
    let profit = 0;

    for (let i = 1; i < prices.length; i++) {
        if(prices[i] < minStockPurchasePrice){
            minStockPurchasePrice = prices[i];
        }
        
        profit = Math.max(profit, prices[i] -minStockPurchasePrice)
        console.log(profit,i);
        
    }
    return profit
 }
 console.log(maxProfit([7,3,4,8,4,9,16]));
 