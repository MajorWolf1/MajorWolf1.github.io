window.onload = function() {
			var body = document.getElementsByTagName('body')[0];
			body.addEventListener("click", openFullPage, false);
			
			function openFullPage(e) {
				if(e.target && e.target.nodeName == 'IMG') {	
					var fullpage = document.createElement('div');
					body.appendChild(fullpage);
					fullpage.style.backgroundImage = 'url("' + e.target.src + '")';
					fullpage.style.backgroundSize = 'contain';
					fullpage.style.backgroundRepeat = 'no-repeat';
					fullpage.style.backgroundColor = '#ffffff';
					fullpage.style.width = '100%';
					fullpage.style.height = '100%';
					fullpage.style.backgroundPosition = 'center center';
					fullpage.style.position = 'fixed';
					fullpage.style.top = body.scrollTop + 'px';
					fullpage.style.left = '0';
					fullpage.addEventListener("click", closeFullPage, false);
				}
			}
			function closeFullPage(e) {
				body.removeChild(e.target);
			}
};
