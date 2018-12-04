import { films } from '/assets/films.js'
import { people } from '/assets/people.js'


// FILM LIST
let filmList = document.querySelector("#film-list")

films.forEach((film) => {
    let listItem = document.createElement('li')
    listItem.textContent = film.title
    filmList.appendChild(listItem)
    console.log(film.title)
})

// PEOPLE LIST
let limitedPeople = people.slice(0, 7)

let peopleList = document.querySelector("#people-list")

limitedPeople.forEach((person) => {
    let listItem = document.createElement('li')
    listItem.textContent = person.name
    peopleList.appendChild(listItem)
})