import { RiArrowRightUpLine } from "@remixicon/react";
import { benefitItems } from "../../constants/data";
import Title from "../Title/Title";

export default function Benefits() {
    return (
        <>
            <section className="section">
                <div className="container">
                    <Title title='Benefits' text='Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.' link='View All' />
                    <div className="">
                        {benefitItems.map((item) => (
                            <div className="">
                                <div className="">
                                    <img src={item?.icon} alt={item?.title} width={64} height={64} />
                                </div>
                                <div className="">
                                    <h4>{item?.title}</h4>
                                    <p>{item?.text}</p>
                                </div>
                                <button>
                                    <RiArrowRightUpLine size={26} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
};