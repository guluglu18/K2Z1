function prikaz(){
    let visina = document.getElementById("visina").value;
    console.log(visina);
    let sirina = document.getElementById("sirina").value;
    console.log(sirina);
    let div = document.querySelector("#divv");
    div.style.width=visina+"px";
    div.style.height=sirina+"px";
    div.style.backgroundColor="yellow";
    div.style.border="2px solid black";
    div.innerHTML = "Sirina: " + sirina +"px<br>" + "Visina: " + visina + "px";
}