var date = 2;
if (date === 2) {
    alert('hôm nay là thứ 2');
} else if (date === 3) {
    alert('hôm nay là thứ 3');
} else {
    alert('không biết hôm nay là thứ mấy');
};

var newDate = 4;
switch(newDate) {
    case 2:
        alert('hôm nay là thứ 2');
        break;
    case 3:
        alert('hôm nay là thứ 3');
        break;
    case 4:
        alert('hôm nay là thứ 4');
        break;
    default:
        alert('không biết hôm nay là thứ mấy');
};

//Ternary operator
var a = 1;
var b = 2;
var c = a > b ? console.log(`a = ${a} lớn hơn b = ${b}`) : console.log(`b = ${b} lớn hơn a = ${a}`);
