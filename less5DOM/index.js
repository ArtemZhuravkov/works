// Задание 1

// let list = document.createElement('ul');
// document.body.appendChild(list);
// let userIdea;

// function createListItem () {
//     if(userIdea !== null && userIdea !== ""){
//         let listItem = document.createElement('li');
//         list.appendChild(listItem);
//         listItem.innerText = userIdea;                                                       
//     }      
// }
// while (userIdea !== null && userIdea !== ""){
//     userIdea = prompt('Enter content');
//     createListItem();             
// }

// Задание 2\3

let data = {
    "Рыбы": {
        "Форель": {},
        "Щука": {}
    },    
    "Деревья": {
        "Хвойные": {
            "Лиственница": {},
            "Ель": {}
        },
        "Цветковые": {
            "Берёза": {},
            "Тополь": {}
        }        
    }    
};

function createElements (elem) {
    return document.createElement(elem);
};

let container = document.getElementById('container');

function createTree (container, data) {     
    for (let item in data) {
        let liItem = createElements('li');                   
        container.append(liItem);
        liItem.append(item);         
        for(let kind in data[item]) {                      
            let ulItem = createElements('ul');
            let newLiItem = createElements('li');
            newLiItem.append(kind);
            ulItem.append(newLiItem);            
            liItem.append(ulItem); 
            for(let kindItem in data[item][kind]) {
              let anotherLiItem = createElements('li');
              let anotherUlItem = createElements('ul');
              anotherLiItem.append(kindItem);
              anotherUlItem.append(anotherLiItem)
              newLiItem.append(anotherUlItem);
            };                                
        };          
    };
    for (let li of container.querySelectorAll('li')) {                      
        let count = li.getElementsByTagName('li').length;       
        console.log(li);       
        li.append(' ' + count);            
      }
};
createTree(container, data);














































// Классная работа

// let input = document.getElementById('one');
// let input2 = document.getElementById('two');
// let input3 = document.querySelector('#three');
// function onlyNum (elem){
//     elem.addEventListener('keypress', (e) => {
//         let key = e.key;
//         if(key >= 'A' && key <= 'Z' || key >= 'a' && key <= 'z'){        
//             e.preventDefault();
//         } 
//     })
// }
// onlyNum(input2);
// onlyNum(input);

// function createTree (container, data) {
//     for(let key in data){
//         console.log();  
//         let containerItem = createElements('li');
//         let containerItemUl = createElements('ul');
//         container.appendChild(containerItem);
//         containerItem.innerHTML = key + "[" + container.children.length + "]";             
//         containerItem.appendChild(containerItemUl);                        
//         for(let keyItem in data[key]){       
//             let containerItemChild = createElements('li');
//             let treeList = createElements('ul');
//             containerItemChild.innerHTML = keyItem;
//             containerItemUl.appendChild(containerItemChild);
//             for(let keyItemChild in data[key][keyItem]){             
//                 let treeListItem = createElements('li');            
//                 treeListItem.innerHTML = keyItemChild;
//                 treeList.appendChild(treeListItem);
//                 containerItemChild.appendChild(treeList);
//             };
//         };    
//     };  
// }
// createTree(container, data);