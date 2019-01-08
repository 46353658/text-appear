function scrollAppear() {
    var myText = document.querySelector('.my-text');
    var myPosition = myText.getBoundingClientRect().top;

    var screenPosition = window.innerHeight / 1.2;

    console.log("myPosition: " + myPosition);
    console.log("screenPosition: " + screenPosition);
    if (myPosition < screenPosition) {
        myText.classList.add('my-appear');
    }

}

window.addEventListener('scroll', scrollAppear);