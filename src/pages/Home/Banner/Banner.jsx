import { Link } from "react-router-dom";
import Container from "../../../Components/Container/Container";


const Banner = () => {
    return (
        <div>
            <Container>
                <div className="hero bg-base-100">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src="https://i.ibb.co/3kwpD8p/12281499-4894122.jpg" className="flex-1 h-[500px]" />
                        <div className="flex-1">
                            <h1 className="text-5xl font-bold">Tasks Made Simple, Success Made Achievable</h1>
                            <p className="py-6">Explore a task management revolution at SCC Technovision Inc.. Seize control, set goals effortlessly, and conquer your to-do list. Our platform enhances focus, fosters collaboration, and elevates productivity. Join us at SCC Technovision Inc. where every task counts.</p>
                            <Link to="/login">
                                <button className="btn btn-primary">Get Started</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Banner;