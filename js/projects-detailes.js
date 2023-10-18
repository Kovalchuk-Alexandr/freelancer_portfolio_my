let projectId = localStorage.getItem('projectId');

const item = projects[projectId];

let title = item.title;
let desc = item.desc;
let skills = item.skills;
let img = item.imgBig;
let site = item.site;
let siteTitle = item.siteTitle;
let gitTitle = item.gitTitle;
let gitRef = item.gitRef;

// Рисуем заголовок и картинку
document.querySelector('.project-detailes .title-1').innerHTML = title;
document.querySelector('.project-detailes__cover').setAttribute('src', `./img/projects/${img}`);


// Выводим описание
let textEnd = "</div>";
let text = 
    `<div class="project-detailes__desc"><p>${desc}</p>`
    // `<div class="project-description"><p class="desc"> ${desc}</p>`

if (site != '') {
    text += `<p class="site-ref">Адрес сайта: <a href=${site} target="_blank">${siteTitle}</a> </p>`
}

if (skills != '') {
    text += `<p class="skills"><strong><big>Skills: </big> ${skills}</strong></p>`
}

if (gitRef != '') {
    document.querySelector('.btn-outline').setAttribute('href', `${gitRef}`);
    document.querySelector('.btn-outline').setAttribute('target', "_blank");

    gitTitle = (siteTitle == 'E-Shop') ? 'Для варианта с хранением Mongo-DB' : gitTitle;
    // text += `<p class="github">Github: <a href=${gitRef} target="_blank">${gitTitle}</a> </p>`
}

text += textEnd;
document.querySelector('.project-detailes__desc').innerHTML = text;
