console.log('here is ajax');

let btn = document.getElementById('btn');
const get_Data = document.getElementById('get');
btn.addEventListener('click',onclick)

function onclick()
{
    const xhr = new XMLHttpRequest();
    xhr.open('GET','index.txt',true);

    xhr.onprogress = function(){
        console.log('on progress');
    }

    xhr.onload = function()
    {
        if(this.status==200){
            console.log(this.responseText);
        }
        else{
            console.log('some error occur');
        }
    }
    xhr.send();      
};

