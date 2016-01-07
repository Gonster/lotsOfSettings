(function() {
    var toolbar = document.querySelector('#material-toolbar');
    toolbar.style.display = 'none';
    var body = document.querySelector('body');
    var button = document.createElement('button');
    button.style.cssText = 'cursor: pointer; position: fixed; z-index: 999; right: 40px; top: 60px; border-radius: 50%; height: 40px; width: 40px; border: none; box-shadow: 0 1px 1px 1px RGBA(0,0,0,0.5); font-size: 2em; color: #444;';
    button.id = 'tool-toggle';
    button.innerText = '↓';
    button.addEventListener('click', buttonListener);
    body.appendChild(button);

    function toggleDisplay(e) {
        if(e.style.display !== 'none') e.style.display = 'none';
        else e.style.display = 'block';
    }
    
    function buttonListener() {
        toggleDisplay(toolbar);
    }
})();