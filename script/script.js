let myImage = document.querySelector("img");

myImage.onclick = () => {
    let mySrc = myImage.getAttribute("scr");
    if(mySrc === "images/356407416_1058687785099869_6663962852407265192_n.jpg"){
        myImage.setAttribute("scr", "images/Captura de tela 2025-11-19 143437.png");
    
    }else{
        myImage.setAttribute("scr", "images/Captura de tela 2025-11-19 143437.png");
    }
}

