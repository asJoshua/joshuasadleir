// State change
var panda = document.getElementById('panda')
var chat = document.getElementById('chat')

function singleClick() {
    if (panda.classList != 'bounce') { 
        panda.classList.add('bounce');
    }

    setTimeout(function(){
        panda.classList.remove('bounce');
    }, 1000)

    // Make Chat appear / disappear

    if (chat.classList != 'show') {  
        chat.classList.add('show');
    }

    setTimeout(function(){
        chat.classList.remove('show');
    }, 10000)
}

function doubleClick() {
    if (panda.classList != 'large') {  
        panda.classList.add('large');
    }
        
    setTimeout(function(){
        panda.classList.remove('large');
    },1000)
}

// Timer for clicks
var clickCount = 0;

panda.addEventListener('click', function() {
    clickCount++;
    if (clickCount === 1) {
        singleClickTimer = setTimeout(function() {
            clickCount = 0;
            singleClick();
        }, 400);
    } else if (clickCount === 2) {
        clearTimeout(singleClickTimer);
        clickCount = 0;
        doubleClick();
    }
}, false);

// Follow mouse on drag
document.addEventListener('mousemove', onMouseMove);

const onMouseMove = (e) =>{
    panda.style.left = e.pageX + 'px';
    panda.style.top = e.pageY + 'px';
}