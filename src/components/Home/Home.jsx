import { RiPlayFill } from "@remixicon/react";
import { heroLogos } from "../../constants/data";

export default function Home() {
    return (
        <>
            <section>
                <div className="container">
                    <div className="">
                        <div className="">
                            <span className="">
                                <img src="/image/shape-1.png" alt="title shape" width={39} height={43} />
                            </span>
                            <div className="">
                                <span>
                                    <img src="/image/shape-2.png" alt="title shape" width={48} height={48} />
                                </span>
                                <h1><span className="">Unlock</span> Your Creative Potential</h1>
                            </div>
                        </div>
                        <p>with Online Design and Development Courses.</p>
                        <p>Learn from Industry Experts and Enhance Your Skills.</p>
                        <div className="">
                            <button>Explore Courses</button>
                            <button>View Pricing</button>
                        </div>
                        <div className="">
                            <div>
                                {heroLogos.map((logo) => (
                                    <div className="" key={logo?.id}>
                                        <img src={logo?.item} alt="logo" width={logo?.width} height={28} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <figure>
                        <img src="/image/hero-banner.png" alt="home banner" width={940} height={500} />
                        <div className="" />
                        <div className="">
                            <span>
                                <RiPlayFill size={30} />
                            </span>
                        </div>
                    </figure>
                </div>
            </section>
        </>
    );
};