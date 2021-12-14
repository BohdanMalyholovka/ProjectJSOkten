//1. Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// let btn_1 = document.getElementById('btn_1');
// let  flag = true;
// btn_1.onclick = function () {
//     if (flag) {
//         document.getElementById('text').style.display = 'none';
//     } else {
//         document.getElementById('text').style.display = 'block';
//     }
//     flag = !flag;
// }

//2. Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// let btn_1 = document.getElementById('btn_1');
// btn_1.onclick = function (){
//     this.classList.toggle('hidebtn');
// };
// //3. створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// let form = document.forms.checkout_name;
// form.onsubmit = function (e){
//     e.preventDefault();
//     console.log(this.userAge);
// };
//3. Создайте меню, которое раскрывается/сворачивается при клике
// let menu = document.getElementsByClassName('menu')[0];
// menu.onclick = function (){
//     console.log(this.children);
//     for (const child of this.children) {
//         child.classList.toggle('collapse');
//     }
// };

//4. Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
 let coments = [
     {title : 'lorem_1', body:'lorem ipsum dolo sit ameti'},
     {title : 'lorem_2', body:'lorem ipsum dolo sit ameti'},
     {title : 'lorem_3', body:'lorem ipsum dolo sit ameti'},
     {title : 'lorem_4', body:'lorem ipsum dolo sit ameti'},
     {title : 'lorem_5', body:'lorem ipsum dolo sit ameti'},
 ]
for (const comment of coments) {
    let commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');
    let title = document.createElement('h2');
    title.innerText = comment.title;
    let bodyComment = document.createElement('div');
    bodyComment.innerText = comment.body;
    let btn = document.createElement('button');
    btn.innerText = 'hide comment body';
    btn.onclick = function (){
        bodyComment.classList.toggle('hide-body');
    };


    commentDiv.append(title,bodyComment,btn);
    document.body.appendChild(commentDiv);

}