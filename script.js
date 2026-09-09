let saveInput = document.getElementById("saveInput");
let saveTab = document.getElementById("saveTab");
let Input = document.getElementById("input-el");

let logContainer = document.getElementById("logContainer");

let contextMenu = document.getElementById("contextMenu");
let detailsMenu = document.getElementById("detailsMenu");

let deleteLog = document.getElementById("deleteLog");
let changeName = document.getElementById("changeName");
let openSelf = document.getElementById("openSelf");
let details = document.getElementById("details");
let cancelDelete = document.getElementById("cancelDelete");
let deleteAllbtn = document.getElementById("deleteAll");



let webVisited = JSON.parse(localStorage.getItem("visited")) || [];



function saveLogs() {
    localStorage.setItem("visited", JSON.stringify(webVisited));
}



function displayLogs() {
    logContainer.innerHTML = "";

    for (const element of webVisited) {

        let Log = document.createElement("a");

        let href;

        try {
            href =
                element.url.startsWith("https://") ||
                element.url.startsWith("http://")
                    ? element.url
                    : `https://${element.url}`;

            new URL(href);
        } catch {
            continue;
        }

        Log.href = href;
        Log.target = "_blank";



        let logDiv = document.createElement("div");
        logDiv.className = "log";

        let img = document.createElement("img");
        img.height = 32;
        img.width = 32;

        try {
            img.src =
                `https://www.google.com/s2/favicons?domain=${new URL(href).hostname}&sz=64`;
        } catch {
            img.src = "./Unknown.jpg";
        }


        let name = document.createElement("span");
        name.textContent = element.name;


        logDiv.appendChild(img);
        logDiv.appendChild(name);

        Log.appendChild(logDiv);


        Log.addEventListener("contextmenu", function (ev) {

            ev.preventDefault();
            ev.stopPropagation();

            contextMenu.style.display = "block";
            contextMenu.style.left = ev.clientX + "px";
            contextMenu.style.top = ev.clientY + "px";



            openSelf.onclick = function openSelfFunc() {

                chrome.tabs.update({
                    url: href
                });

                contextMenu.style.display = "none";
            };



            changeName.onclick = function () {
                changeNameOfLog(Log, element);
            };



            deleteLog.onclick = function deleteLogFunc() {

                webVisited = webVisited.filter(function (item) {
                    return item.id !== element.id;
                });

                saveLogs();

                displayLogs();

                contextMenu.style.display = "none";
            };



            details.onclick = function detailsFunc() {

                detailsMenu.innerHTML = "";

                let dateTitle = document.createElement("h1");
                dateTitle.textContent = "Date:";

                let date = document.createElement("p");
                date.textContent = new Date(Number(element.id));

                let urlTitle = document.createElement("h1");
                urlTitle.textContent = "Actual URL:";

                let url = document.createElement("p");
                url.textContent = href;

                let closeButton = document.createElement("button");
                closeButton.textContent = "CLOSE";

                closeButton.addEventListener("click", function () {
                    detailsMenu.style.display = "none";
                });


                detailsMenu.appendChild(dateTitle);
                detailsMenu.appendChild(date);
                detailsMenu.appendChild(urlTitle);
                detailsMenu.appendChild(url);
                detailsMenu.appendChild(closeButton);


                detailsMenu.style.display = "block";
                detailsMenu.style.left = ev.clientX + "px";
                detailsMenu.style.top = ev.clientY + "px";
                detailsMenu.style.width = "300px";
                detailsMenu.style.height = "auto";
                detailsMenu.style.wordBreak= "break-all";
                contextMenu.style.display = "none";
            };



            cancelDelete.onclick = function cancelDeleteFunc() {
                contextMenu.style.display = "none";
            };
        });


        logContainer.prepend(Log);
    }
}
function changeNameOfLog(Log, element) {
    let currentName = Log.innerText;

    const newNameInput = document.createElement("input");
    newNameInput.name = "newName";
    newNameInput.type = "text";
    newNameInput.value = currentName;
    newNameInput.className = 'log';
    
    newNameInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            
            let newName = newNameInput.value.trim();
            
            if (newName !== "") {
                element.name = newName;
                
                saveLogs();
                displayLogs();
            }
            
            event.preventDefault();
        }
    });
    Log.replaceChildren(newNameInput);
    contextMenu.style.display = "none";
    newNameInput.focus();
    newNameInput.select();
}

contextMenu.addEventListener("click", function (event) {
    event.stopPropagation();
});

detailsMenu.addEventListener("click", function (event) {
    event.stopPropagation();
});



document.body.addEventListener("click", function () {
    contextMenu.style.display = "none";
    detailsMenu.style.display = "none";
});



displayLogs();



saveInput.addEventListener("click", function () {

    let inputValue = Input.value.trim();

    if (inputValue === "") {
        return;
    }


    let newLog = {
        id: Date.now(),
        url: inputValue,
        name:
            inputValue.length > 31
                ? inputValue.slice(0, 29) + "..."
                : inputValue
    };


    webVisited.push(newLog);

    saveLogs();

    displayLogs();

    Input.value = "";
});



saveTab.addEventListener("click", function () {

    chrome.tabs.query(
        {
            active: true,
            currentWindow: true
        },
        function (tabs) {

            if (!tabs[0] || !tabs[0].url) {
                alert("Cannot save this tab.");
                return;
            }

            let tabName = tabs[0].title || tabs[0].url;
            let newLog = {
                id: Date.now(),
                url: tabs[0].url,
                name: tabName.length > 31
                        ? tabName.slice(0, 29) + '...'
                        : tabName
            };


            webVisited.push(newLog);

            saveLogs();

            displayLogs();
        }
    );
});



deleteAllbtn.addEventListener("click", function () {

    webVisited = [];

    saveLogs();

    logContainer.innerHTML = "";

    Input.value = "";
});