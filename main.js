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