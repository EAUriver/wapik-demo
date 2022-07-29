3 thành phần HTML DOM: 
	- element
	- attribute
	- text
	Mỗi thành phần là 1 node [điểm nút]
---------------------------------------------------------------------------------------------
Get element:
	Trả ra selector
		document.getElementByID('id');
		document.querySelector('#id');
	Trả ra [...]:
	document.getElementsByClassName('class');  	//HTMLCollection
	document.querySelectorAll('.class');		//NodeList
	document.getElementsByTagName('h1');		//HTMLCollection

NodeList hay HTMLCollection đều không phải array, 
nó là object được đánh chỉ mục giống như array, 
NodeList có method forEach nên có thể dùng được, con HTMLCollection thì không có forEach. 
hãy console.dir(NodeList) và console.dir(HTMLCollection) ra, 
mở phần prototype ra là sẽ thấy các phương thức chúng thừa kế.
---------------------------------------------------------------------------------------------
Node properties:
	var boxDiv = document.querySelector('.boxDiv');
	console.log([boxDiv]);
ClassList property:
	var boxDiv = document.querySelector('.boxDiv');
	console.log(boxDiv.classList);					// Check method
	boxDiv.classList.add('boxMega');				// Thêm
	boxDiv.classList.remove('boxMega');				// Xóa
	boxDiv.classList.toggle('boxMega');				// Chuyển đổi giữa thêm và xóa
	...
	boxDiv.classList.contain('boxDiv')				// True // Kiểm tra có tồn tại class boxDiv hay k
---------------------------------------------------------------------------------------------
Get & set attribute:
	var heading = document.querySelector('h1');
	Seter:
		heading.href = 'headingOnTop';   				// Không gán được bằng cách này vì href k phải attribute hợp lệ của tag h1.
		heading.className = 'mega-title';	
		heading.setAttribute('href', 'headingOnTop');	// Cách này thì gán được.
	Geter:
		heading.getAttribute('href');
---------------------------------------------------------------------------------------------
Get & set text:
	var heading = document.querySelector('h1');
	Geter:
		heading.innerText;
		heading.textContent;
	Seter:
		heading.innerText = 'Giang 1';
		heading.textContent = 'Giang 2';
---------------------------------------------------------------------------------------------	
innerHTML & outerHTML:
	innerHTML cho 1 node vào trong 1 node được chọn.
	outerHTML ghi đè 1 node đã được chọn trước.
---------------------------------------------------------------------------------------------	
DOM CSS:
	var boxDiv = document.querySelector('boxDiv');
	console.log(boxDiv.style); 			// Check properties
	Object.assign.(boxDiv.style, {
		color: '#fff',
		backgroundColor: '#000'
	});
---------------------------------------------------------------------------------------------	
DOM Events:
	var boxDiv = document.querySelector('boxDiv');
	boxDiv.onclick = function (e) {
		console.log(e);					// Show mouse events
	};

	var allClass = document.querySelectorAll('.allClass');
	for(var i = 0; i < allClass.length; i++) {
		allClass[i].onclick = function (e) {
			console.log(e.target);
		};
	};
---------------------------------------------------------------------------------------------	
preventDefault, stopPropagation: 
// Hành vi mặc định và Sự kiện nổi bọt
---------------------------------------------------------------------------------------------	
Events Listener: 
	var boxDiv = document.querySelector('boxDiv');
	var doSomething1 = function(e) {
		console.log('A');
	};
	var doSomething2 = function(e) {
		console.log('B');
	};
	boxDiv.addEventListener('click', doSomething1);
	boxDiv.addEventListener('click', doSomething2);
	
	setTimeout(function(){
		boxDiv.removeEventListener('click', doSomething1);
	}, 3000);
	// Khi 1 sự kiện diễn ra nhưng trong trường hợp nào đó ta muốn hủy bỏ việc lắng nghe sự kiện đó dùng eventListener.
---------------------------------------------------------------------------------------------	
