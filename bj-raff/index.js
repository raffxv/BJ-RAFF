 document.body.insertAdjacentHTML("afterend", '<html lang="en">   <head>     <meta charset="UTF-8" />     <title>Blackjack</title> 	<style> .App{text-align:center;flex-direction:column;display:flex}.App-header{background-color:#213743;display:flex}.Stake-logo{width:70px;resize:both;margin:20px 20px 0}.App-content{background-color:#213743;height:1300px}.Content-title-text{color:#f0f8ff;font-weight:700;font-size:x-large;margin-bottom:20px}.Checkbox-turbo{width:20px;height:20px;margin-top:5px;margin-bottom:15px}.Game-container{display:flex;align-items:center;justify-content:center;flex-direction:column;color:#f0f8ff;margin-top:20px}.Limbo-input{padding:10px;font-size:medium;text-align:center;border-radius:20px;margin-bottom:10px}.Mines-input{padding:10px;font-size:medium;text-align:center;border-radius:20px;margin-bottom:10px;width:300px}.Token-input{width:80%;padding:10px;font-size:medium;text-align:center;border-radius:20px;margin-bottom:20px}.Keno-input{padding:10px;font-size:medium;text-align:center;border-radius:20px;margin:10px}.Diamonds-dropdown-container{display:flex;flex-direction:row;margin-bottom:0;margin-top:0;justify-content:space-evenly;width:500px}.Dropdown-menu{border-radius:10px;padding:10px;margin-top:10px;font-size:larger}.Dropdown-red{background-color:#dc143c;color:#fff;width:75px;padding:5px;border-radius:20px}.Dropdown-green{background-color:#0f0;color:#000;width:75px;padding:10px;border-radius:20px}.Dropdown-purple{background-color:#639;color:#fff;width:75px;padding:10px;border-radius:20px}.Dropdown-blue{background-color:#4169e1;color:#fff;width:75px;padding:10px;border-radius:20px}.Dropdown-cyan{background-color:#0ff;color:#000;width:75px;padding:10px;border-radius:20px}.Dropdown-yellow{background-color:#ff0;color:#000;width:75px;padding:10px;border-radius:20px}.Dropdown-pink{background-color:pink;color:#000;width:75px;padding:10px;border-radius:20px}.Game-start-button{margin-bottom:10px;background-color:green;padding:15px;width:120px;height:20px;border-radius:25px;font-weight:700;text-align:center}.Game-generate-button{margin-bottom:10px;background-color:green;padding:20px;width:220px;border-radius:25px;font-weight:700}.Game-status-text,.Game-bets-text{margin-bottom:10px;color:#fff}.Separator{width:100%;height:4px;margin-bottom:50px;margin-top:50px;background-color:#fff}body{margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}code{font-family:source-code-pro,Menlo,Monaco,Consolas,Courier New,monospace} 	</style>   </head>   <body>     <div id="root" style="color:black;"></div>   </body> </html>')
 
 


 function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}
 
//token = getCookie("session")
 
function randomString(length) {
	var chars = '_-0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-';
	var result = '';
	for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
	return result;
}

function addJs(src, cb) {
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = src;
    s.onload = cb;
    document.head.appendChild(s);
}

function addCss(src, cb) {
    var s = document.createElement('link');
    s.rel = 'stylesheet';
    s.href = src;
    s.onload = cb;
    document.head.appendChild(s);
}

addJs(chrome.runtime.getURL('assets/app.js'), () => {	})

setTimeout(() => {
 var all = document.getElementsByTagName("input");

	for (var i=0, max=all.length; i < max; i++) {
	all[i].style.background = "green";
}
}, "4000");

