var languages = [
    'js',
    'php',
    'ruby',
    null,
    undefined,
    NaN,
    function () {
        alert('hello');
    },
    {},
    123,
];
var otherLanguages = [
    'java',
    'c#',
]

// kiểm tra array
console.log(typeof languages)           //object
console.log(Array.isArray(languages))   //true

// lấy phần tử theo index
console.log(languages[0]);
console.log(languages[1]);
console.log(languages[2]);

/* làm việc với array 
    1. toString         //console.log(languages.toString())
    2. join             //console.log(languages.join('-'))
    3. pop              //console.log(languages.pop())                                  //xóa phần tử cuối mảng trả về PHẦN TỬ ĐÓ
    4. push             //console.log(languages.push('kien', 'giang'))                  //thêm phần tử ở cuối mảng trả về ĐỘ DÀI MẢNG MỚI
    5. shift            //console.log(languages.shift())                                //xóa phần tử đầu mảng trả về PHẦN TỬ ĐÓ
    6. unshift          //console.log(languages.unshift('giang', 'kien'))               //thêm phần tử ở đầu mảng trả về ĐỘ DÀI MẢNG MỚI
    7. splicing         //console.log(languages.splice(1,1,'chen','them','gi','do'))    //xóa những phần tử ở vị trí đã chọn và thêm phần tử mới tại vị trí vừa xóa
    8. concat           //console.log(languages.concat(otherLanguages))                 //hợp nhất 2 mảng
    9. slicing          //console.log(languages.slice(1,2)                              //cắt phần tử ở vị trí đã chọn, slice(0) clone mảng
*/