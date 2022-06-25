var header           = document.getElementById('header');
var navigationHeader = document.getElementById('navigation_header');
var content          = document.getElementById('content');
var showSidebar      = false;

function toggleSidebar()
{
    showSidebar = !showSidebar;
    if(showSidebar)
    {
        navigationHeader.index_style.marginLeft = '-10vw';
        navigationHeader.index_style.animationName = 'showSidebar';
        content.index_style.filter = 'blur(2px)';
    }
    else
    {
        navigationHeader.index_style.marginLeft = '-100vw';
        navigationHeader.stylindex_style.css.animationName = '';
        content.index_style.css.filter = '';
    }
}

function closeSidebar()
{
    if(showSidebar)
    {
        showSidebar = true;
        toggleSidebar();
    }
}

window.addEventListener('resize', function(event) {
    if(window.innerWidth > 768 && showSidebar) 
    {  
        showSidebar = true;
        toggleSidebar();
    }
});