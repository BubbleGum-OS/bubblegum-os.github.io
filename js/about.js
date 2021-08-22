let devcards = document.getElementById("devcards");

fetch("https://raw.githubusercontent.com/BubbleGum-OS-Devices/team/main/team.json").then(resp => resp.json()).then(resp => {
    for (var i = 0; i < resp.length; i++) {
        var devcard = document.createElement("devcard");
        var image = document.createElement("img");
        var nickname = document.createElement("h2");
        var whois = document.createElement("h3");
        var tg = document.createElement("img");
        var github = document.createElement("img");

        image.src = resp[i]["image"];
        image.style = "margin-top: 32px;";
        nickname.style = "margin-top: 32px;";
        nickname.innerText = resp[i]["name"];
        whois.innerText = resp[i]["whois"];
        try {
            tg.id = resp[i]["telegram"];
        } catch {
            tg.id = "https://t.me/bubblegumteam"
        };
        tg.style = "border-radius: 0; width: 32px; height: 32px;";
        tg.src = "img/telegram.svg"
        try {
            github.id = resp[i]["github"];
        } catch {
            gtihub.id = "https://github.com/BubbleGum-OS"
        };
        github.style = "border-radius: 0; width: 32px; height: 32px;";
        github.src = "img/github.svg"

        tg.onclick = function () {
            window.location.href = this.id;
        };
        github.onclick = function () {
            window.location.href = this.id;
        };

        devcard.appendChild(image);
        devcard.appendChild(nickname);
        devcard.appendChild(whois);
        devcard.appendChild(tg);
        devcard.appendChild(github);

        devcards.appendChild(devcard);
    }
})