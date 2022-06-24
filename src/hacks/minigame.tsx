import { success, error } from "../swal"
import { Category } from "./base/categories"
import { withCategory } from "./base/registry"

withCategory(Category.MINIGAME, ({ hack, toggle }) => {
    hack("Extra Time In Dino Dig", "Add 100 days to the timer in dino dig.", async (hack) => {
        if (!hack._state.states.get("DinoDig")?.timer?.addTime) {
            error("You are not in dino dig.")
            return
        }
        hack._state.states.get("DinoDig")?.timer?.addTime(8.64e9)
        success("Added 100 days to the timer.")
    })
    hack("End Dino Dig", "End the current time in dino dig.", async (hack) => {
        if (!hack._state.states.get("DinoDig")?.timer?.addTime) {
            error("You are not in dino dig.")
            return
        }
        hack._state.states.get("DinoDig")?.timer?.addTime(-9e15) // Subtract 285,388.1278538812694 years.
        success("The dino dig game has been ended.")
    })
})
