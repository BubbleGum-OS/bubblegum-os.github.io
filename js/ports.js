let portscards = document.getElementById("portscards");

fetch("https://raw.githubusercontent.com/BubbleGum-OS-Devices/ports/master/ports.json").then(resp => resp.json()).then(resp => {
    for (var i = 0; i< resp.length; i++) {
        "<portcard>\
                    <h1>Pixel 5 Beta 1 GSI</h1>\
                    <h3>davinci</h3>\
                    <h2>Android 12</h2>\
                    <h2>Released: 2021-05-29</h2>\
                    <h4>Changelog</h4>\
                    <h4>• Changed default wallpaper<br> • Set gestures as default navigation method<br> • Fixed pop-up camera (Make sure to disable battery optimization for the pop-up app)<br> • Fixed dual SIM<br> • Fixed recent's select panel<br> • Removed the warning of using a beta version on boot<br> • Fixed Pixel sounds and Style's and wallpapers<br> • Added more accent colours<br> • Added pop-up camera calibration menu (Will help you if your camera stops working)<br> • Changed the default boot animation to dark<br> • Fixed scrolling related issues<br> • Fixed padding<br> • NFC will work if magisk mide is enabled</h4>\
                </portcard>"

        var portcard = document.createElement("portcard");
        var portname = document.createElement("h1");
        var device = document.createElement("h3");
        var android = document.createElement("h2");
        var released = document.createElement("h2");
        var changelog = document.createElement("h4");
        var changelogbody = document.createElement("h4");
        var screenshots = document.createElement("button");
        var download = document.createElement("button");
        var tggroup = document.createElement("button");


        portname.innerText = resp[i]["name"];
        device.innerText = resp[i]["device"];
        android.innerText = "Android " + resp[i]["android"];
        released.innerText = "Released " + resp[i]["released"];
        changelog.innerText = "Changelog";
        changelogbody.innerText = resp[i]["changelog"];
        screenshots.innerText= "Screenshots";
        download.innerText= "Download";
        tggroup.innerText= "Support";

        screenshots.id = resp[i]["screenshots"];
        download.id = resp[i]["download"];
        tggroup.id = resp[i]["support"];

        screenshots.onclick = function() {
            window.location.href = this.id;
        }

        download.onclick = function() {
            window.location.href = this.id;
        }

        tggroup.onclick = function() {
            window.location.href = this.id;
        }

        portcard.appendChild(portname);
        portcard.appendChild(device);
        portcard.appendChild(android);
        portcard.appendChild(released);
        portcard.appendChild(changelog);
        portcard.appendChild(changelogbody);
        portcard.appendChild(screenshots);
        portcard.appendChild(download);
        portcard.appendChild(tggroup);

        portscards.appendChild(portcard);

    }
});