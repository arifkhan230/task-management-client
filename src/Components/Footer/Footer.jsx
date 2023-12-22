import { Link } from "react-router-dom";
import logo from "../../assets/images/SSS.png"
import { FaFacebook, FaInstagram } from "react-icons/fa";
import Container from "../Container/Container";


const Footer = () => {
    return (
        <div>
            <Container>
                <div className="">

                    <footer className="bg-base-100 dark:bg-gray-900">
                        <div className="lg:mx-auto w-full p-4 py-6 lg:py-8 lg:pl-0 pl-10">
                            <div className="md:flex w-full  ">
                                <div className="mb-6 md:mb-0 md:w-1/3 flex flex-col justify-center items-center">
                                    <img className="w-80 h-26 object-cover" src={logo} alt="" />
                                    <p>MoulviBazar,Shylhet</p>
                                </div>
                                <div className="grid md:w-2/3 grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2">
                                   
                                    <div>
                                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Follow Us On</h2>
                                        <a href="https://www.facebook.com/profile.php?id=100009023173348">
                                            <div className="flex items-center gap-2 my-4">
                                                <FaFacebook></FaFacebook>
                                                <p className="text-gray-500 dark:text-gray-400 font-medium">Facebook</p>
                                            </div>
                                        </a>
                                        <a href="https://www.instagram.com/thedevarif">
                                            <div className="flex items-center gap-2 my-4">
                                                <FaInstagram></FaInstagram>
                                                <p className="text-gray-500 dark:text-gray-400 font-medium">Instagram</p>
                                            </div>
                                        </a>

                                    </div>
                                    <div className="">
                                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Contract Info</h2>
                                        <p className="text-gray-500 dark:text-gray-400 font-medium mb-4">01764230122</p>
                                        <p className="text-gray-500 dark:text-gray-400 font-medium">ssc@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                            {/* <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" /> */}
                            <p className="text-center text-sm mt-8">Copyright © 2023 - All rights reserved By SCC Technovision Inc.</p>
                        </div>
                    </footer>

                </div>

            </Container>
        </div>
    );
};

export default Footer;