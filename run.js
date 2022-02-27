function load() {
    document.getElementById("time").style.display = "none";
    document.getElementById("port").style.display = "block";
}
setTimeout(load, 10);

function myFunction1() {
    var element = document.body;
    element.classList.toggle("dark-mode");

    document.getElementsByClassName("nav-link").style.color = "white";
}
