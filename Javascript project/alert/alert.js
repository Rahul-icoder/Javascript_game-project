console.log('this is pratice session');
let submit = document.getElementById('btn');
let close = document.getElementById('close');
 var c = 0;
 function pop(){
    console.log('running pop funciton');
    if(c == 0)
    {
        let head = document.getElementById('head').style.display = "block";
        c = 1;
    }
    else
    {
        let head = document.getElementById('head').style.display = "none"
        c=0;
    }
}