Khởi tạo & gọi hàm:
	Cách 1:
		sayHello ();
		function sayHello () {
			console.log("Hello World");
		}
		Với cách 1 ta có thể gọi hàm trước cả khi nó được định nghĩa.

	Cách 2:
		const sayHello = function() {
			console.log("Hello World");
		}
		sayHello;
----------------------------------------------------
Tên hàm: Tương tự như khai báo biến
----------------------------------------------------
Các kiểu hàm:
	- function declaration 	[Cách 1]
	- function expression 	[Cách 2]
	- arrow function
----------------------------------------------------
Return: 
	- function không có return sẽ trả về gtrị undefinded
	- mọi dòng code sau dòng return đều k hoạt động
----------------------------------------------------
Arguments:
	function write () {
		var string = "";
		for (var param of arguments) {
			string += `${param} - `;
		}
		console.log(string);
	}
	write('nguyen','kien','giang');
----------------------------------------------------
//Arrow function:
