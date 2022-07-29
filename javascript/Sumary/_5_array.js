Khai báo:
	Cách 1: var arr1 = [];
	Cách 2: var arr2 = new Array();
----------------------------------------------------
Kiểm tra array:
	array có type là object
	Array.isArray(value)
	value là giá trị muốn kiểm tra.
----------------------------------------------------	
Làm việc với array:
	Truy xuất phần tử trong array: array[index]
	Thay đổi hoặc thêm giá trị tại index cho trước bằng phép gán: array[0] = something;

	Vd tạo mảng đoàn tàu có 9 toa: 
		var doanTau = [];
		var doanTauCuuHo = [];
		doanTau.lenght = 9;
			Thay đổi mảng gốc
				Lấy ra toa đầu tiên khỏi đoàn tàu: 			doanTau.shift();
				Lấy ra toa cuối cùng khỏi đoàn tàu: 		doanTau.pop();
				Thêm 2 toa toaDacBiet vào đầu đoàn tàu: 	doanTau.unshift('toaDacBiet','toaDacBiet');
				Thêm 2 toa toaDacBiet vào cuối đoàn tàu: 	doanTau.push('toaDacBiet','toaDacBiet');
				doanTau.splice(vị trí xóa, xóa bao nhiêu phần tử, 'Toa 1', 'Toa 2', 'Toa N');
			Không thay đổi mảng gốc
				Chuyển mảng thành chuỗi: 					doanTau.toString();
				Như trên, các phần tử cách nhau bởi dấu -: 	doanTau.join('-');
				Hợp nhất 2 mảng đoàn tàu: 					doanTau.concat(doanTauCuuHo);
				doanTau.slice(vị trí bắt đầu cắt, vị trí kết thúc cắt), doanTau.slice(0) clone mảng doanTau

	Vd array method: 
		===================================================
		var doanTau = ['Toa đầu',1,2,3,4,5,6,7,'Toa cuối'];
		===================================================
			doanTau.forEach(function(toaTau, index, doanTau){
				console.log(`Vị trí: `+index+` là toa `+toaTau);
			});

			var checkToaDacBiet = doanTau.every(function(toaTau, index, doanTau){
				console.log(index);
				return toaTau === 'toaDacBiet';
			}); // Trả về true nếu doanTau chứa các phần tử giống nhau

			var checkToaDacBiet = doanTau.some(function(toaTau, index, doanTau){
				console.log(index);
				return toaTau === 'toaDacBiet';
			}); // Trả về true nếu doanTau có 1 toa đặc biệt

			var checkToaDacBiet = doanTau.find(function(toaTau, index, doanTau){
				console.log(index);
				return toaTau === 'toaDacBiet';
			}); // Tìm toaDacBiet đầu tiên trong doanTau trả ra toaDacBiet nếu tìm thấy không tìm đc thì trả undefinded

			var checkToaDacBiet = doanTau.filter(function(toaTau, index, doanTau){
				console.log(index);
				return toaTau === 'toaDacBiet';
			}); // Tìm toàn bộ toaDacBiet trong doanTau trả ra 1 mảng chứa tất cả toaDacBiet tìm tìm đc thấy không tìm đc thì trả undefinded
		

		==================================
		var doanTau = [1,2,3,4,5,6,7,8,9];
		==================================
			var doanTauMoi = doanTau.map(function(toaTau, index){
				console.log(index);
				return toaTau * 2;
			});
		==========================
		Tính tổng số gạo trong kho
		==========================
		var khoGao = [
			{
				id: 1,
				ten: 'gao te',
				soLuong: 10,
			},
			{
				id: 2,
				ten: 'gao nep',
				soLuong: 30,
			},
			{
				id: 3,
				ten: 'gao luc',
				soLuong: 60,
			},
		]

		khoGao.reduce(function(tongCong, viTriHienTai, indexHienTai, khoGao){
			return tongCong + viTriHienTai.soLuong;
		},0);

		khoGao.reduce(function(mangSoLuong, viTriHienTai){
			return mangSoLuong.concat(viTriHienTai.soLuong);
		},[]);

		khoGao.reduce(function(mangThongTin, viTriHienTai){
			delete viTriHienTai.soLuong;
			return mangThongTin.concat(viTriHienTai);
		},[])
