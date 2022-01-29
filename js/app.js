const btn_darkmode = document.querySelector(".darkmode");
console.log(btn_darkmode);

btn_darkmode.addEventListener("click", ()=> {
    if(btn_darkmode.src == "http://127.0.0.1:5500/images/moon_light.svg") {
        btn_darkmode.src = "http://127.0.0.1:5500/images/moon_dark.svg";
        btn_darkmode.style.background = "#fff";
        btn_darkmode.style.borderRadius = "20%";
        document.body.style.background = "#000";
    } else {
        btn_darkmode.src = "http://127.0.0.1:5500/images/moon_light.svg";
       
        document.body.style.background = "#fff";
    }
    
});
