import { confirm, InputTypes, success, error } from "../swal"
import { Category } from "./base/categories"
import { withCategory } from "./base/registry"

const names = ["Boots", "Buddies", "Fossils", "Hats", "Items", "Key Items", "Tower Town Frames", "Tower Town Interiors", "Mounts", "Outfits", "Relics", "Weapons", "Currencies"]
const ids = ["boots", "follow", "fossil", "hat", "item", "key", "mathTownFrame", "mathTownInterior", "mount", "outfit", "spellRelic", "weapon", "currency"]
function itemify (item, amount) {
    return item.map(i => ({
        ID: i.ID,
        N: amount
    })).filter(v => v !== undefined)
}

withCategory(Category.INVENTORY, ({ hack }) => {
    hack("Item Stacker", "Get's a certain amount of every item.", async (hack, player, gameData) => {
        const value = await InputTypes.integer("Please enter the amount of every item you want to get.", 0, 9999)

        ids.forEach(id => {
            player.backpack.data[id] = itemify(gameData[id].filter(l => id === "follow" ? ![125, 126, 127, 128, 129, 134, 135, 136, 137].includes(l.ID) : l), value)
        })

        gameData.dorm.forEach(x => {
            player.house.data.items[x.ID] = { A: [], N: value }
        })

        const bountyIndex = () => player.backpack.data.item.findIndex(v => v.ID === 84 || v.ID === 85 || v.ID === 86)
        while (bountyIndex() > -1) player.backpack.data.item.splice(bountyIndex(), 1)

        success(`You now have ${value} of every item.`)
    })
    hack("Clear Inventory", "Clear's every item from your inventory.", async (hack, player) => {
        const confirmed = await confirm("Are you sure you want to clear your inventory?")
        if (!confirmed) {
            error("Cancelled by user.")
            return
        }
        Object.keys(player.backpack.data).forEach(i => {
            player.backpack.data[i] = []
        })
        success("Cleared every item from your account.")
    })
    hack("Selector (Basic)", "Select how many items of individual categories you want to get.", async (hack, player, gameData) => {
        const value = await InputTypes.select("Please select the category of items you want to get.", names)
        const name = names[value]
        const id = ids[value]
        let amount = await InputTypes.integer(`Please enter the amount of ${name.toLocaleLowerCase()} you want to get.`, 0, 9999)
        if (id === "mount") amount = Math.min(amount, gameData.mount.length)
        player.backpack.data[id] = itemify(gameData[id].filter(i => id === "follow" ? ![125, 126, 127, 128, 129, 134, 135, 136, 137].includes(i.ID) : i), amount)
        success(`You now have ${amount} of all ${name.toLocaleLowerCase()}.`)
    })
    hack("Selector (Advanced)", "Precisely pick the amount of an individual item you want to receive.", async (hack, player, gameData) => {
        const itemCategory = await InputTypes.select("Please select the category of items you want to get.", names)
        const itemCategoryId = ids[itemCategory]
        const itemCategoryOptions = gameData[itemCategoryId]
        const item = await InputTypes.select("Please select the item you want to get.", itemCategoryOptions.map(e => e.data.name))
        const itemData = itemCategoryOptions[item]
        const amount = await InputTypes.integer(`Please enter the amount of ${itemData.data.name} you want to get.`, 0, 9999)
        const indexOfItem = player.backpack.data[itemCategoryId].findIndex(i => i.ID === itemData.ID)
        if (indexOfItem === -1) {
            player.backpack.data[itemCategoryId].push({ ID: itemData.ID, N: amount })
        } else {
            player.backpack.data[itemCategoryId][indexOfItem].N = amount
        }
        success(`You now have ${amount} of ${itemData.data.name}.`)
    })
    hack("Obtain All Furniture", "Get's a certain amount of every furniture item.", async (hack, player, gameData) => {
        const value = await InputTypes.integer("Please enter the amount of every furniture item you want to get.", 0, 9999)
        gameData.dorm.forEach(x => {
            player.house.data.items[x.ID] = {
                A: [],
                N: value
            }
        })
        success(`You now have ${value} of every furniture item.`)
    })
})
