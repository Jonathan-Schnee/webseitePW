var subnav = document.getElementById("dropdown-menu-1");
subnav.style.visibility = "hidden";
async function openDropdown(arg){
    const navbar = document.getElementsByClassName('navbar-nav');
    const colnavbar = document.getElementById('navbarNavDropdown')
    subnav = document.getElementById(arg);
    subnav.position = 'absolute';
    var l = navbar[0].getBoundingClientRect().left - subnav.parentElement.getBoundingClientRect().left;
    var r = navbar[0].style.width;
    subnav.style.left = l +"px";
    subnav.style.width = navbar[0].offsetWidth +"px";
    
    if(window.screen.width >= 991.98 ){
        subnav.style.visibility = subnav.style.visibility == "hidden" ? "visible" : "hidden";

        if(subnav.style.visibility == "visible"){
            subnav.style.maxHeight = "800px";
        }
        else{
            subnav.style.maxHeight = "0px";
        }
        await new Promise(r => setTimeout(r, 500));
        colnavbar.style.paddingBottom = subnav.offsetHeight + 'px';
        colnavbar.style.transition = "all 0.5s"    
    }

}

