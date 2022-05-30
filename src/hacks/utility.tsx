import { saveGame } from "../hack"
import { InputTypes, success, confirm } from "../swal"
import { Category } from "./base/categories"
import { withCategory } from "./base/registry"

withCategory(Category.UTILITY, ({ hack, toggle }) => {
    hack("Save Character", "Use this to make sure your character is saved.", async () => {
        saveGame()
        success("Your character has been saved.")
    })
    let teleportingInterval
    toggle("Toggle Click Teleporting", (hack, player, gameData, toggled) => {
        if (toggled) {
            teleportingInterval = setInterval(() => {
                player._playerContainer.walkSpeed = 500
            }, 100)
            success("You will now teleport when you click the screen.")
        } else {
            clearInterval(teleportingInterval)
            player._playerContainer.walkSpeed = 1.5
            success("You will no longer teleport when you click the screen.")
        }
    })
    hack("Edit Walkspeed", "Edit the walkspeed of your character.", async (hack, player) => {
        const walkSpeed = await InputTypes.float("Please enter the walkspeed you want your character to be at. The default is 1.5")
        if (player._playerContainer?.walkSpeed) {
            player._playerContainer.walkSpeed = walkSpeed || 1.5
        } else {
            const interval = setInterval(() => {
                if (player._playerContainer?.walkSpeed) {
                    player._playerContainer.walkSpeed = walkSpeed || 1.5
                    clearInterval(interval)
                }
            }, 100)
        }
        success(`You are now at a walkspeed ${walkSpeed}.`)
    })
    hack("Reset Account", "Completely resets your account.", async (hack, player) => {
        const confirmed = await confirm("Are you sure you want to reset your account?")
        if (confirmed) {
            player.resetAccount()
            success("Your account has been reset.")
        } else {
            success("Your account has not been reset.")
        }
    })
})
