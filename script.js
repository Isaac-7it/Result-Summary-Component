"use strict";
const props = document.querySelectorAll('.props');
const img = document.querySelectorAll('img');
const score = document.querySelectorAll('.score');
const rating = document.querySelector('.result__main-rating')
let sum;


const stat = [
    {
        "category": "Reaction",
        "score": 80,
        "icon": "./assets/images/icon-reaction.svg"
    },
    {
        "category": "Memory",
        "score": 92,
        "icon": "./assets/images/icon-memory.svg"
    },
    {
        "category": "Verbal",
        "score": 61,
        "icon": "./assets/images/icon-verbal.svg"
    },
    {
        "category": "Visual",
        "score": 72,
        "icon": "./assets/images/icon-visual.svg"
    }
]

const avg = function (arr) {
    sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i].score;
    }

    return Math.round(sum / arr.length);
}

for (let i = 0; i < stat.length; i++) {
    img[i].src = `${stat[i].icon}`;
    props[i].innerHTML = `${stat[i].category}`;
    score[i].innerHTML = `${stat[i].score}`;
}

rating.innerHTML = `${avg(stat)}`

console.log(avg(stat)); console.log(score);