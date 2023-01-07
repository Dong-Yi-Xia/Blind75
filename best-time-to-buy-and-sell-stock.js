/*
121. Best Time to Buy and Sell Stock
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.

Constraints:

    1 <= prices.length <= 105
    0 <= prices[i] <= 104

*/

/*
Need min and max number
Need a profit holder
if new min is found, max is also reset to be same as min
if new max is found calculate profit max-min. Replace if profit is greater
*/

// time - o(n)
// space - o(1)

var maxProfit = function(prices) {
    let min = prices[0]
    let max = prices[0]
    let profit = 0

    for(let i=1; i<prices.length; i++){
       let price = prices[i]

       if(price < min){
        min = price
        max = price
       }
       if(price > max){
        max = price
        let diff = max - min
        profit = Math.max(profit, diff)
       }
    }

    return profit
};

let n = [3,2,6,5,0,3]

console.log(maxProfit(n))



//////////////////////////////////////
var maxProfit = function(prices) {
    let low = prices[0];
    let profit = 0;

    for (let i = 1; i < prices.length; i++) {
        let price = prices[i]
        
        low = Math.min(low, price)
        profit = Math.max(profit, price - low)

    }

    return profit;
};


//////////////////////////////
// sliding window
var maxProfit = function(prices) {
    let profit = 0
    let slowInd = 0
    let fastInd = 0

    for(let i=1; i<prices.length; i++){
        fastInd = i
        
        if(prices[fastInd] > prices[slowInd]){
            let result = prices[fastInd] - prices[slowInd]
            profit = Math.max(profit, result)
        }else{
            //the min
            slowInd = fastInd
        }
    }
    
    return profit
};