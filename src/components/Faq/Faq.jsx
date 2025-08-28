import { RiAddLine } from "@remixicon/react";
import { faqItems } from "../../constants/data";
import Title from "../Title/Title";

export default function Faq() {
    return (
        <>
            <section className="section pb-[90px] lg:mb-[160px]">
                <div className="container">
                    <div>
                        <Title title='Frequently Asked Questions' text='Still you have any questions? Contact our Team via support@skillbridge.com' link='See All FAQ’s' />
                        <div className="">
                            {faqItems.map((item, idx) => (
                                <div key={idx} className="">
                                    <div className="">
                                        <h4 className="">{item?.title}</h4>
                                        <button className="">
                                            <RiAddLine size={30} />
                                        </button>
                                    </div>
                                    <div className="">
                                        <p>{item?.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};