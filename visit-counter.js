function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + "; " + expires;
}

function getCookie(name) {
    const cookieName = name + "=";
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(cookieName) === 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }
    return "";
}

function incrementVisitCount() {
    let visitCount = getCookie("visitCount");
    visitCount = parseInt(visitCount) + 1;
    setCookie("visitCount", visitCount, 365); 
}

function openPopupWithVisitCount() {
    const visitCount = getCookie("visitCount");

    const popupContent = `
        <html>
        <head>
            <title>Page visits</title>
            <style>
                body {
                    font-family: "Exo", sans-serif;
                    background-color: black;
                    text-align: center;
                    margin: 50px 0;
                    color: white;
                }
            </style>
        </head>
        <body>
            <h1>Broj posjeta stranice: </h1>
            <p>${visitCount}</p>
        </body>
        </html>
    `;

    const popupWindow = window.open('', 'Visit Count Popup', 'width=400,height=200');
    popupWindow.document.open();
    popupWindow.document.write(popupContent);
    popupWindow.document.close();
}

if (getCookie("visitCount") === "") {
    setCookie("visitCount", 1, 365);
}

incrementVisitCount();
openPopupWithVisitCount();