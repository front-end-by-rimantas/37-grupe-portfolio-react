window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    document.getElementById("header").className = "container head head-sticky";
    document.getElementById("headcol").className = "col-12 navmenu";
    document.getElementById("logo").src = "./img/header-logo-blue.png";
    // document.getElementById("main-menu").className = "mainlinks-black";
    function myFunction() {
        let nodes = document.getElementsById("main-menu");
        for (let i = 0; i < nodes.length; i++) {
          nodes[i].style.color = "red";
        }
      }
  } else {
    document.getElementById("header").className = "container head head-fixed";
    document.getElementById("headcol").className = "col-12 col-lg-10 navmenu";
    document.getElementById("logo").src = "./img/header-logo-white.png"
    document.querySelectorAll("main-menu").className = "mainlinks";
    // document.getElementById("main-menu").className = "mainlinks ";
} 
}