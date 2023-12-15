//    ||REVERSE NUMBER  ||

let data = Number(prompt("Enter the Number: "));

let r =a(data)
console.log("Current NUmber is:", data);
console.log("Reverse NUmber is: ", r);

function a(n) {
    let sum = 0;
    while (n != 0) {
        sum = sum * 10 + n % 10;
        n = Math.floor(n / 10);
    }
    return sum;
}
