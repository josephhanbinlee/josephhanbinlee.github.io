//var img = document.getElementsByTagName('img')[1];
//img.style.left = '0px'
//
//function catWalk() {
//    // add pixels to the old left
//    var oldLeft = parseInt(img.style.left)
//    var newLeft = oldLeft + 10
//    img.style.left = newLeft + 'px'
//    
//    if (newLeft > window.innerWidth) {
//        img.style.left = '-275px'
//    }
//}
//
//window.setInterval(catWalk, 50)

// when the cat reaches the right hand of the screen, have it reset back to the left

// how can we tell the image reached the end of the screen?
// know the width of the window


// add crown
function placeCrown(event) {
    var crown = document.getElementById('crown');
    crown.style.left = event.clientX-190 + 'px'
    crown.style.top = event.clientY-200 + 'px'
    
}