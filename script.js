let pets = [
    { name: 'Max', age: 1, species: 'Doggo' },
    { name: 'Mary', age: 2, species: 'Doggo' },
    { name: 'MacDonald', age: 3, species: 'Catterpus' },
    { name: 'McNaught', age: 4, species: 'Cyclops' },
]
function addPet() {
    let name = prompt('give me the name')
    let age = prompt('give me the age')
    let species = prompt('give me the species')
    let pet = {
        name: name,
        age: age,
        species: species,
    }
    pets.push(pet)
}

function showPets() {
    // loop through the pet array and for each pet, alert the name
    for (let pet of pets) {
        alert(pet.name)
    }
}

function removePet() {
    // output all the pets (same as showPets())
    showPets()
    // get the index of the pet to remove from the user
    let remove = prompt('index?')
    // delete that index of the array
    pets.splice(remove, 1)
}

function searchPets() {
    // get the name of the pet to search for from the user
    let petToSearchFor = prompt('what pet do you want to find')
    // create a variable to store the result of the search, starting off as 'false' for 'haven't found it yet'
    let searchResult = false
    // for each pet in the array, check if the name of the pet is the same as the one the user is searching for
    for (let pet of pets) {
        if (pet.name == petToSearchFor) {

            // if it is the same, update the result of the search to 'true'
            searchResult = true
        }
    }
    // if the result of the search is true, tell the user the pet was found
    if (searchResult == true) {
        alert('found it')
        // if the result of the search is false, tell the user the pet isn't in the register
    } else {
        alert('didnt find it')
    }
}