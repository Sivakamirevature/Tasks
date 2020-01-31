/**
 * 
 */
var y ="";
function myFunction(){
	var x = document.getElementById("ipassword");
	if(x.type === "password"){
		x.type = "text";
	}
	else{
		x.type="password";
	}
}

function hideForm(){
	var x = document.getElementById("firstdiv");
	if(x.style.display === "none"){
		
		x.style.display = "block";
		
	}
	else{
		x.style.display = "none";
		document.getElementById('frsc').innerHTML = document.getElementById("n").value;
		document.getElementById('srsc').innerHTML = document.getElementById("idob").value;
		document.getElementById('trsc').innerHTML = document.getElementById("iage").value;
		document.getElementById('forsc').innerHTML = y;
		document.getElementById('firsc').innerHTML = document.getElementById("iemail").value;
		document.getElementById('sirsc').innerHTML = document.getElementById("ic_num").value;
		document.getElementById('sersc').innerHTML = document.getElementById("icolour").value;
		document.getElementById('ersc').innerHTML = document.getElementById("iaddress").value;
		if(document.getElementById("qualification1").checked){
			document.getElementById('tersc').innerHTML += document.getElementById("qualification1").value+"\n\n";
		}
		if(document.getElementById("qualification2").checked){
			document.getElementById('tersc').innerHTML += document.getElementById("qualification2").value +"\n\n";
		}
		if(document.getElementById("qualification3").checked){
			document.getElementById('tersc').innerHTML += document.getElementById("qualification3").value+"\n\n";
		}
		if(document.getElementById("qualification4").checked){
			document.getElementById('tersc').innerHTML += document.getElementById("qualification4").value+"\n\n";
		}
		if(document.getElementById("qualification5").checked){
			document.getElementById('tersc').innerHTML += document.getElementById("qualification5").value+"\n\n";
		}
		document.getElementById('nrsc').innerHTML = "<img src ='"+document.getElementById("iphoto").value+"'/>";	
	}
	}
function passingFunction(result){
	y = result;
}
function passingFunctionfromCheckbox(ch){
}

