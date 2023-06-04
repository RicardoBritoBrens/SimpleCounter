let counter = 0;

function increase(){
    counter++;
    refreshCounterValueOnHtml();    
}

function decrease(){
    counter--;
    refreshCounterValueOnHtml();
}

function reset(){
    counter = 0;
    refreshCounterValueOnHtml();
}

function refreshCounterValueOnHtml(){
    let subtitleElement = document.getElementById('counter');
    subtitleElement.innerText = counter;
    return counter;
}
