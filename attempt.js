import { people } from '/assets/people.js';


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