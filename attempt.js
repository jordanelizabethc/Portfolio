import { people } from '/assets/people.js';


let sceneDiv = document.querySelector('.scene')

// FRONT IMAGE BACK INFO
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
    let birth_year = document.createElement('p')
    let gender = document.createElement('p')
    name.textContent = `Name: ${person.name}`
    height.textContent = `Height: ${person.height}`
    mass.textContent = `Mass: ${person.mass}`
    birth_year.textContent = `Birth Year: ${person.birth_year}`
    gender.textContent = `Gender: ${person.gender}`
    backCard.appendChild(name)
    backCard.appendChild(height)
    backCard.appendChild(mass)
    backCard.appendChild(birth_year)
    backCard.appendChild(gender)
    cardDiv.className = "card"
    frontCard.className = "card__face card__face--front"
    backCard.className = "card__face card__face--back"
    let frontImg = document.createElement('img')
    let urlEnd = person.url.slice(person.url.length - 3)
    let characterNumber = urlEnd.replace(/\//gi, '')
    frontImg.src = `./characters/${characterNumber}.jpg`
    frontCard.appendChild(frontImg)


    // now, add the front and back cards to the containing div
    cardDiv.appendChild(frontCard)
    cardDiv.appendChild(backCard)
    sceneDiv.appendChild(cardDiv)
    console.log(person.name)
};

people.forEach(element => cardCreator(element))


let newCard = {
    "name": "Jordan Cecil",
    "height": "180",
    "mass": "70",
    "birth_year": "1995",
    "gender": "female",
    "url": "https://swapi.co/api/people/89/"
}

let createCard = document.querySelector('#createCard')
createCard.addEventListener('click', () => {
        return cardCreator(newCard)
    })
    // function OneNewCard(name, height, mass, birth_year, gender, picture) {
    //     this.name = name,
    //         this.height = height,
    //         this.mass = mass,
    //         this.birth_year = birth_year,
    //         this.gender = gender,
    //         this.picture = picture
    // }
    // new OneNewCard("Jordan", "72", "71", "female", "https://swapi.co/api/people/89/")