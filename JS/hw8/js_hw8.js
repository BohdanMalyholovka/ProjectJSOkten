let contentElement = document.getElementById('content');
console.log(contentElement);
let rulesElement = document.getElementById('rules');
console.log(rulesElement);


contentElement.innerText = 'День неймовірний';
rulesElement.innerText = 'Гляди рядок вище:)';


contentElement.style.backgroundColor = 'red';
rulesElement.style.backgroundColor = 'red';


contentElement.style.color = 'blue';
rulesElement.style.color = 'blue';


let rulesId = document.getElementById('rules');
console.log(rulesId.classList);

let classRules = document.getElementsByClassName('fc_rules');
for (const el of classRules) {
    el.style.color = 'red'
}