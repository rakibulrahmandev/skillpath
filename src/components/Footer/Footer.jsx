import { contactInfo, footerLists, socialIcons } from "../../constants/data";

export default function Footer() {
    return (
        <>
            <footer className="pt-14 pb-8">
                <div className="container">
                    <div className="">
                        <div className="">
                            <div className="">
                                <img src="/image/logo.png" alt="footer logo" width={150} height={50} />
                            </div>
                            <div className="">
                                {contactInfo.map((item, idx) => (
                                    <a href="#" key={idx}>
                                        {<item.icon />}
                                        {item?.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                        {footerLists.map((item, idx) => (
                            <div key={idx}>
                                <p>{item?.title}</p>
                                <ul className="">
                                    {item?.links.map((link, idx) => (
                                        <li key={idx}>
                                            <a href="#">{link?.label}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                        <div className="">
                            <p>Social profiles</p>
                            <div>
                                {socialIcons.map((item, idx) => (
                                    <button key={idx}>
                                        <a href="#">{<item.icon />}</a>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                    <p>&copy; {new Date().getFullYear()} Skillpath. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
};