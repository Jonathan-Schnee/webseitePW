
var  navbar;
var  colnavbar;
var subnavs = ['dropdown-menu-1', 'dropdown-menu-2'];
var subnav
var dropdown;
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
            dropdown.style.maxHeight = "0px";
            dropdown.style.left = l +"px";
            dropdown.style.width = navbar[0].offsetWidth +"px";
            dropdown.style.transition = "all 3s";
        });        
        colnavbar.style.transition = "all 3s"
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

