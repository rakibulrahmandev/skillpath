import { RiCloseLine, RiMenuLine } from "@remixicon/react"
import { navItems } from "../../constants/data"

export default function Header() {
    return (
        <>
            <header className="w-full py-5">
                <div className="container flex items-center justify-between border-b border-b-white-95 pb-5">
                    <div className="w-auto">
                        <a href="#" >
                            <img src="/image/logo.png" alt="logo" width={170} height={50} />
                        </a>
                    </div>
                    {/* sm nav */}
                    <nav className="lg:hidden fixed top-0 left-0 bg-white w-full h-screen flex flex-col items-center justify-center z-40 -translate-y-full transition-transform">
                        <button className="absolute top-8 right-8">
                            <RiCloseLine size={30}/>
                        </button>
                        <ul className="space-y-5 text-center">
                            {navItems.map((item) => (
                                <li key={item?.id}>
                                    <a href="#" className="text-lg font-medium hover:text-orange-50 transition-colors">{item?.label}</a>
                                </li>
                            ))}
                        </ul>
                        <button className="primary-btn mt-12 max-w-40 w-full">Login</button>
                    </nav>
                    <div className="w-auto lg:hidden">
                        <button className="">
                            <RiMenuLine />
                        </button>
                    </div>
                    {/* lg nav */}
                    <div className="max-lg:hidden flex items-center gap-10">
                        <ul className="flex gap-10">
                            {navItems.map((item) => (
                                <li key={item?.id}>
                                    <a href="#" className="hover:text-orange-50 transition-colors font-medium text-lg">{item?.label}</a>
                                </li>
                            ))}
                        </ul>
                        <button className="max-lg:hidden primary-btn">Login</button>
                    </div>
                </div>
            </header>
        </>
    )
}