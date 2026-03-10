const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {

if(navLinks.style.display === "flex"){
navLinks.style.display = "none";
}
else{
navLinks.style.display = "flex";
}

});


let topBtn = document.getElementById("topBtn");

window.onscroll = function(){

if(document.documentElement.scrollTop > 200){
topBtn.style.display = "block";
}
else{
topBtn.style.display = "none";
}

};

topBtn.onclick = function(){

window.scrollTo({
top:0,
behavior:"smooth"
});

};
