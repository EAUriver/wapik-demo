/* 
Array methods: 
    forEach()
    every()
    some()
    find()
    filter()
    map()
    reduce()
*/
var sects = [
    {
        id: 1,
        name: 'xiaolin',
        follower: 1000,
    },
    {
        id: 2,
        name: 'kowloon',
        follower: 500,
    },
    {
        id: 3,
        name: 'emei sect',
        follower: 250,
    },
    {
        id: 4,
        name: 'wutang pai',
        follower: 0,
    },
    {
        id: 5,
        name: 'emei sect',
        follower: 10,
    },
]

//forEach
sects.forEach(function(sect, index){
    console.log(index);
    console.log(sect);
})

//every - trả về boolean
var followerCheck1 = sects.every(function(sect, index){
    console.log(index);
    return sect.follower === 0;
});
console.log(followerCheck1);

//some - trả về boolean
var followerCheck2 = sects.some(function(sect, index){
    console.log(index);
    return sect.follower === 0;
});
console.log(followerCheck2);

//find - tìm 1
var sect = sects.find(function(sect, index){
    console.log(index);
    return sect.name === 'emei sect';
});
console.log(sect);

//filter - tìm toàn bộ
var listSect = sects.filter(function(sect, index){
    console.log(index);
    return sect.name === 'emei sect';
});
console.log(listSect);

//map - thay đổi arr 
var newSects = sects.map(function(sect){
    return {
        id: sect.id,
        name: `Môn phái: ${sect.namet}`,
        follower: `Môn đồ: ${sect.follower}`,
    };
});
console.log(newSects);

//reduce 
// bài toán tính tổng môn đồ của các phái
var totalFollower = sects.reduce(function(accumulator, currentValue, currentIndex, originArray){
    return accumulator + currentValue.follower;
}, 0);

    /*
    accumulator: biến tích trữ được khai báo ở tham số thứ 2 của reduce
    currentValue: giá trị hiện tại ở ví dụ này sẽ trả về 1 object tại mảng sects
    currentIndex: index của currentValue
    originArray: mảng gốc
    thường khi ta dùng reduce chỉ cần function(accumulator, currentValue) là được
    */