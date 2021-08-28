let devicescards = document.getElementById("devicescards");

fetch("https://raw.githubusercontent.com/BubbleGumOS-Devices/devices/master/devices.json").then(resp => resp.json()).then(resp => {
    for (var i = 0; i< resp.length; i++) {
        var devicecard = document.createElement("devicecard");
        var name = document.createElement("h1");
        var codename = document.createElement("h2");
        var maintainerinfo = document.createElement("h1");
        var maintainername = document.createElement("h2");
        var tg = document.createElement("img");
        var github = document.createElement("img");
        name.innerText = resp[i]["brand"] + " " + resp[i]["name"];
        codename.innerText = resp[i]["codename"];
        maintainerinfo.innerText = "Maintainer:"
        maintainername.innerText = resp[i]["maintainer"]["name"];
        tg.src = "img/telegram.svg";
        tg.style = "margin-top: 8px; border-radius: 0; width: 32px; height: 32px;";
        tg.id = resp[i]["maintainer"]["telegram"];
        tg.onclick = function() {
            window.location.href = this.id;
        }
        github.src = "img/github.svg";
        github.style = "margin-top: 8px; border-radius: 0; width: 32px; height: 32px;";
        github.id = resp[i]["maintainer"]["github"];
        github.onclick = function() {
            window.location.href = this.id;
        }
        devicecard.appendChild(name);
        devicecard.appendChild(codename);
        devicecard.appendChild(maintainerinfo);
        devicecard.appendChild(maintainername);
        devicecard.appendChild(tg);
        devicecard.appendChild(github);
        devicescards.appendChild(devicecard);
    }
});