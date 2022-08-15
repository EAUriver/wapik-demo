Flow:
	Thư mục đang làm việc -> Staging Area -> Commited
	Ta hiểu như:
	Nơi viết code 		  -> Chờ đc push  -> Đã push

Lệnh git add ... đưa file hoặc nhiều file vào "Staging Area"
Lệnh git restore --staged ... đưa file hoặc nhiều file từ "Staging Area" trở về "Thư mục đang làm việc"


Cài đặt git:
	Tạo folder "git" -> open folder -> "git bash here"
		Ta cấu hình tên và email cho git:
			1. git config --global user.name "EUAriver"
			2. git config --global user.email "nguyenkiengiangfe@gmail.com"
Tạo repository:
		Khởi tạo git repo dưới local:
			3. git init
			4. Tạo file, sửa file ...
			5. git status
			6. git add index.html					//add 1
			   git add index.css layout.css 		//add more
			   git add . 							//add all
			7. git commit -m "some	thing"

		Khởi tạo git repo trên github sau đó:
			8.  git remote add origin https://github.com/EAUriver/wapik-demo.git
			9.  git branch -M main
			10. git push -u origin main


Kiểm tra commit: git log
Kiểm tra branch: git branch
Tạo branch mới: git checkout -b sub-branch
Xóa branch: git branch -d sub-branch
Push code lên branch: git push origin <branch name>