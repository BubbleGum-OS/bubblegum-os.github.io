let nickname = document.getElementById("nickname");
let tgname = document.getElementById("tgname");
let githubname = document.getElementById("githubname");
let whymaintain = document.getElementById("whymaintain");
let git = document.getElementById("git");
let deviceinfo = document.getElementById("deviceinfo");
let dt = document.getElementById("dt");
let notwork = document.getElementById("notwork");
let maintainsend = document.getElementById("maintainsend");


maintainsend.onclick = function() {
    message_text = '<b>New maintain request</b>\n\
    Name: <i>' + nickname.value + '</i>\n\
    Telegram nickname: <i>' + tgname.value+'</i>\n\
    Github nickname: <i>' + githubname.value + '</i>\n\
    Why he(she) wants maintain ROM: <i>' + whymaintain.value + '</i>\n\
    Git level: <i>' + git.value + '</i>\n\
    Device info: <i>' + deviceinfo.value + '</i>\n\
    Device trees: <i>' + dt.value + '</i>\n\
    Not work in test build: <i>' + notwork.value + '</i>';
    fetch("https://api.zadli.me/bubblegum/os/maintainer/?name="+nickname.value+"&tgname="+tgname.value+"&tgname="+tgname.value+"&githubname="+githubname.value+"&whymaintain="+whymaintain.value+"&git="+git.value+"&deviceinfo="+deviceinfo.value+"&dt="+dt.value+"&notwork="+notwork.value).then(alert("Sended to developers")).then(window.location.href="index.html");
}