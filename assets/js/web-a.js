// State change
var panda = document.getElementById('panda')
var chat = document.getElementById('chat')

function singleClick() {
    // Make PB bounce
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
    document.getElementById('panda').src="assets/imgs/svgs/Panda Angry.svg";

    setTimeout(function(){
        document.getElementById('panda').src="assets/imgs/svgs/Panda Default.svg";
    }, 1000)
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

// Do a trick
var action = document.getElementById('trick');
trick.addEventListener('click', function() {
    if (panda.classList != 'fa-spin') {  
        panda.classList.add('fa-spin');
    }
        
    setTimeout(function(){
        panda.classList.remove('fa-spin');
    },2000)
});