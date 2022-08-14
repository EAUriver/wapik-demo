Cài đặt git:
	Tạo 1 folder "git" mở ra rồi "git bash here"
		Ta cấu hình tên và email cho git:
			git config --global user.name "EUAriver"
			git config --global user.email "nguyenkiengiangfe@gmail.com"
		Khởi tạo git repo dưới local:
			git init

			git status
			git add index.html					//add 1
			git add index.css layout.css 		//add more
			git add . 							//add all
			git commit -m "some	thing"
	
		Khởi tạo git repo trên github sau đó:
			git remote add origin https://github.com/EAUriver/wapik-demo.git
			git branch -M main
			git push -u origin main