export default function changeCalculator (change) {
    let result = {};
    let coins = [
        200,
        100,
        50,
        20,
        10,
        5,
        2,
        1
    ];
    for (var i = 0; i < coins.length; i++) {
        let coinCount = change / coins[i];
        if (coinCount >= 1) {
            if (result[coins[i]]) result[coins[i]] += Math.floor(coinCount);
            else result[coins[i]] = Math.floor(coinCount);
            change -= coins[i] * Math.floor(coinCount);
        }
    }
    return result;
}