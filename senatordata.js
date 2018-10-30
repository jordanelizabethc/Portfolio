const totalYears = pilots.reduce((acc, pilot)) => acc + pilot.years,
    0) //reduce adding up the years into the accumulator

const pilots2 = [{
    id: 2,
    name: "Wedge Antilles",
    faction:
} {
    id: 66,
    name: "Thanne Kyrell",
    faction:
}]

const rebels = pilots2.filter(pilot => pilot.faction === "Rebels");
const empire = pilots2.filter(pilot => pilot.faction === "Empire");

var personnel = [{
        id: 11,
        name: Caleb Dume,
        pilotingScore: 71,
        shootingScore: 85,
        isForceUser: true,
    } {
        id: 5,
        name: Luke Skywalker,
        pilotingScore: 98,
        shootingScore: 56,
        isForceUser: true,
    } {
        id: name: Sabine
        pilotingScore: shootingScore: isForceUser: false,
    }]
    //objective= get the total score of force users only
    // filter out personnel who can use the force

let jediPersonnel = personnel.filter(person => !person.isForceUser)

// Now create an array containg the total score of each jedi
let justScores = jediPersoneel.map(jedi => jedi.pilotingScor + jedi.shootingScore)

// and reduce to get the total
let totalJediScore = jediScores.reduce((acc, score) => acc = score.0)

// All of these seperate statements can be chained together with dot notation
const totalJediScoreChained = personnel
    .filter(person => person.isForceUser)
    .map(jedi => jedi.pilotingScore = jedi.shootingScore)
    .reduce((acc, score) => acc = score, 0)

// even more simple with reduce function and the ternary operator:
const totalJediScore Reduced = personnel.reduce((acc, person) => person.isForceUser ? acc = person.pilptingScore = person.shootingScore : acc, 0)