var img = document.getElementById("big");
			img.style.background = "url('https://upload.wikimedia.org/wikipedia/commons/e/e1/M48A1-Patton-tank.jpg') no-repeat center / cover";
			img.style.width = "600px";
			img.style.height = "400px";
		function a() {
			var img = document.getElementById("big");
			img.style.background = "url('https://upload.wikimedia.org/wikipedia/commons/e/e1/M48A1-Patton-tank.jpg') no-repeat center / cover";
		}
		function b() {
			var img = document.getElementById("big");
			img.style.background = "url('https://upload.wikimedia.org/wikipedia/commons/9/96/T-80U_main_battle_tank.jpg') no-repeat center / cover";
		}
		function c() {
			var img = document.getElementById("big");
			img.style.background = "url('https://static.themoscowtimes.com/image/article_1360/86/bfa5c3464a754160bb6484d17969bbe9.jpg') no-repeat center / cover";
		}
		function zoom_in(){
			var img = document.getElementById("big");
			var body = document.getElementById("body");
			
			body.style.opacity = "1"; 
			
			body.style.background = "#000";
			img.style.position = "fixed";
			img.style.zIndex = "1";
			img.style.top = "50%";
			img.style.left = "50%";
			img.style.transform = "translate(-50%, -50%)";
			img.style.width = "80%";
			img.style.height = "90%";

			
		}
		function zoom_out(){
			var img = document.getElementById("big");
			var body = document.getElementById("body");
			
			body.style.opacity = "1"; 
			body.style.background = "#252525";

			img.style.position = "relative";
			img.style.top = "0%";
			img.style.left = "0%";
			img.style.transform = "translate(0%, 0%)";
			img.style.width = "600px";
			img.style.height = "400px";
			
		}