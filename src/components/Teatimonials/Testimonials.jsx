import { RiArrowLeftLine, RiArrowRightLine } from "@remixicon/react";
import { testimonialsItems } from "../../constants/data";
import Title from "../Title/Title";

export default function Testimonials() {
    return (
        <>
            <section className="section">
                <div className="container">
                    <Title title='Our Testimonials' text='Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.' link='View All' />
                    <div className="">
                        {testimonialsItems.map((item, idx) => (
                            <div key={idx} className="">
                                <p>{item?.text}</p>
                                <div>
                                    <div>
                                        <img src={item?.img} alt={item?.author} width={50} height={50} />
                                    </div>
                                    <p>{item?.author}</p>
                                </div>
                                <button className="secondary-btn">Read Full Story</button>
                            </div>
                        ))}
                    </div>
                    <div className="">
                        <button className="">
                            <RiArrowLeftLine size={30} />
                        </button>
                        <button>
                            <RiArrowRightLine size={30} />
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};