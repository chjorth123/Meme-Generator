//grabbing the form
const createForm = document.querySelector('#createform');
//grabbing create meme button
const createButton = document.querySelector("#create");
//grabbing meme list
const memeList = document.querySelector('#memelist');

createButton.addEventListener('click', function(e){
    eventHandler(e);
})

createForm.addEventListener('click', function(e){
    eventHandler(e);
})

memeList.addEventListener('click', function(e){
    eventHandler(e);
})

function eventHandler(e){
    if(e.target.id === 'create'){
        createMemeStart();
    }
    else if(e.target.id === 'submitbutton'){
        event.preventDefault();
        createMeme(e);
    }
    else if(e.target.id === 'removebutton'){
        removeEvent(e);
    }
    
}

function createMemeStart(){
    console.log('createMemeStartCalled');
    createForm.classList.toggle('disable');
}

function createMeme(e){
    if(e.target.type === 'text'){
        console.log('in here')
    }
    else if(e.target.id === 'submitbutton'){
        createMemeStart();
        addNewMeme();
    }
}

function addNewMeme(){

    let imgUrl = document.querySelector('#imgurl');
    let topText = document.querySelector('#toptext');
    let bottomText = document.querySelector('#bottomtext');

    memeList.append(createTheMeme(imgUrl.value, topText.value, bottomText.value));
    
    imgUrl.value = "";
    topText.value = '';
    bottomText.value = '';
}

function getRemoveButton(){

    let removeButton = document.createElement('button');
    removeButton.innerText = 'Remove Meme';
    removeButton.id = 'removebutton';
    return removeButton;

}

function createTheMeme(imgUrl, topText, bottomText){

    let newMeme = document.createElement('li');
    
    newMeme.append(createImg(imgUrl,topText,bottomText));
    
    newMeme.append(getRemoveButton());

    return newMeme;

}

function createImg(imgUrl,topText,bottomText){

    let aDiv = document.createElement('div');
    aDiv.style.textAlign = 'center';
    aDiv.style.position = 'relative';
    //aDiv.height = '550px';
    let divTop = document.createElement('div');
    let divBottom = document.createElement('div');

    divTop.innerText = topText;
    divBottom.innerText = bottomText;

    divTop.style.position = 'absolute';
    divBottom.style.position = 'absolute';

    divTop.style.fontSize = '2rem';
    divTop.style.fontWeight = 'bold';
    divBottom.style.fontSize = '2rem';
    divBottom.style.fontWeight = 'bold';

    divBottom.style.bottom = '5%';
    divBottom.style.left = '50%';
    divTop.style.top = '5%';
    divTop.style.left = '50%';

    let anImage = document.createElement('img');
    console.log(imgUrl);
    anImage.src = imgUrl;
    //anImage.style.position = 'relative';
    anImage.style.width = '100%';
    //anImage.height = '180px';

    aDiv.append(anImage);
    aDiv.append(divTop);
    aDiv.append(divBottom);

    return aDiv;

}

function removeEvent(e){
    e.target.parentElement.remove();
}