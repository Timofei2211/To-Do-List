let form = document.querySelector('.create-dialog');
let priority = document.querySelector('.to-do-priority');
let inputLabel = document.getElementById("inputLabel");       //Поле ввода текста задачи
let createNoteButton = document.getElementById("submitButton");
let charCounterInputLabel = document.querySelector('.charCounter');
let buttonOpenForm = document.getElementById('visualizeForm');
let upButton = document.querySelector('.up-button')
buttonOpenForm.onclick = function () {
    form.classList.add('show');
}

inputLabel.oninput = function(){ 
    console.log(inputLabel.value);                //Вывод в консоль содержания input при вводе новых символов
    charCounterInputLabel.textContent=inputLabel.value.length;   //Счетчик символов
    if(inputLabel.value.length> 10){              //Слишком много символов в поле input
        inputLabel.classList.add('validation-input-label');
        createNoteButton.disabled = true;         //Заблочил кнопку
    }
    else{
        createNoteButton.disabled = false;
        inputLabel.classList.remove('validation-input-label');
    }
}

priority.onclick = function(){                         //Кнопка приоритета задач
    priority.classList.toggle('is-important');
    if(priority.classList.contains('is-important')){
        priority.textContent ="Важная задача"
    }
    else{
        priority.textContent="Обычная задача"
    }
}

form.onsubmit = function (evt) {
    evt.preventDefault();
    let dateOfNote = document.getElementById("calendar1").value;
    let task = document.createElement('ul');
    let textInTask = document.createElement('textArea');
    textInTask.classList.add('textAreas');             //Стиль созданной заметки
    
    if(priority.classList.contains('is-important')){
        textInTask.classList.add('is-important')
    }

    textInTask.textContent=inputLabel.value+ ' ' +dateOfNote;
    document.getElementById("inputLabel").value='';  //Обнуление введенных данных полей input
    document.getElementById("calendar1").value="";
    
    charCounterInputLabel.textContent=0;
    form.appendChild(task);
    task.appendChild(textInTask);
}

window.onscroll = function(){
   if(window.pageYOffset>200){
    upButton.classList.add('shown');
   } else{
       upButton.classList.remove('shown');
   }
}
upButton.onclick = function(){
  window.scrollTo(0,0);
}