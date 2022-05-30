import { h, FunctionalComponent } from "preact"
import { IconContext } from "react-icons"
import { BsArrowUp, BsArrowDown } from "react-icons/bs"

interface MenuTogglerProps {
    toggled: boolean
    onToggle: () => void
}

const MenuToggler: FunctionalComponent<MenuTogglerProps> = ({ toggled, onToggle }) => {
    const Icon = toggled ? BsArrowUp : BsArrowDown

    return (
        <button className="bg-gray-200 bg-opacity-90 forest:bg-green-700 forest:bg-opacity-80 shiverchill:bg-teal-500 shiverchill:bg-opacity-80 bonfire-spire:bg-rose-600 bonfire-spire:bg-opacity-[.85] absolute z-10" onClick={onToggle} id="menu-toggler">
            <IconContext.Provider value={{ size: "30px", color: "black" }}>
                <Icon />
            </IconContext.Provider>
        </button>
    )
}

export default MenuToggler
