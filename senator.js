import { senatorData } from './assets/senators.js'



// Senator Info

const senators = senatorData[0].results[0].members

const republicans = senators.filter(senator => senator.party === "R")
const democrats = senators.filter(senator => senator.party === "D")

const maleSenators = senators.filter(senator => senator.gender === 'M')

const femaleSenators = senators.filter(senator => senator.gender === 'F')

const mostLoyalRepublican = republicans.reduce((acc, senator) => senator.votes_with_party_pct > 0 ? senator : acc, 0)

const mostLoyalDemocrat = democrats.reduce((acc, senator) => senator.votes_with_party_pct > 0 ? senator : acc, 0)

console.log(`The senator who is the most loyal to the republican party is $ ${mostLoyalRepublican.first_name} ${mostLoyalRepublican.last_name} from ${mostLoyalRepublican.state} who votes with republicans ${mostLoyalRepublican.votes_with_party_pct}% of the time`)

console.log(`The senator who is the most loyal to the democratic party is $ ${mostLoyalDemocrat.first_name} ${mostLoyalDemocrat.last_name} from ${mostLoyalDemocrat.state} who votes with republicans ${mostLoyalDemocrat.votes_with_party_pct}% of the time`)


console.log(`There are ${republicans.length} republicans and ${democrats.length} democrats in the Senate`)
console.log(maleSenators)
console.log(femaleSenators)

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
        // let displayName = document.createElement('p')
        // displayName.textContent = `${senator.first_name} ${senator.last_name}`
    name.textContent = `Name: ${senator.first_name} ${senator.last_name}`
    gender.textContent = `Gender: ${senator.gender}`
    party.textContent = `Party: ${senator.party}`
        // frontCard.appendChild(displayName)
    backCard.appendChild(name)
    backCard.appendChild(gender)
    backCard.appendChild(party)
    cardDiv.className = "card"
    frontCard.className = "card__face card__face--front"
    backCard.className = "card__face card__face--back"
    let frontImg = document.createElement('img')
    frontImg.src = senator.imgURL
    frontCard.appendChild(frontImg)

    // SORT BACKCARD/BORDER COLOR
    if (senator.party === `R`) {
        frontImg.style.border = "thick solid #8E1600";
    } else if (senator.party === `D`) {
        frontImg.style.border = "thick solid #222D65";
    } else {
        frontImg.style.border = "thick solid #384e1d"
    }



    if (senator.party === `R`) {
        backCard.style.backgroundColor = " #8E1600"
    } else if (senator.party === `D`) {
        backCard.style.backgroundColor = "#222D65"
    } else {
        backCard.style.backgroundColor = "#384e1d"
    }


    // now, add the front and back cards to the containing div
    cardDiv.appendChild(frontCard)
    cardDiv.appendChild(backCard)
    pictureDiv.appendChild(cardDiv)


});