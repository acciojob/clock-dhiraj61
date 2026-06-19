//your JS code here. If required.
let timer = document.getElementById('timer');

setInterval(()=>{
	let currentDate = new Date();
	timer.textContent = (currentDate.getMonth() + 1) + '/' + (currentDate.getDate()) + '/' + (currentDate.getFullYear()) + ', ' + (currentDate.getHours()) + ':' + (currentDate.getMinutes()) + ':' + (currentDate.getSeconds()) + (currentDate.getHours() > 12 ? ' PM' : ' AM');
},1000)