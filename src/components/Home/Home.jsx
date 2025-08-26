import { RiPlayFill } from "@remixicon/react";
import { heroLogos } from "../../constants/data";
import Marquee from "react-fast-marquee";

export default function Home() {
    return (
        <>
            <section>
                <div className="container">
                    <div className="mt-[50px] md:mt-20 text-center">
                        <div className="relative max-w-max mx-auto pt-8 pl-8">
                            <span className="absolute top-0 left-0">
                                <img src="/image/shape-1.png" alt="title shape" width={39} height={43} />
                            </span>
                            <div className="flex items-center bg-white-99 border border-white-95 rounded-lg p-3.5 justify-center gap-2.5 max-w-max mx-auto flex-wrap text-center">
                                <span>
                                    <img src="/image/shape-2.png" alt="title shape" width={48} height={48} />
                                </span>
                                <h1 className="text-2xl md:text-4xl"><span className="text-orange-50">Unlock</span> Your Creative Potential</h1>
                            </div>
                        </div>
                        <p className="text-2xl font-medium mt-4 md:text-[28px]">with Online Design and Development Courses.</p>
                        <p>Learn from Industry Experts and Enhance Your Skills.</p>
                        <div className="flex items-center justify-center gap-3 mt-12 flex-wrap">
                            <button className="primary-btn max-sm:w-[80%]">Explore Courses</button>
                            <button className="secondary-btn max-sm:w-[80%]">View Pricing</button>
                        </div>
                        <div className="mt-8 lg:mt-[100px] relative overflow-hidden">
                            <Marquee pauseOnHover={true}>
                                {heroLogos.map((logo) => (
                                    <div className="px-14 py-5" key={logo?.id}>
                                        <img src={logo?.item} alt="logo" width={logo?.width} height={28} />
                                    </div>
                                ))}
                            </Marquee>
                            <div className="absolute top-0 left-0 bg-gradient-to-r from-white-97 via-white-97/80 to-transparent w-24 h-full z-10 pointer-events-none" />
                            <div className="absolute top-0 right-0 bg-gradient-to-l from-white-97 via-white-97/80 to-transparent w-24 h-full z-10 pointer-events-none" />
                        </div>
                    </div>
                    <figure className="relative rounded-xl overflow-hidden mt-10 md:mt-14 lg:mt-[50px] max-w-[920px] w-full h-[500px] mx-auto">
                        <img src="/image/hero-banner.png" alt="home banner" width={940} height={500} className="w-full h-full object-cover" />
                        <div className="absolute  inset-0 bg-black/20 z-10" />
                        <div className="absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
                            <span className="flex bg-white w-16 h-16 items-center justify-center rounded-full play-btn">
                                <RiPlayFill size={30} />
                            </span>
                        </div>
                    </figure>
                </div>
            </section>
        </>
    );
};