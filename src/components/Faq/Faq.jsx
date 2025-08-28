import { RiAddLine } from "@remixicon/react";
import { faqItems } from "../../constants/data";
import Title from "../Title/Title";

export default function Faq() {
    return (
        <>
            <section className="section pb-[90px] lg:mb-[160px]">
                <div className="container">
                    <div className="grid gap-10 p-5 lg:grid-cols-[0.7fr_1fr] items-start bg-white rounded-lg md:p-10">
                        <Title title='Frequently Asked Questions' text='Still you have any questions? Contact our Team via support@skillbridge.com' link='See All FAQ’s' />
                        <div className="border border-white-95 grid p-6">
                            {faqItems.map((item, idx) => (
                                <div key={idx} className="space-y-3.5">
                                    <div className="flex items-center justify-between gap-12 border-b border-b-white-95 pb-3 md:px-5">
                                        <h4 className="text-lg sm:text-xl">{item?.title}</h4>
                                        <button className="w-10 h-10 bg-orange-75 flex items-center justify-center aspect-square rounded-lg hover:bg-orange-75/80 transition-colors">
                                            <RiAddLine size={30} />
                                        </button>
                                    </div>
                                    <div className="max-h-0 overflow-y-hidden">
                                        <p className="px-5 pb-3 ">{item?.text}</p>
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