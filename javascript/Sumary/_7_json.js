
JSON - Javarscript Object Notation:

	Là 1 định dạng dữ liệu dạng chuỗi. 	// number, boolean, null, string, array, object là những kiểu dữ liệu có thể chuyển đổi
	VD
		var json = '1';
		json = 'true';
		json = 'false';
		json = 'null';
		json = '"123"';
		json = '["Javarscript","PHP"]';
		json = '{"name":"Nguyen Van A", "age": 19}';

	Parse:
		var a = '1';
		console.log(JSON.parse(a));
		// Từ JSON chuyển thành định dạng dữ liệu Javarscript.
	Stringify: 
		console.log(JSON.stringify({
			name: 'Van A',
			age: 15,
			test: function(){
				console.log('Test');
			},	// K chuyển được test qua JSON
		}))
		// Từ Javarscript chuyển thành định dạng dữ liệu JSON.