import { people } from '/assets/people.js';

// document.getElementById('card1').innerHTML = people[0].name + "<br>" + people[0].height + "<br>" + people[0].mass + "<br>" + people[0].hair_color + "<br>" + people[0].skin_color + "<br>" + people[0].birth_year + "<br>" + people[0].gender

let sceneDiv = document.querySelector('.scene')

const cardCreator = (person) => {
    let cardDiv = document.createElement('div')
    cardDiv.addEventListener('click', function() {
        cardDiv.classList.toggle('is-flipped');
    })
    let frontCard = document.createElement('div')
    let backCard = document.createElement('div')

    let name = document.createElement('p')
    let height = document.createElement('p')
    let mass = document.createElement('p')
    let hair_color = document.createElement('p')
    name.textContent = `Name: ${person.name}`
    height.textContent = `Height: ${person.height}`
    mass.textContent = `Mass: ${person.mass}`
    hair_color.textContent = `Hair Color: ${person.hair_color}`
    backCard.appendChild(name)
    backCard.appendChild(height)
    backCard.appendChild(mass)
    backCard.appendChild(hair_color)

    cardDiv.className = "card"
    frontCard.className = "card__face card__face--front"
    backCard.className = "card__face card__face--back"
    let frontImg = document.createElement('img')
    frontImg.src = "https://vignette.wikia.nocookie.net/starwars/images/d/d9/Luke-rotjpromo.jpg/revision/latest?cb=20091030151422"
    frontCard.appendChild(frontImg)
        // now, add the front and back cards to the containing div
    cardDiv.appendChild(frontCard)
    cardDiv.appendChild(backCard)
    sceneDiv.appendChild(cardDiv)
    console.log(person.name)
};

people.forEach(element => cardCreator(element))


// var card = document.querySelector('.card');
// card.addEventListener('click', function() {
//     card.classList.toggle('is-flipped');
// });

{
    /* <div class="card">
    <div class="card__face card__face--front"><img class="imagesize" src="https://vignette.wikia.nocookie.net/starwars/images/d/d9/Luke-rotjpromo.jpg/revision/latest?cb=20091030151422">
    </div>
    <div class="card__face card__face--back" id="card1"></div>
    </div> */
}

// let limitedPeople = people.slice(0, 1)
// let peopleList = document.querySelector("#card1")

// limitedPeople.forEach((person) => {
//     let listItem = document.createElement('li')
//     listItem.textContent = person.name
//     peopleList.appendChild(listItem)
// })

// limitedPeople.forEach((person) => {
//     let listItem = document.createElement('li')
//     listItem.textContent = person.height
//     peopleList.appendChild(listItem)
// })

let newCard = {
    "name": "Thor Anderson",
    "height": "200",
    "mass": "100",
    "hair_color": "brown",
}

let createCard = document.querySelector('#createCard')
createCard.addEventListener('click', () => {
    return cardCreator(newCard)
})

// var createCard = document.getElementById('createCard')
// createCard.addEventListener('click', function() {
//     var container = document.getElementById('main');
//     container.innerHTML +=
//         '<div class="scene scene--card">' +
//         '<div class="card">' +
//         '<div class="card__face card__face--front">' + '<img src="' + document.getElementsByName('cardImage')[0].value + '">' +
//         '</div>' +
//         '<div class="card__face card__face--back">' + document.getElementsByName('cardName')[0].value + '<br>' + document.getElementsByName('cardStats')[0].value + '</div>' +
//         '</div>'
// })