import { senatorData } from './assets/senators.js'



// Senator Info

const senators = senatorData[0].results[0].members

// console.log(senators)

// const republicans = senators.filter(senator => senator.party === "R")
// const democrats = senators.filter(senator => senator.party === "D")

// const maleSenators = senators.filter(senator => senator.gender === 'M')

// const femaleSenators = senators.filter(senator => senator.gender === 'F')

// const mostLoyalRepublican = republicans.reduce((acc, senator) => senator.votes_with_party_pct > 0 ? senator : acc, 0)

// const mostLoyalDemocrat = democrats.reduce((acc, senator) => senator.votes_with_party_pct > 0 ? senator : acc, 0)

// console.log(`The senator who is the most loyal to the republican party is $ ${mostLoyalRepublican.first_name} ${mostLoyalRepublican.last_name} from ${mostLoyalRepublican.state} who votes with republicans ${mostLoyalRepublican.votes_with_party_pct}% of the time`)

// console.log(`The senator who is the most loyal to the democratic party is $ ${mostLoyalDemocrat.first_name} ${mostLoyalDemocrat.last_name} from ${mostLoyalDemocrat.state} who votes with republicans ${mostLoyalDemocrat.votes_with_party_pct}% of the time`)


// console.log(`There are ${republicans.length} republicans and ${democrats.length} democrats in the Senate`)
// console.log(maleSenators)
// console.log(femaleSenators)

// SENATOR CARD

const senWithPics = senators.map(senator => {
    senator.imgURL = `https://www.govtrack.us/data/photos/${senator.govtrack_id}-200px.jpeg`
    return senator
})


let pictureDiv = document.querySelector('.scene')

senWithPics.forEach(senator => {
    let cardDiv = document.createElement('div')
    cardDiv.addEventListener('click', function() {
        cardDiv.classList.toggle('is-flipped');
    })
    let frontCard = document.createElement('div')
    let backCard = document.createElement('div')
    let name = document.createElement('p')
    let gender = document.createElement('p')
    let party = document.createElement('p')
    name.textContent = `Name: ${senator.first_name} ${senator.last_name}`
    gender.textContent = `Gender: ${senator.gender}`
    party.textContent = `Party: ${senator.party}`
    backCard.appendChild(name)
    backCard.appendChild(gender)
    backCard.appendChild(party)
    cardDiv.className = "card"
    frontCard.className = "card__face card__face--front"
    backCard.className = "card__face card__face--back"
    let frontImg = document.createElement('img')
    frontImg.src = senator.imgURL
    frontCard.appendChild(frontImg)


    // now, add the front and back cards to the containing div
    cardDiv.appendChild(frontCard)
    cardDiv.appendChild(backCard)
    pictureDiv.appendChild(cardDiv)


});



//EXAMPLE HP CODE
// let houses = ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"]

// let sortByHouse = () => {
//     removeCards()
//     HouseButton.classList.add('current-button')
//     houses.forEach(house => {
//         let filteredByHouse = characters.filter(character => character.house === house)

//         let houseName = document.createElement('h2')
//         houseName.textContent = house
//         houseName.classList.add("house-heading", `${house}`)
//         cardContainer.appendChild(houseName)

//         filteredByHouse.forEach(character => {
//             createCard(character)
//         })
//     })
//     createCardButton.classList.add('hide')
// }

// HouseButton.addEventListener("click", sortByHouse)

// CSS makes card back color
// .Gryffindor {
//     background-color: #d84e3f;
// }

// .Slytherin {
//     background-color: #005d4b;
// }

// .Ravenclaw {
//     background-color: #22326a;
// }

// .Hufflepuff {
//     background-color: #fcb82d;
// }

// .sort-heading {
//     background-color: #000;
// }