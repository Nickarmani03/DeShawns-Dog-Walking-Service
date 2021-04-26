import { getPets, getWalkers } from "./database.js"
//  IMPORTING FUNTIONS FROM DATABASE

const pets = getPets()
const walkers = getWalkers()

document.addEventListener(
    "click", 
    (clickEvent) => { //the function that will be invoked when the user clicks //the arrow defines the function body that follows it
        // knows what the user clicked on
        //when someone clicks on something it allows it to happen
        const itemClicked = clickEvent.target //the most specific thing clicked on in the DOM. what the mouse was on when it was clicked
        //when someone clicks on something that starts with p, e, t within the string
        if (itemClicked.id.startsWith("pet")) {
            const [, petId] = itemClicked.id.split("--")
            //for of loops iterate though something like an array
            for (const pet of pets) {  //for loop inside a for loop is a nested loop
                if (pet.id === parseInt(petId)) { //asks if they are equal and iterates though the object until they find a match
                    // parse it out to chaNGE THE STRING TO A NUMBER. parse it into an interger   
                    let assignedWalker = { name: "" }
                   

                    for (const walker of walkers) {
                        if (walker.id === walkerId) {
                        }
                    }
                    window.alert(`${pet.name} is being walked by $${assignedWalker.name}`)
                }
            }
        }
    }
)



//puts on the DOM and renders it from the DOM- Document Object Model. its a document of objects to the browser
export const RegisteredPets = () => {
    let petHTML = "<ul>"
//gives it an ID attrubute. if its clicked on. interpolates the unique identifier
    for (const pet of pets) {
        petHTML += `<li id="pet--${pet.id}">${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}

