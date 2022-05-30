import { InputTypes, success } from "../swal"
import { Category } from "./base/categories"
import { withCategory } from "./base/registry"

function randomIntFromInterval (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function getHpFromPet (level, petGameData) {
    const statValue = petGameData.data.statHealth
    const level1Hp = (500 / 1.25) * Math.pow((Math.pow(1.25, 0.25)), statValue - 1)
    const hpInc = (100 / 1.25) * Math.pow((Math.pow(1.25, 0.25)), statValue - 1)

    return Math.ceil(level1Hp + (level - 1) * hpInc)
}

withCategory(Category.PET, ({ hack }) => {
    hack("Get All Pets", "Every pet in the game get's added to your inventory", async (hack, player, gameData) => {
        const level = await InputTypes.integer("Please enter the level you want the bets to be.", 1, 100)
        let xp
        if (level === 1) {
            xp = 0
        } else if (level === 2) {
            xp = 10
        } else {
            const offsetLevel = level - 2
            const xpConstant = 1.042
            xp = Math.round((((1 - Math.pow(xpConstant, offsetLevel)) / (1 - xpConstant)) * 20) + 10)
        }
        const pets = gameData.pet
        pets.forEach(x => {
            player.kennel.addPet(x.ID.toString(), getHpFromPet(level, x), xp, level)
        })
        player.kennel._encounterInfo._data.pets = pets.map(x => ({
            firstSeenDate: Date.now() - randomIntFromInterval(20000, 120000),
            ID: x.ID,
            timesBattled: 1,
            timesRescued: 1,
            rescueAttempts: 1
        }))
        success("You now have every pet in the game.")
    })
    hack("Fix Battle Crash", "If starting a battle crashes prodigy use this hack.", (hack, player) => {
        player.kennel.petTeam.forEach((v: any) => {
            if (v && (v as any).assignRandomSpells) (v as any).assignRandomSpells()
        })
        success("The battle crash should fixed.")
    })
    hack("Add Pet", "Add a pet to your kennel", async (hack, player, gameData) => {
        const petIndex = await InputTypes.select("Which pet do you want to obtain?", gameData.pet.map(x => x.data.name))
        const pet = gameData.pet[petIndex]
        const level = await InputTypes.integer("Please enter the level you want the pet to be.", 1, 100)
        let xp
        if (level === 1) {
            xp = 0
        } else if (level === 2) {
            xp = 10
        } else {
            const offsetLevel = level - 2
            const xpConstant = 1.042
            xp = Math.round((((1 - Math.pow(xpConstant, offsetLevel)) / (1 - xpConstant)) * 20) + 10)
        }
        player.kennel.addPet(pet.ID.toString(), null, xp, level)
        const encounterInfoPet = player.kennel._encounterInfo._data.pets.find(e => e.ID === pet.ID)
        if (encounterInfoPet) {
            encounterInfoPet.timesRescued++
        } else {
            player.kennel._encounterInfo._data.pets.push({
                firstSeenDate: Date.now() - randomIntFromInterval(20000, 120000),
                ID: pet.ID,
                timesBattled: 1,
                timesRescued: 1
            })
        }
        success(`You now have ${pet.data.name}`)
    })
})
