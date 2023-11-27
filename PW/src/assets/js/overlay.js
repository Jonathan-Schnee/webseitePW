
var  navbar;
var  colnavbar;
var navLinks;
var subnavs = ['dropdown-menu-1', 'dropdown-menu-2'];
var subnav
var dropdown;
var menuTransition = 'all 0.5s'
var bool = false;
var items = document.getElementsByClassName('nav-link');
var filename = window.location.pathname;

function init(){
    if(window.innerWidth >= 991.98){
        navbar = document.getElementsByClassName('navbar-nav');
        colnavbar = document.getElementById('navbarNavDropdown');
        subnavs.forEach(function (subnav){
            subnav = document.getElementById(subnav);
            dropdown = subnav.parentElement;
            var l = navbar[0].getBoundingClientRect().left - dropdown.getBoundingClientRect().left;
            var r = navbar[0].style.width;
            dropdown.style.transition = 'none';
            dropdown.style.maxHeight = "0px";
            dropdown.style.left += l +"px";
            dropdown.style.width = navbar[0].offsetWidth +"px";
            dropdown.offsetHeight;
            dropdown.style.transition = menuTransition;
        });        
        colnavbar.style.transition = menuTransition;
        navLinks = document.getElementsByClassName("nav-link")
        for (let navLink of navLinks) {
            navLink.style.pointerEvents = 'auto';
        }      
    }
    else{
        subnavs.forEach(function (subnav){
            subnav = document.getElementById(subnav);
            dropdown = subnav.parentElement;
            dropdown.style.transition = 'none';
            dropdown.style.maxHeight = "";
            dropdown.style.width = "auto";
        });   

    }
    
    for (var i = 0; i < items.length; i++) {
        if (items[i].classList.contains("current")) {
          items[i].classList.toggle("current")
        }
        if(items[i].href == filename){
            items[i].classList.add("current");
        }
      }
}
function openDropdown(arg){
    if(window.innerWidth >= 991.98){
        subnav = document.getElementById(arg)
        dropdown = subnav.parentElement
        
        dropdown.style.maxHeight = subnav.offsetHeight + 'px';
        colnavbar.style.paddingBottom = subnav.offsetHeight + 'px';
    }
}
function closeDropdown(arg){
    if(window.innerWidth >= 991.98){
        subnav = document.getElementById(arg)
        dropdown = subnav.parentElement
        dropdown.style.maxHeight = '0px';
        colnavbar.style.paddingBottom = '0px';
    }
}