const yesbtn = document.querySelector('#yesbtn')

yesbtn.addEventListener('click',function () {
    alert('Sabia que ibas a decir que si :) <3 ')
});

const nobtn = document.querySelector('#nobtn');




nobtn.addEventListener('mouseover',function  () {
    const randomX = parseInt(Math.random()*90);
    const randomY = parseInt(Math.random()*85);
    nobtn.style.setProperty('top' , randomY+ '%');
    nobtn.style.setProperty('left', randomX+ '%');
    nobtn.style.setProperty('transform', `translate(-${randomX}%,-${randomY}%)`);
    
})
setTimeout(function() {
    location.href="index2.html";
    stop;
},1000*10);

btn.location('click',function () {
    location.href="index.html";   
});



