
var  navbar;
var  colnavbar;
var navLinks = ['nav-link-1','nav-link-2']
var subnavs = ['dropdown-menu-1', 'dropdown-menu-2'];
var subnav
var dropdown;
var menuTransition = 'all 0.5s'
var bool = false;
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
        navLinks.forEach(function(navLink){
            document.getElementById(navLink).style.pointerEvents = 'auto';
        })       
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

