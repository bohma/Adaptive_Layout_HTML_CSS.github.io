/*toTop.onclick = function() {
    window.scrollTo(pageXOffset, 0);
    // после scrollTo возникнет событие "scroll", так что стрелка автоматически скроется
  };

  window.addEventListener('scroll', function() {
    toTop = (pageYOffset < document.documentElement.clientHeight);
  });*/
let scrollTopElement = document.getElementById("toTop");

window.onscroll = function () {
    if (window.pageYOffset > window.innerHeight) {
        scrollTopElement.classList.remove("hidden");
    }
    else {
        scrollTopElement.classList.add("hidden");
    }

}
toTop.onclick = function () {

    window.scrollTo(pageXOffset, 0);
    // после scrollTo возникнет событие "scroll", так что стрелка автоматически скроется
};

let burger = document.getElementsByClassName("js-burger")[0];
let menu = document.getElementsByClassName("js-nav")[0];
burger.onclick = function(){
    menu.classList.toggle("active");
}