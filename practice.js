function arr(str) {
    let a = str.split('');
    return a.sort().join('');
    
}
console.log(arr(prompt("Enter your string: ")));