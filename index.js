// Code your solution here
let arr = [1, 2, 3, 4, 5, 6];
let even = [];
for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) even.push(arr[i]);
}
// even = [2,4,6]


const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, string) {

    let findDriver = drivers.filter((d) => {
        return d.toLowerCase() === string.toLowerCase()
    })

    return findDriver
}

function fuzzyMatch(drivers, string) {

    let findString = drivers.filter((d) => {
        return d.substring(0, 2).includes(string)
    })

    return findString

    // console.log(findString)

    // return findString.substring(0, 1) === string
}
console.log(fuzzyMatch(drivers, "Sa"))


const driversTwo = [{
        name: 'Bobby',
        hometown: 'Pittsburgh'
    },
    {
        name: 'Sammy',
        hometown: 'New York'
    },
    {
        name: 'Sally',
        hometown: 'Cleveland'
    },
    {
        name: 'Annette',
        hometown: 'Los Angeles'
    },
    {
        name: 'Bobby',
        hometown: 'Tampa Bay'
    }
]

function matchName(drivers, string) {
    let findMatch = drivers.filter(d => {
        return d.name.includes(string)
    })

    return findMatch
}

console.log(matchName(driversTwo, "Bobby"))