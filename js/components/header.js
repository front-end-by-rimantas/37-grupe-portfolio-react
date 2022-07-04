window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    document.querySelectorAll("#header").className = "container head head-sticky";
    document.querySelectorAll("#headcol").className = "col-12 navmenu";
    document.querySelectorAll("#logo").src = "./img/header-logo-blue.png";
        let nodes = document.querySelectorAll(".menu");
        for (let i = 0; i < nodes.length; i++) {
        nodes[i].style.color = "#000";
        
      }
  } else {
    document.querySelectorAll("#header").className = "container head head-fixed";
    document.querySelectorAll("#headcol").className = "col-12 col-lg-10 navmenu";
    document.querySelectorAll("#logo").src = "./img/header-logo-white.png"
    document.querySelectorAll("#main-menu").className = "mainlinks";
        let nodes = document.querySelectorAll("#main-menu");
        for (let i = 0; i < nodes.length; i++) {
        nodes[i].style.color = "#fff";
        
  }
} 
}