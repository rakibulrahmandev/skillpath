import { coursesSecItems } from "../../constants/data";
import Title from "../Title/Title";

export default function Courses() {
    return (
        <>
            <section className="section">
                <div className="container">
                    <Title title='Our Courses' text='Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.' link='View All' />
                    <div className="">
                        {coursesSecItems.map((item) => (
                            <div className="" key={item?.id}>
                                <div className="">
                                    <img src={item?.img} alt={item?.title} width={560} height={266} />
                                </div>
                                <div className="">
                                    <div className="">
                                        {item?.tags.map((tag, idx) => (
                                            <span className="" key={idx}>{tag?.tag}</span>
                                        ))}
                                        <p className="">{item?.instructor}</p>
                                    </div>
                                    <div className="">
                                        <h4 className="">{item?.title}</h4>
                                        <p>{item?.text}</p>
                                    </div>
                                    <button className="">Get it now</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};