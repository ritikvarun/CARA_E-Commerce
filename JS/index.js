const bar = document.getElementById("bar");
const list = document.getElementById("list");
const close = document.getElementById("close");
if (bar) {
  bar.addEventListener("click", () => {
    list.classList.add("active");
  });
}
if (close) {
    close.addEventListener("click", () => {
      list.classList.remove("active");
    });
  }


  // sigle-product section

var mainimg = document.getElementById("mainimg");
var smallimg = document.getElementsByClassName("small-img");


smallimg[0].onclick = function(){
    mainimg.src = smallimg[0].src;
}
smallimg[1].onclick = function(){
    mainimg.src = smallimg[1].src;
}
smallimg[2].onclick = function(){
    mainimg.src = smallimg[2].src;
}
smallimg[3].onclick = function(){
    mainimg.src = smallimg[3].src;
}