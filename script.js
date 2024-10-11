window.addEventListener("scroll", function() {
    var navbar = document.getElementById("navbar");
    var container = document.getElementById("con");
    if (window.scrollY > 50) {
      navbar.classList.add("navbar-scrolled");
      container.classList.remove("border-bottom");
      navbar.classList.add("container-fluid");
      navbar.classList.remove("container");
    } else {
      navbar.classList.remove("navbar-scrolled");
      container.classList.add("border-bottom");
      navbar.classList.add("container");
      navbar.classList.remove("container-fluid");
    }
  });
  let direction = 1;
function scrollContent() {
    let slide = document.getElementById("slide");
    let btn1 = document.getElementById("btn1");
    let btn2 = document.getElementById("btn2"); 
    if(slide.scrollLeft === 0){
      slide.scrollBy({
        left: slide.clientWidth,
        behavior: 'smooth'
    });
      btn1.classList.add("btn-outline-secondary");
      btn1.classList.remove("btn-secondary");
      btn2.classList.add("btn-secondary");
    }
    else{
      slide.scrollBy({
        left: -slide.clientWidth,
        behavior: 'smooth'
    });
    btn2.classList.add("btn-outline-secondary");
    btn2.classList.remove("btn-secondary");
    btn1.classList.add("btn-secondary");
    }
    if (slide.scrollLeft + slide.clientWidth >= slide.scrollWidth || slide.scrollLeft === 0) {
        direction *= -1;
    }
}
setInterval(scrollContent, 5000);
  
  function scrollleft(){
    let slide = document.getElementById("slide");
    let btn1 = document.getElementById("btn1");
    let btn2 = document.getElementById("btn2");
    btn1.classList.add("btn-outline-secondary");
    btn1.classList.remove("btn-secondary");
    btn2.classList.add("btn-secondary");
    slide.scrollBy({
        left:slide.clientWidth,
        behavior:'smooth'
    });
  }
  function scrollRight(){
    let slide = document.getElementById("slide");
    let btn1 = document.getElementById("btn1");
    let btn2 = document.getElementById("btn2");
    btn2.classList.add("btn-outline-secondary");
    btn2.classList.remove("btn-secondary");
    btn1.classList.add("btn-secondary");
    slide.scrollBy({
        left:-slide.clientWidth,
        behavior:'smooth'
    });
  }