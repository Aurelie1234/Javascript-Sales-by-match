function sockMerchant(n, ar) {
    // Write your code here
let pairs = 0;
let obj = {};
    ar.forEach(i => {
        if (obj[i]) {
            pairs += 1;
            obj[i] = 0;
        } else {
            obj[i] = 1;
        }
    });
    return pairs;
}
