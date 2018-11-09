import { people } from '/assets/people.js';



var card = document.querySelector('.card');
card.addEventListener('click', function() {
    card.classList.toggle('is-flipped');
});

// document.getElementById('card1').innerHTML = people[0].name + "<br>" + people[0].height + "<br>" + people[0].mass + "<br>" +
//     people[0].hair_color + "<br>" + peeople[0].skin_color + "<br>" + people[0].birth_year + "<br>" + people[0].gender


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

var createCard = document.getElementById('createCard')
createCard.addEventListener('click', function() {
    var container = document.getElementById('main');
    container.innerHTML +=
        '<div class="scene scene--card">' +
        '<div class="card">' +
        '<div class="card__face card__face--front">' + '<img src="' + document.getElementsByName('cardImage')[0].value + '">' +
        '</div>' +
        '<div class="card__face card__face--back">' + document.getElementsByName('cardName')[0].value + '<br>' + document.getElementsByName('cardStats')[0].value + '</div>' +
        '</div>'
})