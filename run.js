function load() {
    document.getElementById("time").style.display = "none";
    document.getElementById("port").style.display = "block";
}
setTimeout(load, 1000);

function myFunction1() {
    var element = document.body;
    element.classList.toggle("dark-mode");

    document.getElementsByClassName("nav-link").style.color = "white";
}
