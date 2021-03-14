document.querySelector("#first").addEventListener('click',delete_1);
document.querySelector("#second").addEventListener('click',delete_2);
document.querySelector("#third").addEventListener('click',delete_3);
document.querySelector("#forth").addEventListener('click',delete_4);
document.querySelector("#fifth").addEventListener('click',delete_5);


function delete_1(){

    document.querySelector("#first").classList.add("hidden");
}
function delete_2(){

    document.querySelector("#second").classList.add("hidden");
}
function delete_3(){

    document.querySelector("#third").classList.add("hidden");
}
function delete_4(){

    document.querySelector("#forth").classList.add("hidden");
}
function delete_5(){

    document.querySelector("#fifth").classList.add("hidden");
}
