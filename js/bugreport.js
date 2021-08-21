let bugname = document.getElementById("bugname");
let bugdesc = document.getElementById("bugdesc");
let bugsend = document.getElementById("bugsend");

bugsend.onclick = function() {
    message_text = 'New bug report\n\
    Name: <i>' + bugname.value + '</i>\n\
    Description: <b>' + bugdesc.value+'</b>';
    fetch("https://api.telegram.org/bot1974124923:AAHK6Fr34pqLQq-F5yrU1aYDaawNV-kcYhw/sendMessage?markdown=HTML&chat_id=-1001215972805&text="+encodeURI(message_text)).then(alert("Sended to developers")).then(window.location.href="index.html");
}