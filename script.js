setInterval(asynchronous1, 0);
  function asynchronous1(){
	let d = new Date();

	  document.getElementById('demoTimer').innerHTML = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
 }	