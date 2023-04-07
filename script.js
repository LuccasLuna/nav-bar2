function clicou(){
    let menuMobile = document.getElementById("menu-mobile");
    
    if(menuMobile.style.display == "none"){
        menuMobile.style.display = "flex";
    } else {
        menuMobile.style.display = "none";
    }
}