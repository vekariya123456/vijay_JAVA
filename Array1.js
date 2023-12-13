//Array

// let data = [11, 22, 33, 44];
// // let data = ["world","Hello",11,22,true,99]
// console.log(data);
// console.log(data.length);


//Array Method

// || Push => insert elemnt in Last Position ||

// let data = [11, 22, 33, 44, 55, 66, 77];
// console.log(data);
// data.push(88, 99);
// data.push("kiwi", "apple");
// console.log(data);


// || Pop => Delete element in Last Position  ||

// let data = [11, 22, 33, 44, "kiwi", 66, 77];
// console.log(data);
// data.pop();
// data.pop();
// console.log(data);

// || Unshift => insert Elment in First position ||

// let data = [11, 22, 33, 44, "kiwi", 66, 77];
// console.log(data);
// data.unshift(101, 202);
// console.log(data);



//  || shift => DElete Elment in First position ||

// let data = [11, 22, 33, 44, "kiwi", 66, 77];
// console.log(data);
// data.shift();
// data.shift();
// console.log(data);



//     || Changing Element ||

// let data = [11, 22, "Apple", 33, 44, "Banana"];
// console.log(data);
// data[1] = "Mango";
// console.log(data);



//    || Merge=> Merge 2 or More Array ||

// let data = [11, 22, 33, 44, 55];
// console.log(data);
// console.log((data.concat(205,206)))


// let data = [11, 22, 33, 44];
// let fruits = ["banan", "Mango", "Apple"];
// let subjet = ["GUJ", "MATH", "SCI"];
// let all = data.concat(fruits,subjet);
// console.log(all);


//   || Array Splice  ||
// splice(Staring Point, Rempove Element Number, Add New Elemnt)

// let data = ["Banana", "Mango", "Orang", "Apple", 22, 33, 44];
// console.log(data);
// data.splice(2, 3);
// console.log(data);

// data.splice(1, 0, "Pineple", "kiwi");
// console.log(data);

// data.splice(1, 2, "Pineple", "kiwi");
// console.log(data);


//    ||Array Slice ||

// let data = [11, 22, 33, 44, 55, 66, 77];
// console.log(data);
// console.log((data.slice(2, 6)));
// console.log(data.slice(2));


//  ||Array Sort ||

// let data = ["Banana", "Kiwi", "Orang", "Mngo", "Lemon"]
// data.sort();
// console.log(data.sort());


//Numeric Sort

// let data = [90, 44, 5, 45, 25, 6, 29, 95];
// data.sort(function (a, b) { return a - b });
// console.log(data);