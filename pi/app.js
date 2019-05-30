// Pi calculating
console.log("Connected");

calcPi();

function calcPi() {
    let pi = 0;
    let num = Math.sqrt(2) / 2;
    let prev = num;
    setInterval(() => {
        prev = Math.sqrt(2 * prev + 2) / 2;
        num *= prev;
        console.log(2 / num);
    }, 10);
}