import { RiCloseLine, RiMenuLine } from "@remixicon/react"
import { navItems } from "../../constants/data"

export default function Header() {
    return (
        <>
            <header className="w-full py-5">
                <div className="container">
                    <div className="w-auto">
                        <a href="#" >
                            <img src="/image/logo.png" alt="logo" width={170} height={50} />
                        </a>
                    </div>
                    {/* sm nav */}
                    <nav className="lg:hidden">
                        <button>
                            <RiCloseLine size={30}/>
                        </button>
                        <ul className="">
                            {navItems.map((item) => (
                                <li key={item?.id}>
                                    <a href="#">{item?.label}</a>
                                </li>
                            ))}
                        </ul>
                        <button className="">Login</button>
                    </nav>
                    <div className="w-auto lg:hidden">
                        <button className="">
                            <RiMenuLine />
                        </button>
                    </div>
                    {/* lg nav */}
                    <div className="max-lg:hidden">
                        <ul className="">
                            {navItems.map((item) => (
                                <li key={item?.id}>
                                    <a href="#">{item?.label}</a>
                                </li>
                            ))}
                        </ul>
                        <button className="max-lg:hidden">Login</button>
                    </div>
                </div>
            </header>
        </>
    )
}