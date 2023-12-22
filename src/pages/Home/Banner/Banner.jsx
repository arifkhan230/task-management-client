import { Link } from "react-router-dom";
import Container from "../../../Components/Container/Container";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Banner = () => {

    useEffect(() => {
        AOS.init()
    }, [])


    return (
        <div>
            <Container>
                <div className="hero bg-base-100">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src="https://i.ibb.co/3kwpD8p/12281499-4894122.jpg" data-aos="fade-left" data-aos-duration="2000"  className="flex-1 h-[500px]" />
                        <div className="flex-1" data-aos="fade-right" data-aos-duration="2000">
                            <h1 className="text-5xl font-bold">Tasks Made Simple, Success Made Achievable</h1>
                            <p className="py-6">Explore a task management revolution at SCC Technovision Inc.. Seize control, set goals effortlessly, and conquer your to-do list. Our platform enhances focus, fosters collaboration, and elevates productivity. Join us at SCC Technovision Inc. where every task counts.</p>
                            <Link to="/login">
                                <button className="btn text-white bg-[#2eca7f] hover:bg-[#6610f2]">Let’s Explore</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Banner;