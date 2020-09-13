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





// function createTree (container, data) {
//     for (let item in data) {
//         let liItem = createElements('li');
//         container.append(liItem);
//         liItem.append(item);
//         for(let kind in data[item]) {
//             let ulItem = createElements('ul');
//             let newLiItem = createElements('li');
//             newLiItem.append(kind);
//             ulItem.append(newLiItem);
//             liItem.append(ulItem);
//             for(let kindItem in data[item][kind]) {
//               let anotherLiItem = createElements('li');
//               let anotherUlItem = createElements('ul');
//               anotherLiItem.append(kindItem);
//               anotherUlItem.append(anotherLiItem)
//               newLiItem.append(anotherUlItem);
//             };
//         };
//     };
//     for (let li of container.querySelectorAll('li')) {
//         let count = li.getElementsByTagName('li').length;
//         console.log(li);
//         li.append(' ' + count);
//       }
// };
// createTree(container, data);
let data = {
  'Рыбы': {
    'Форель': {},
    'Щука': {},
  },
  'Деревья': {
    'Хвойные': {
      'Лиственница': {},
      'Ель': {},
    },
    'Цветковые': {
      'Берёза': {},
      'Тополь': {
        'Мелкий тополь': {},
        'Большой тополь': {
          'Саженец тополя':{}
        }
      },
    },
  },
};

let container = document.getElementById("container");

function createTree (obj, box) {
  for(let key in obj){      
      let li = document.createElement('li');
      let ul = document.createElement('ul');
      li.innerHTML = key;
      li.append(ul);
      box.append(li);
      if(!obj){
          // break;
      } else {
          createTree(obj[key], ul)          
      }
  }
};
createTree(data, container);

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