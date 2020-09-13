let list = document.querySelector('ul');
list.addEventListener('click', function(event){
    if(event.target.type === 'checkbox'){        
        event.target.nextSibling.classList.toggle('checked');
    }
}, false)


function newElement() {
    let elem = document.createElement('li');
    let listCreatorValue = document.getElementById('listCreator').value;
    let checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('id', `${listCreatorValue}`);
    let elemValue = document.createElement('label');
    elemValue.setAttribute('for', `${listCreatorValue}`);
    elemValue.innerText = listCreatorValue;
    elem.append(checkbox, elemValue);
    if(listCreatorValue == ""){
        alert('Введите название задачи!')
    } else {
        document.querySelector('.toDoList').appendChild(elem);
    }
    document.getElementById('listCreator').value = "";
    let closeBtn = document.createElement('button');
    let closeItem = document.createTextNode('\u2716');
    let editBtn = document.createElement('button');    
    let editItem = document.createTextNode('\u270E');
    closeBtn.classList.add('closeBtn');
    editBtn.classList.add('editBtn');
    closeBtn.appendChild(closeItem);
    editBtn.appendChild(editItem);
    elem.append(closeBtn, editBtn);    
    let close = document.getElementsByClassName('closeBtn')
    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function() {
          let parent = this.parentElement;
          parent.remove();
        }
    };   
    editBtn.addEventListener("click", function () {    
        elem.children[0].setAttribute('type', 'text');            
        elem.children[0].value = elem.children[1].textContent;
        elem.children[1].style.display = 'none';
        elem.removeChild(elem.children[3]);
        elem.removeChild(elem.children[2]);
        let save = document.createElement('button');
        save.appendChild(document.createTextNode('\u2714'));
        save.classList.add('saveBtn');
        let cancel = document.createElement('button'); 
        cancel.appendChild(document.createTextNode('\u2718')); 
        cancel.classList.add('cancelBtn');
        elem.appendChild(cancel);
        elem.appendChild(save); 
        save.onclick = function (){
            elem.children[1].textContent = elem.children[0].value;
            elem.children[1].style.display = 'inline-block';
            elem.children[0].setAttribute('type', 'checkbox');
            elem.removeChild(elem.children[3]);
            elem.removeChild(elem.children[2]);
            elem.appendChild(closeBtn); 
            elem.appendChild(editBtn); 
        }
        cancel.onclick = function () {
            elem.children[0].value;
            elem.children[1].style.display = 'inline-block';
            elem.children[0].setAttribute('type', 'checkbox');
            elem.removeChild(elem.children[3]);
            elem.removeChild(elem.children[2]);
            elem.appendChild(closeBtn); 
            elem.appendChild(editBtn);

        }    
    });   
};
   


const createBtn = document.querySelector('.listCreatorBtn');
const listCreator = document.querySelector('#listCreator');
createBtn.addEventListener('click', newElement);
listCreator.addEventListener('keypress', function(keyPressed){
    const enterKey = 13;
    if(keyPressed.which == enterKey){
        newElement();
    }
});
const removeBtn = document.querySelector('.listRemoveBtn');
removeBtn.addEventListener('click', function(){    
    while (list.firstChild) {
        list.removeChild(list.firstChild);
      }
});
