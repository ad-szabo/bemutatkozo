window.onscroll = function(e) {
    let pos = window.scrollY || window.screenTop;
    let text = document.getElementById('hello');
    let robot = document.getElementById('robot');
    let parent = document.getElementById('hparent');
    if(pos > 130) {
        text.classList.add('hide');
        robot.classList.add('hide');
        
    } else {
        text.classList.remove('hide');
        robot.classList.remove('hide');
        
    }
    if(pos > 400) {
        parent.classList.add('hide');;
    } else {
        parent.classList.remove('hide');
    }
}