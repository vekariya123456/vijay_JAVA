// RETURN IN ALPHABATIC WISE OF STRING WORD

// function arr(str) {
//     return str.split('').sort().join('');
// }
// console.log(arr(prompt("Enter string: ")));



//RETURN FIRST CARACTER OF WORD IN ALPHABAT

function capital_firstletter(text){
    
    let words = text.split(" ");
    for (let i = 0; i < words.length; i++)
    {
        words[i].CharAT(0).toUpperCase() + words[i].slice(1);   
    }
}