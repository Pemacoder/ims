//Consists of the javascript code for  the page "LoginOrSignUP.html" and the code for Form validation with JSON.





//for the popup slider(SignIN/SignUP overlay)
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('popup-container');

signUpButton.addEventListener('click',() => container.classList.add('right-panel-active'));

signInButton.addEventListener('click',() => container.classList.remove('right-panel-active'));

//for displaying the popup 

document.getElementById("button").addEventListener("click",function(){
	document.querySelector(".popup-container").style.display="flex";
})

	 
//for closing the popup when pressed anywhere else but the vital sections.

var hidepopUp=document.getElementById("popup-container");

document.onclick=function(div){
	if(div.target.id !== "popup-container" && 
		div.target.id !== "button"    	   && 
		div.target.id !== "signUp"    	   && 
		div.target.id !== "signIn"    	   &&
		div.target.id !== "login"     	   &&
		div.target.id !== "register"  	   &&
		div.target.id !== "social"    	   &&
		div.target.id !== "name"            &&
		div.target.id !== "email"     	   &&
		div.target.id !== "pass"      	   &&
		div.target.id !== "e-mail"    	   &&
		div.target.id !== "password"        &&
		div.target.id !== "forget-link"		&&
		div.target.id !== "confirmPass")
		{
			hidepopUp.style.display="none";
		}
}

