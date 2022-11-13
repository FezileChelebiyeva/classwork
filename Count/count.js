let btn = document.querySelector(".btn");
let count = document.querySelector(".count");
let n = 0 ;
btn.addEventListener('click', function(){
    n++;
    count.innerText = n
})
