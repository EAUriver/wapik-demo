Khai báo: 
	- const: Sử dụng để khai báo 1 hằng số, và giá trị của nó không thay đổi trong suốt chương trình.
	- let: 	Biến chỉ có thể truy cập được trong block bao quanh nó được xác định bằng cặp {}.
	- var: 	Biến có thể truy cập ở phạm vi hàm hoặc bên ngoài hàm, toàn cục.
----------------------------------------------------
Tên biến:
	- K bắt đầu bằng số có thể bắt đầu bằng dấu _
	- Phân biệt chữ hoa chữ thường 'giang' và 'Giang' là 2 biến khác nhau
----------------------------------------------------
Kiểu dữ liệu:
	- boolean
	- null
	- undefined
	- number
	- string
	- obj
	- Symbol (mới trong ECMAScript 6)
----------------------------------------------------
Truely và falsy:
	Các giá trị falsy:
		1. 0 (số 0)
		2. '' (chuỗi rỗng)
		3. null
		4. undefined
		5. NaN
		6. false
	VD về truely và falsy:
		var result = 'a' && 'b' && 'c';				// result = 'c'
	    var result = null && 'b' && 'c';			// result = null
	    var result = 'a' && undefined && false;		// result = undefined
	    // && Xét giá trị falsy nếu tìm đc trả về ngay giá trị đó nếu không tìm được trả về giá trị cuối cùng

	    var result = 'a' || 'b' || 'c';				// result = 'a'
	    var result = null || 'b' || 'c';			// result = 'b'
	    var result = 'a' || undefined || 'c';		// result = 'a'
	    var result = 0 || '' || null;				// result = null
	    // || Xét giá trị truely nếu tìm đc trả về ngay giá trị đó nếu không tìm được trả về giá trị cuối cùng
----------------------------------------------------
Toán tử:
	var number = 1;
    var test = --x + x++ + x;
   	//       =   0 + 0   + 1 => test = 1
    // tiền tố --x trả về luôn phép tính x - 1
    // hậu tố x-- trả về copy của x trước khi tính toán
----------------------------------------------------
Làm việc với kiểu dữ liệu number:
	var age = 26;							//console.log(typeof age) = number
	var pi = 3.14;							//console.log(typeof pi) = number
	var otherNumber = new Number(9);		//console.log(typeof otherNumber) = object
	var result = 20 / 'abc';   				//NaN
	
	console.log(result == NaN) //false 		// NaN không bằng NaN
	console.log(isNaN(result)) //true 
	
	// toString
	// toFixed
	// parseFloat	Ktra chuỗi bắt đầu bằng số trả về số đầu tiên tìm đc nếu k có hoặc chuỗi bắt đầu bằng ký tự trả về NaN
