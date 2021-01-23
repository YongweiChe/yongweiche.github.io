let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/yosemite.png') {
      myImage.setAttribute('src','images/mocha.png');
    } else {
      myImage.setAttribute('src','images/yosemite.png');
    }
}