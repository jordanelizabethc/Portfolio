
import { films } from '/assets/films.js'
import { people } from '/assets/people.js'
import { starships } from '/assets/starships.js'

let filmList = document.querySelector("#film-list")

films.forEach((film) => {
    let listItem = document.createElement('li')
    listItem.textContent = film.opening_crawl
    filmList.appendChild(listItem)
    console.log(film.title)
})

console.log(people[9])