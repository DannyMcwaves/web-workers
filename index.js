let worker = new Worker('/js/worker.js');

$(document).ready(() => {

    // a custom js plugin that sets the height an element to the height of the window.
    $('#row').Height();

    worker.addEventListener('message', (e) => {
        let data = e.data;
    });

    worker.postMessage('tweets');

});
