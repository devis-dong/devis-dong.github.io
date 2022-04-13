/*
 * @Author: devis.dong
 * @Email: devis.dong@gmail.com
 * @Date: 2022-04-13 19:47:43
 * @LastEditTime: 2022-04-13 20:16:59
 * @LastEditors: devis.dong
 * @FilePath: \web-learning\test-site\scripts\main.js
 * @Description:
 */

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/plane_0.jpg') {
      myImage.setAttribute('src', 'images/plane_1.jpg');
    } else {
      myImage.setAttribute('src', 'images/plane_0.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    var oldName = localStorage.getItem('name');
    if(null === oldName) oldName = '';
    let myName = prompt('请输入你的名字。');
    if(myName === null) {
        myName = oldName;
    }
    localStorage.setItem('name', myName);
    myHeading.textContent = '学个鸡毛的前端啊，' + myName;
}

if(!localStorage.getItem('name')) {
setUserName();
} else {
let storedName = localStorage.getItem('name');
myHeading.textContent = '学个鸡毛的前端啊，' + storedName;
}

myButton.onclick = function(){
    setUserName();
}

// document.querySelector('html').onclick = function() {
//     alert('别戳我，我怕疼。');
// }
