import { people } from '/assets/people.js';

var card = document.querySelector('.card');
card.addEventListener('mouseover', function() {
    card.classList.toggle('is-flipped');
});

// document.getElementById('card1').innerHTML = people.name[0] + "<br>" + people.height[0] + "<br>" + people.mass[0] + "<br>" +
//     people.hair_color[0] + "<br>" + peeople.skin_color[0] + "<br>" + people.birth_year[0] + "<br>" + people.gender[0]


let limitedPeople = people.slice(0, 1)
let peopleList = document.querySelector("#card1")

limitedPeople.forEach((person) => {
    let listItem = document.createElement('li')
    listItem.textContent = person.name
    peopleList.appendChild(listItem)
})

limitedPeople.forEach((person) => {
    let listItem = document.createElement('li')
    listItem.textContent = person.height
    peopleList.appendChild(listItem)
})