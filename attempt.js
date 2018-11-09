// import { people } from '/assets/people.js';

var people = [{
    "name": "Luke Skywalker",
    "height": "172",
    "mass": "77",
    "hair_color": "blond",
    "skin_color": "fair",
    "eye_color": "blue",
    "birth_year": "19BBY",
    "gender": "male",
}, {
    "name": "C-3PO",
    "height": "167",
    "mass": "75",
    "hair_color": "n/a",
    "skin_color": "gold",
    "eye_color": "yellow",
    "birth_year": "112BBY",
    "gender": "n/a",
}, {
    "name": "R2-D2",
    "height": "96",
    "mass": "32",
    "hair_color": "n/a",
    "skin_color": "white, blue",
    "eye_color": "red",
    "birth_year": "33BBY",
    "gender": "n/a",
}]

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