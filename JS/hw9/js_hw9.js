// 1. Все робити за допомоги js.
// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
// let block = document.createElement('div');
// block.classList.add('wrap');
// block.classList.add('collapse');
// block.classList.add('alpha');
// block.classList.add('beta');
// block.style.color = 'red';
// block.style.backgroundColor = 'yellow';
// block.style.fontSize = '50px';
// block.innerText = 'Have a good day';
// let body = document.body
// let clone = block.cloneNode(true);
// body.appendChild(clone)

// 2. Є масив:
// ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
// let menuItem = ['Main','Products','About us','Contacts'];
// let menu = document.getElementsByClassName('menu')[0];
// for (const item of menuItem) {
//     let li = document.createElement('li');
//     li.innerText = item;
//     menu.appendChild(li);
// }

// 3. Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//4. Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// for (let item of coursesAndDurationArray) {
//     let minBlock = document.createElement('div');
//     minBlock.classList.add('corses');
//     minBlock.innerText = item.title + ' ' + item.monthDuration;
//     body.appendChild(minBlock);
// }

// 5. Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// for (let minBlock of coursesAndDurationArray) {
//     let divBlock = document.createElement('div');
//     divBlock.classList.add('item');
//     let h1Block = document.createElement('h1');
//     h1Block.classList.add('header')
//     let pBlock = document.createElement('p');
//     pBlock.classList.add('description');
//     h1Block.innerText = minBlock.title;
//     pBlock.innerText = minBlock.monthDuration;
//     document.body.appendChild(divBlock);
//     divBlock.appendChild(h1Block);
//     divBlock.appendChild(pBlock);
// }

