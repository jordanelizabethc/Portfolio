import { people } from '/assets/people.js';
// C:\Users\Jordan\Desktop\Skwel\DGM1600\Portfolio\star-wars-guide\build\assets\img\characters

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

    // "https://vignette.wikia.nocookie.net/starwars/images/d/d9/Luke-rotjpromo.jpg/revision/latest?cb=20091030151422"

    // let capt = document.createElement('figcaption')
    // capt.textContent = people.name
    // let backImg = document.createElement('figure')
    // backImg.src = "https://lumiere-a.akamaihd.net/v1/images/og-generic_02031d2b.png?region=0%2C0%2C1200%2C1200"
    // backCard.appendChild(backImg)

    // now, add the front and back cards to the containing div
    cardDiv.appendChild(frontCard)
    cardDiv.appendChild(backCard)
    sceneDiv.appendChild(cardDiv)
    console.log(person.name)
};

// let backCard = document.createElement('figure')
//   backCard.className = "card__face card__face--back"
//   let capt = document.createElement('figcaption')
//   let imag = document.createElement('img')

//   imag.src = "images/PokemonLogo.png"
//   capt.textContent = poke.ename
//   cardBack.appendChild(capt)
//   cardBack.appendChild(imag)



people.forEach(element => cardCreator(element))

let newCard = {
    "name": "Jordan Cecil",
    "height": "71",
    "mass": "70",
    "birth_year": "1995",
    "gender": "female",
}

let createCard = document.querySelector('#createCard')
createCard.addEventListener('click', () => {
    return cardCreator(newCard)
})