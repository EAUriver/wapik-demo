var emailKey = 'sub-email';
var myInfor = {
    name: 'nguyen kien giang',
    age: 26,
    sex: 'male',
    address: 'hanoi',
    'something-else': 'cha co gi',
    [emailKey]: 'sub-email@gmail.com',  // đưa biến emailKey vào làm key
    getName: function() {
        return `${this.name}`;
    },
};
// thêm phần tử vào object
myInfor.email = 'nguyenkiengiangfe@gmail.com';
myInfor['my-email'] = 'nguyenkiengiangfe@gmail.com';

// xóa phần tử ra khỏi object
delete myInfor.email

// key gọi là thuộc tính
// khi key là function thì gọi đó là phương thức
console.log(myInfor);
console.log(myInfor.getName());

// object constructor
function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
};
var author = new User('kien', 'giang', 'img.jpg');
var user = new User('han', 'lap', 'img.jpg');
author.title = 'chú bé đần';
user.comment = 'something...';

console.log(author);
console.log('author: '+author.getName());
console.log(user);
console.log('user: '+user.getName());

// object prototype
User.prototype.className = 'javascript online';
User.prototype.getClassName = function () {
    return this.className
};

console.log(user.getClassName());

// date object 
// tìm hiểu qua gg : javascript date object mozilla