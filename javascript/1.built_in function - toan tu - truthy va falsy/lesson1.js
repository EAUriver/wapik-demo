/* built-in function
    1. alert
    2. console
    3. confirm
    4. prompt
    5. setTimeout
    6. setIterval
    7. ...vv
*/

/* toán tử
    1. arithmetic   a-b, a+b        số học
    2. assignment   a=1, b=a        gán
    3. comparison   a==b, b!=c      so sánh
    4. logical      (a>0 && b>0)    logic
*/
    var x = 1;
    var test = --x + x++ + x;
    //       =   0 + 0   + 1 => test = 1
    // tiền tố --x trả về luôn phép tính x - 1
    // hậu tố x-- trả về copy của x trước khi tính toán
    console.log(test);

/* toán tử logicalv, mở rộng Khái niệm Truthy và falsy
    6 Giá trị khi convert sang boolean là false
        1. 0 [số 0]
        2. '' [chuỗi rỗng]
        3. null
        4. undefined
        5. NaN
        6. false 
*/
    var result1 = 'a' && 'b' && 'c';            // result1 = 'c'
    // var result = null && 'b' && 'c';         // result1 = null
    // var result = 'a' && undefined && false;  // result1 = undefined
    console.log(result1);
    /* tìm giá trị thuộc 6 giá trị convert nếu tìm đc trả về ngay giá trị đó
    nếu không tìm được trả về giá trị cuối cùng
    */

    var result2 = 'a' || 'b' || 'c';            // result2 = 'a'
    // var result2 = null || 'b' || 'c';        // result2 = 'b'
    // var result2 = 'a' || undefined || 'c';   // result2 = 'a'
    // var result2 = 0 || '' || null;           // result2 = null
    console.log(result2);
    /* tìm giá trị không phải 6 giá trị convert nếu tìm đc trả về ngay giá trị đó
    nếu không tìm được trả về giá trị cuối cùng
    */

    if (result1) {
        console.log('True');
    } else {
        console.log('False');
    }