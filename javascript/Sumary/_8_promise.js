Js là ngôn ngữ lập trình đơn luồng! [single-thread]
----------------------------------------------------
Sync [Đồng bộ]:
	console.log('Vo gạo');
	console.log('Đong nước');
	console.log('Cắm cơm');
	// Hàm console.log sẽ in ra từng dòng lệnh theo đúng thứ tự ta xem đó là tính đồng bộ của js.
----------------------------------------------------
Async [Bất đồng bộ]:
	console.log('Vo gạo');
	setTimeout(function(){
		console.log('Đong nước');
	}, 3000);
	console.log('Cắm cơm');
	// Hàm console.log sẽ in ra "Vo gạo" và "Cắm cơm" trước rồi in ra 'Đong nước' sau 3s hành động như vậy được coi là bất đồng bộ.
----------------------------------------------------
Callback hell - Pyramid of Dom:
	VD:
	setTimeout(function(){
		console.log('Vo gạo');
		setTimeout(function(){
			console.log('Đong nước');
			setTimeout(function(){
				console.log('Cắm cơm');
			}, 3000);
		}, 3000);
	}, 3000);
----------------------------------------------------
Promise:
	var promise = new Promise(
		// Executor
		function(resolve, reject) {
			// 2 tham số đều là function
			// Thành công: resolve();
			// Thất bại: reject();
		}
	);

	promise
		.then(function(){
			console.log('Thành công!');

			return 1;
		});
		.then(function(data){
			console.log('Thành công lần 2!');
			console.log(data);
		}); 
		// then trước chạy xong sẽ chạy then tiếp theo!
		// then trước return ra data ta có thể lấy được và in ra
		.catch(function(){
			console.log('Thất bại!');
		});
		.finally(function(){
			console.log('Kết thúc!');
		});
	
	// promise có 3 trạng thái:
	// 		Pendding: Chờ thực thi.
	// 		Fulfilled: Thực thi xong.
	// 		Reject: Từ chối.
//