//a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
// let main_header = document.getElementById('main_header');
// main_header.innerText = 'Enter the name of your group ';

// b) робить шириниу елементу ul 400px
// let ul = document.getElementsByTagName('ul');
// console.log(ul)
// ul[0].style.width = '400px';
// ul[0].style.border = '1px solid red';

// c) робить шириниу всіх елементів з класом linkList шириною 50%
// let li = document.getElementsByTagName('ul');
// for (const liElement of li) {
//     liElement.style.border = '1px solid yellow';
//     liElement.style.width = '50%';
// }

// d) отримує текст який зберігається в = елементі з класом listElement2
// let liText = document.getElementsByClassName('listElement2');
// console.log(liText);
// liText[0].innerHTML = '<a href="#">туц туц</a>';

// e) отримує всі елементи li та змінює ім колір фону на сірий
// let liAll = document.getElementsByTagName('li');
// console.log(liAll);
// for (const liAllElement of liAll) {
//     liAllElement.style.color = 'grey';
// }

// f) отримує всі елементи 'a' та додає їм клас anchor
// let aAll = document.getElementsByTagName('a');
// console.log(aAll);
// for (const aAllElement of aAll) {
//     aAllElement.classList.add('anchor')
//     console.log(aAllElement)
// }

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// let aAll = document.getElementsByTagName('a');
// console.log(aAll);
// for (let aAllElement of aAll) {
//     console.log(aAllElement);
//     if (aAllElement.innerText === 'link3') {
//         aAllElement.style.fontSize = '40px';
//     }
// }

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// let aAll = document.getElementsByTagName('a');
// console.log(aAll);
// for (let aAllElement of aAll) {
//     aAllElement.classList.add('element_XXX')
//     let element_XXX = aAllElement.innerText
//     aAllElement.classList.add(`element_${XXX}`)
// }

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let allSubHeader = document.getElementsByClassName('sub-header');
// console.log(allSubHeader);
// for (const el of allSubHeader) {
//     el.style.color = prompt('Enter color: (red, green, blue ...)');
// }
// allSubHeader[0].style.color = prompt('Enter color: (red, green, blue ...)');
// allSubHeader[1].style.color = prompt('Enter color: (red, green, blue ...)');

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// let allSubHeader = document.getElementsByClassName('sub-header');
// console.log(allSubHeader);
// for (const el of allSubHeader) {
//     el.style.color = prompt('Enter color: (red, green, blue ...)');
//     if (allSubHeader.innerText === 'content 2 segment') {
//         allSubHeader.style.fontSize = '40px';
//     }
// }
// allSubHeader[1].style.color = prompt('Enter color: (red, green, blue ...)');

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// let content_1 = document.getElementsByClassName('content_1');
// console.log(content_1[0].innerHTML);
// content_1[0].innerHTML = prompt('Enter new text');


// l) отримати елементи p та змінити їм padding на 20px
// let p = document.getElementsByClassName('p');
// for (const pElement of p) {
//     pElement.style.padding = '20px';
// }

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
// let m = document.getElementsByClassName('text2');
// console.log(m);
// m[0].innerText =  'sep-2021';