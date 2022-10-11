import { people } from './stores.js'

export function makeTables(people) {
    let total = people.length
    console.log("tables updated")
}

export function update (people){
    for (let i in people){
        console.log(people[i].firstName)
    }
}




export function up () {
    const array = [{name: "JP"}]
    for (let i in array) {
        console.log(array[i].name)
        console.log(array.length)
    }
}
// up()