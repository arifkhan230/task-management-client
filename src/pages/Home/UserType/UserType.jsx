import { useEffect } from "react";
import Container from "../../../Components/Container/Container";
import AOS from 'aos';
import 'aos/dist/aos.css';

const UserType = () => {

    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <div className="my-20">
            <Container>
                <h2 className="text-3xl font-bold my-6 text-center">Users Type</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4" data-aos="fade-left" data-aos-duration="2000">
                    <div className="card rounded border-2">
                        <figure className="pt-6">
                            <img  src="https://www.freeiconspng.com/thumbs/bank-icon/bank-icon-5.png" alt="Shoes" className="rounded-xl h-[100px]" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Bankers</h2>
                            <p>Streamline financial tasks, meet deadlines with our task management solutions.</p> 
                        </div>
                    </div>
                    <div className="card rounded border-2">
                        <figure className="pt-6">
                            <img src="https://cdn-icons-png.flaticon.com/512/13/13706.png" alt="Shoes" className="rounded-xl h-[100px]" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Web Developers</h2>
                            <p>Boost growth, manage projects effectively, stay organized in your career.</p> 
                        </div>
                    </div>
                    <div className="card rounded border-2">
                        <figure className="pt-6">
                            <img src="https://cdn-icons-png.flaticon.com/512/90/90477.png" alt="Shoes" className="rounded-xl h-[100px]" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Teachers</h2>
                            <p>Efficiently plan lessons, manage assignments with teacher-focused tools.</p> 
                        </div>
                    </div>
                </div>
                {/* Benifited */}
                <h2 className="text-3xl font-bold my-6 text-center">Who will be Benefited</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4" data-aos="fade-right" data-aos-duration="2000">
                    <div className="card rounded border-2">
                        <figure className="pt-6">
                            <img  src="https://static.thenounproject.com/png/1971021-200.png" alt="Shoes" className="rounded-xl h-[100px]" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Students</h2>
                            <p>Optimize study routines, achieve academic success with student-friendly tools.</p> 
                        </div>
                    </div>
                    <div className="card rounded border-2">
                        <figure className="pt-6">
                            <img src="https://static.thenounproject.com/png/1266192-200.png" alt="Shoes" className="rounded-xl h-[100px]" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Freelancers</h2>
                            <p>Take control of projects, increase efficiency with tailored solutions.</p> 
                        </div>
                    </div>
                    <div className="card rounded border-2">
                        <figure className="pt-6">
                            <img src="https://cdn-icons-png.flaticon.com/512/1185/1185316.png" alt="Shoes" className="rounded-xl h-[100px]" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Teachers</h2>
                            <p>Efficiently plan lessons, manage assignments with teacher-focused tools.</p> 
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default UserType;