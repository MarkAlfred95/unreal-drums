import { 
    NavLink 
} from "react-router-dom";

// import { motion } from "framer-motion";

const Navbar = () => {

    const navItems = ["Drums", "About", "Mixer", "Edit",]

    return (
        <nav className="h-16 bg-slate-900 flex items-center justify-center">
            <div className="h-full w-3/4 flex items-center justify-between">
                <div className="font-bold text-slate-100 text-2xl flex">
                    <p className="text-sky-500">UN</p>REAL DRUMS
                </div>
                <ul className="h-full flex justify-end items-center text-slate-100 gap-2">
                    {navItems.map((items, index) =>
                        <div key={index} className="nav-links cursor-pointer">
                            <NavLink
                                to={items === "Drums" ? "/" : `/${items.toLowerCase()}`}
                                className="nav-link h-16 px-4 grid content-center"
                            >{items}</NavLink>
                        </div>
                    )}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;