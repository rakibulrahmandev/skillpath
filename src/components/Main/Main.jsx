import Benefits from "../Benefits/Benefits";
import Courses from "../Courses/Courses";
import Faq from "../Faq/Faq";
import Home from "../Home/Home";
import Testimonials from "../Testimonials/Testimonials";
import Footer from "../Footer/Footer";

export default function Main() {
    return (
        <>
            <Home />
            <Benefits />
            <Courses />
            <Testimonials />
            <Faq />
            <Footer />
        </>
    );
};