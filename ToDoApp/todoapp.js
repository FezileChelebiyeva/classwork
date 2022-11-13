let input = document.querySelector('#input')
let addBtn = document.querySelector('#addBtn')
let deleteBtn = document.querySelector('#deleteBtn')
let list = document.querySelector('#list')
let taskDeleteBtn = document.querySelector(".taskDeleteBtn")
 
addBtn.addEventListener('click', function() {
   
    if(input.value !== ""){
        let newBtn = document.createElement('button');
        newBtn.className = "taskDeleteBtn"
        newBtn.innerText = "Delete";
        let newElement = document.createElement('li');
        newElement.className = "flex";
        newElement.innerText= input.value;
        list.append(newElement);
        newElement.append(newBtn);
        input.value = "";
       
        document.querySelector(".taskDeleteBtn").addEventListener('click', function(e){
            console.log(e.target.parentElement.remove());
           
        })
 
    }
    else{
       
        alert('yaz')
    }
    console.log(document.querySelector(".taskDeleteBtn"))
});
 
deleteBtn.addEventListener('click', function(){
    list.innerText = ""
})
