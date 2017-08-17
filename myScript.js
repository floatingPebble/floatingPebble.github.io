window.addEventListener("load", lightshow);



function lightshow(){
	setInterval(function(){
	if(document.getElementById("text").style.color == "blue"){
		document.getElementById("text").style.color = "maroon";
	}else{
		document.getElementById("text").style.color = "blue";	
	}

}, 200);
}

function newText(){
	var newText = document.getElementById("newText").value;
    var newText3 = newText[0].toUpperCase() + newText.slice(1).toLowerCase();
	
    if(newText3.length < 1){
    	document.getElementById("text").innerHTML = "Your mom&raquo;";
    }else{
    	document.getElementById("text").innerHTML = newText3 + "&raquo;";
    }
    if(newText3.length < 6){
    	document.getElementById("text").style.fontSize = "30vw";
    }else if(newText3.length === 6){
    	document.getElementById("text").style.fontSize = "28vw";
    }else if(newText3.length === 7){
    	document.getElementById("text").style.fontSize = "26vw";
    }else{
    	document.getElementById("text").style.fontSize = "23vw";
    }
}
