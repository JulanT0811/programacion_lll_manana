const caja = document.getElementById('caja')

caja.addEventListener('mouseover',()=>{
    caja.style.backgroundColor='yellow';
});
caja.addEventListener('mouseout',()=>{
    caja.style.backgroundColor='gray';
}); 
caja.addEventListener('click',()=>{
    alert ('Click');
});

const areaTouch = document.getElementById ('areaTouch');
areaTouch.addEventListener ('touchstart',()=>{
    areaTouch.style.backgroundColor='blue';
});
areaTouch.addEventListener ('touchend',()=>{
    areaTouch.style.background='green';
});
areaTouch.addEventListener ('touchend',(e)=>{
    alert ('Click en area touch');
});