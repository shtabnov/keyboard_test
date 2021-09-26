document.addEventListener('keydown', function (event) {
    var selector = `.keybox__key_${event.code}`;
    console.log (`.keybox__key_${event.code}`)
    document.querySelector(selector).style.background = 'gray';
});
document.addEventListener('keyup', function (event) {
    var selector = `.keybox__key_${event.code}`;
    document.querySelector(selector).style.background = '#ffaa57';
    document.querySelector(selector).style.boxShadow = '0 0 3px 1px #ffaa57';
    document.querySelector(selector).style.border = '1px solid #ffaa57';
});