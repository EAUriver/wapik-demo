For: 
	for(let i = 0; i < 5; i++) {
		console.log(i);
	};
	Vòng for return undefinded
----------------------------------------------------------------------------------
While:
	let x = 1;
	let y = 5;
	while (y>x) {
		console.log(x);
		x++;
	}
	Vòng while return giá trị tại lần lặp cuối cùng.
----------------------------------------------------------------------------------
Do while:
	let z = 1;
	do {
		console.log(z);
		z++;
	} while (z<5)
	Vòng do while return giá trị tại lần lặp cuối cùng.
----------------------------------------------------------------------------------
For in:
	const obj = { name: 'Nguyen Van A', age: 16, national: 'Viet Nam' };
	let text = '';
	for (let key in obj) {
		text += obj[key] + " - ";
	}
	console.log(text);
	Vòng for in lặp qua các key của object.
	Vòng for in có thể lặp qua array nhưng chỉ lặp những phần tử thực phần tử empty sẽ không được lặp.
----------------------------------------------------------------------------------
For of:
	const arr = [0, 1, 2];

	for (let value of arr) {
		value += 1;
		console.log(value);
	}
	Vòng for of lặp qua các value của array.
	Vòng for of k thể lặp qua object nếu muốn sử dụng để lặp qua object thì phải tùy biến 1 chút.
----------------------------------------------------------------------------------
Break và Continue trong vòng lặp: