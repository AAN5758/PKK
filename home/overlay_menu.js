var overlay = document.getElementById('overlay');
var background = document.getElementById('background');

// document.getElementById('nav-button').addEventListener('click', overlayOpen);

function overlayOpen() {
    overlay.classList.remove('close');
    background.classList.remove('close');
    overlay.classList.add('open');
    background.classList.add('open');
}

document.getElementById('background').addEventListener('click', overlayClose);

function overlayClose() {
    overlay.classList.remove('open');
    background.classList.remove('open');
    overlay.classList.add('close');
    background.classList.add('close');
}

function pathFind(pathName) {
    console.log('Button clicked with pathName:', pathName);

    var pathArray = window.location.pathname.split('/');
    var lokasi = pathArray[pathArray.length - 1];

    if (lokasi == (pathName + ".html"))
        overlayClose();
    else {
        if (pathName == undefined)
            window.location.href = 'index.html';
        else
            window.location.href = pathName + '.html';
    }
}
