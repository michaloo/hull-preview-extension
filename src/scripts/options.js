function onSwitch() {
    console.log("hello");
}

window.onload = function() {
	document.getElementById('switch').addEventListener('change', onSwitch); 
}
