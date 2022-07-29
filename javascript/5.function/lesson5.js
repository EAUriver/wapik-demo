function myFunction () {
    alert('hello');
};
myFunction();
//function không có return thì sẽ return undefined

// tham số trong function
function writeLog (message1, message2) {
    console.log(message1+message2);
};
writeLog('kiengiang', 26);

// arguments
function write () {
    var string = "";
    for (var param of arguments) {
        string += `${param} - `;
    }
    console.log(string);
}
write('nguyen','kien','giang');

// return trong function
function sum (a,b) {
    return a+b;
    // mọi code sau dòng return đều không hoạt động
    console.log(123);
    arlet('321');
}
sum(4,5);

// các loại function
example();
function example() {
    //đây là declaration function
    //function không được đặt tên k phải là declaration function
    //vì javascript hoisting nên declaration function có thể được gọi trước khi khai báo
}

var something =  function () {
    //đây là expression function
    //phải khai báo mới gọi được
}

setTimeout (function autoShow() {
    // đây là callback function trong expression function
});

    //arrow function
    // ?????????????