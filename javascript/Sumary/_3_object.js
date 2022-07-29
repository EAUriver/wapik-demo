Khai báo:
	Cách 1: var obj1 = {};
	Cách 2: var obj2 = new Object();
----------------------------------------------------
Kiểm tra object:
	if(typeof obj1 === 'object') {
		return true;
	} else {
		return false;
	}
----------------------------------------------------	
Làm việc với object:
	var value = 'something';
	var obj = {
		name: 'Nguyen Van A',
		age: 9,
		isAlive : true,
		[value]: 'Lấy biến value ở trên vào làm key của obj',
		'something-else': '1 cách đặt tên key',
		getName: function() {
			return `${this.name}`;
		},
	}

	Truy xuất dữ liệu theo key: 					obj.name; hoặc obj[name];
	Thêm, sửa dữ liệu theo key: 					obj.name = 'Nguyen Kien Giang';
	Xóa phần tử khỏi object qua key: 				delete obj.name;
----------------------------------------------------
Tạo object constructor gạo:
	function Gao(ten, khoiLuong, gia) {
		this.ten = ten;
		this.khoiLuong = khoiLuong;
		this.gia = gia;
		this.getThongTin = function() {
			return `${this.ten} ${this.khoiLuong}`;
		}
	};

	Sử dụng object constructor:
		var gaoNep = new Gao('gao-nep', 10, '180.000VND');
		console.log(gaoNep);

	Object prototype:
		Gao.prototype.nhapKhau = 'Nhap khau tu thai lan';
		Gao.prototype.getnhapKhau = function () {
			return this.nhapKhau;
		};


