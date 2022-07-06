var openPopupBtn = document.querySelector("button");
var closePopupBtn = document.querySelector("#popup-close-button");

openPopupBtn.addEventListener("click", function(){
    document.body.classList.add("popup-active");
});

closePopupBtn.addEventListener("click", function(){
    document.body.classList.remove("popup-active");
});