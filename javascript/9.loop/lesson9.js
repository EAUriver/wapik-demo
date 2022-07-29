/* Vòng lặp - loop
    1. for - lặp với điều kiện đúng
    2. for/in - lặp qua key của [array, object, string]
    3. for/of - lặp qua value của [array, string]
    4. while - lặp khi điều kiện đúng
    5. do/while - chạy code trong do rồi lặp
*/

for (var i =  1; i < 10; i++) {
    console.log(i);
}

var myArr = [
    'js',
    'php',
    'java',
    'c'
];
console.log('myArr[0]: '+myArr[0]);

// khai biến ra ngoài để tối ưu tránh thực hiện code nhiều lần
var myArrLength = myArr.length  
for  (var i = 0; i < myArrLength; i++) {
    console.log('myArr['+i+'] = '+ myArr[i]);
}

// For in
var myInfor = {
    name: 'giang',
    age: 26,
    address: 'hanoi',
}

for (var key in myInfor) {
    console.log(key+': '+myInfor[key]);
}

// For of
var languages = [
    'js',
    'php',
    'java',
]
for (var value of languages) {
    console.log(value)
}

// While
var i = 0;
while (i < 100) {
    console.log(i);
    i++;
}

// Do while
let y = 0;
do {
    y++;
    console.log(y);
} while (y<5);

// Break & continue 
// Break & continue sử dụng được trong mọi vòng lặp
for (var i = 0; i<10; i++) {
    if(i%2 !== 0) {
        // break;
        continue;
    }
    console.log(i);
}

// Vòng lặp lồng nhau Nested loop
var myArray = [
    [1,2],
    [3,4],
    [5,6],
];
var resultArray = [];
for (var i = 0; i<myArray.length; i++) {
    for(var j = 0; j<myArray[i].length; j++) {
        resultArray.push(myArray[i][j]);
    }
};
console.log(resultArray);
