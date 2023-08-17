function getElement(element){
    return document.querySelector(element);
}

function getValue(element){
    return element.value;
}



document.querySelector('#bold').addEventListener('click', function(){
    let text = getElement('.area');
    text.classList.toggle('bold');
});
document.querySelector('#italic').addEventListener('click', function(){
    let text = getElement('.area');
    text.classList.toggle('italic');
});
document.querySelector('#underline').addEventListener('click', function(){
    let text = getElement('.area');
    text.classList.toggle('underline');
});

document.querySelector('#left').addEventListener('click', function(){
    let text = getElement('.area');
    text.style.textAlign = "left"
});
document.querySelector('#center').addEventListener('click', function(){
    let text = getElement('.area');
    text.style.textAlign = "center"
});
document.querySelector('#right').addEventListener('click', function(){
    let text = getElement('.area');
    text.style.textAlign = "right"
});
document.querySelector('#justify').addEventListener('click', function(){
    let text = getElement('.area');
    text.style.textAlign = "justify"
});
document.querySelector('#number').addEventListener('keyup', function(){
    const num = getElement('#number').value+'px';
    const text = getElement('.area');
    text.style.fontSize = num;
});
document.querySelector('#color').addEventListener('click', function(){
    const Color = getElement('#color')
    const tColor = Color.value;
    let text = getElement('.area');
    text.style.color = tColor;
});
document.querySelector('#text-case').addEventListener('click', function(){
    let text = getElement('.area');
    if(text.classList.contains('capitalize')){
        text.classList.remove('capitalize');
        text.classList.add('upper');
        console.log('capitalize removed upper added')
    }else if(text.classList.contains('upper')){
        text.classList.remove('upper');
        text.classList.add('lower');
        console.log('upper removed lower added')
    }else if(text.classList.contains('lower')){
        text.classList.remove('lower');
        text.classList.add('capitalize');
        console.log('lower removed capitalize added')
    }
})