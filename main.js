import { films } from '/assets/films.js'
import { people } from '/assets/people.js'
import { starships } from '/assets/starships.js'

let filmList = document.querySelector("#film-list")

films.forEach((film) => {
    let listItem = document.createElement('li')
    listItem.textContent = film.title
    filmList.appendChild(listItem)
    console.log(film.title)
})



// let peopleList = document.querySelector("#people-list")
// var i;
// var listItem = "";
// for (i = 0; i < 7; i++) {
//     listItem = document.createElement('li');
//     listItem.textContent = people.name;
//     peopleList.appendChild(listItem);
// }
let limitedPeople = people.slice(0, 7)

let peopleList = document.querySelector("#people-list")

limitedPeople.forEach((person) => {
    let listItem = document.createElement('li')
    listItem.textContent = person.name
    peopleList.appendChild(listItem)
})
document.appendChild("<br>")

import { senatorData } from './assets/senators.js'


// const senators = 
console.log(senatorData.results[0].members)


const republicans = senators.filter(senator => senator.party === "R")

const democrats = senators.filter(senators => senator.party === "D")

const females = senators.filter(senator => senator.gender === 'F')

const males = senators.filter(senator => senator.gender === 'M')

const loyalRepublican = republicans.reduce((acc, senator) => senator.votes_with_party_pct > 0 ? senator : acc, 0)

//const loyalDemocrat = 

console.log('There are ${republicans.length} republicans and ${democrats.length} democrats in the Senate')

console.log('The most loyal Republican is ${loyalRepublican.first_name} ${loyalRepublican.last_name} from ${loyalRepublican.state} who votes with republicans ${loyalRepublican.votes_with_party_pct}% of the time.')