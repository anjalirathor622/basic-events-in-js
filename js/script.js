// js events calls the functions

// this function is for click event
function hello(){

    let perm = confirm('helllo ,do you wanna visite ?')

    if(perm == true){
        return document.write("welcome dosto....");
    }else{
        alert('ok thank you.')
    }
}

// this function is for duoble click events 
function hello2(fisrtname,lastname) {

    document.getElementById("demo").innerHTML = 'hello ' + fisrtname + ' ' + lastname;
}
//hello2("anjali","rathor");