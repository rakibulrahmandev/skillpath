import { contactInfo, footerLists, socialIcons } from "../../constants/data";

export default function Footer() {
    return (
        <>
            <footer className="pt-14 pb-8 bg-white">
                <div className="container">
                    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1fr_0.7fr_0.7fr_0.7fr]">
                        <div className="w-auto">
                            <div className="w-auto">
                                <img src="/image/logo.png" alt="footer logo" width={150} height={50} />
                            </div>
                            <div className="mt-8 space-y-4">
                                {contactInfo.map((item, idx) => (
                                    <a href="#" key={idx} className="flex items-center gap-1.5 hover:text-orange-50 hover:underline transition-colors">
                                        {<item.icon />}
                                        {item?.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                        {footerLists.map((item, idx) => (
                            <div key={idx} className="space-y-3">
                                <p className="text-lg font-semibold">{item?.title}</p>
                                <ul className="space-y-2.5">
                                    {item?.links.map((link, idx) => (
                                        <li key={idx}>
                                            <a href="#" className="hover:text-orange-50 transition-colors">{link?.label}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                        <div className="w-auto">
                            <p className="text-lg font-semibold">Social profiles</p>
                            <div className="flex mt-5 gap-3">
                                {socialIcons.map((item, idx) => (
                                    <button key={idx} className="secondary-btn p-3.5 bg-white-97 hover:bg-white-99 hover:shadow-md transition-all">
                                        <a href="#">{<item.icon />}</a>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                    <p className="mt-16 text-center lg-mt-20">&copy; {new Date().getFullYear()} Skillpath. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
};