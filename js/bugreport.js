let bugname = document.getElementById("bugname");
let bugdesc = document.getElementById("bugdesc");
let bugsend = document.getElementById("bugsend");

bugsend.onclick = function() {
    fetch("https://api.zadli.me/bubblegum/os/bug/?bugname="+bugname.value+"&bugdesc="+bugdesc.value).then(alert("Sended to developers")).then(window.location.href="index.html");
}