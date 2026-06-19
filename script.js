//your JS code here. If required.
let timer = document.getElementById('timer');

setInterval(()=>{
	let currentDate = new Date();
	timer.textContent = currentDate.toLocaleString();
},1000)