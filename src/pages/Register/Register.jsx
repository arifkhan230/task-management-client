import { Link, useNavigate } from "react-router-dom";
import registerImage from "../../assets/images/loginImage.jpg"
import { FaLock, FaUserCircle } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";
// import { Helmet } from "react-helmet-async";
import Container from "../../Components/Container/Container";
import { imageUpload } from "../../Components/api/utils";


const Register = () => {

    const { createUser } = useAuth();
    const navigate = useNavigate()

    const handleRegister = async (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        const image = form.image.files[0]

        const uploadedImage = await imageUpload(image)
        console.log(uploadedImage);



        console.log({ name, email, password, image })


        // validation for email and password
        if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
            toast.error('Please provide an valid email')
            return;
        }
        if (!/^(?=.*[A-Z])(?=.*[!@#$%^&*])(.{6,})$/.test(password)) {
            toast.error('Your password should have at least 6 character, one uppercase letter, one special character')
            return;
        }
        if (password !== confirmPassword) {
            toast.error('Password not matched')
            return;
        }

        // creating user using email password
        createUser(email, password)
            .then(result => {
                console.log(result.user)
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: uploadedImage?.data?.display_url,
                })
                    .then(() => {
                        toast.success('successfully registered')
                        navigate('/dashboard/profile')
                    })
                    .catch(error => {
                        console.log(error)
                        toast.error(error.message)
                    })
            })
            .catch(err => {
                console.log(err.message)
                toast.error(err.message)
            })
    }

    return (
        <Container>
            {/* <Helmet>
                <title>NexGen Inventory || Register</title>
            </Helmet> */}
            <div className="flex justify-center items-center mt-20 px-4">
                {/* image div */}
                {/* <div className="hidden md:flex flex-1">
                    <img className="h-[600px] w-full" src={registerImage} alt="" />
                </div> */}
                {/* form div */}
                <div className="w-full md:w-3/4 lg:w-1/2 border px-8 py-10 bg-cover  bg-gray-200 rounded">
                    <h2 className="text-3xl text-center font-bold mb-6">Register Now!!</h2>
                    <form onSubmit={handleRegister}>
                        {/* name */}
                        <div className='relative mb-6'>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your name"
                                className="input input-bordered bg-white w-full placeholder:text-black"
                                id="name" required />
                            <span
                                className='absolute right-6 top-3 text-2xl'>
                                <FaUserCircle></FaUserCircle>
                            </span>
                        </div>
                        {/* email */}
                        <div className='relative'>
                            <input
                                type="email"
                                name="email"
                                placeholder="Your email"
                                className="input input-bordered bg-white w-full placeholder:text-black" id="email"
                                required />
                            <span
                                className='absolute right-6 top-3 text-2xl'>
                                <HiMail></HiMail>
                            </span>
                        </div>
                        {/* password */}
                        <div className='relative mt-6'>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="input input-bordered bg-white  w-full placeholder:text-black" id="password"
                                required />
                            <span
                                className='absolute right-6 top-3 text-2xl'>
                                <FaLock></FaLock>
                            </span>
                        </div>
                        {/* confirm password */}
                        <div className='relative mt-6'>
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                className="input input-bordered bg-white  w-full placeholder:text-black" id="confirmPassword"
                                required />
                            <span
                                className='absolute right-6 top-3 text-2xl'>
                                <FaLock></FaLock>
                            </span>
                        </div>
                        {/* photo */}
                        <div className='mt-6'>
                            <input
                                type="file"
                                name="image"
                                className="file-input w-full max-w-xs"
                                id="photo"
                                required />
                        </div>

                        <div className='mt-6'>
                            <button className='btn w-full text-white  bg-[#2eca7f] hover:bg-[#6610f2] ' type="submit">Register</button>
                        </div>
                    </form>
                    <p
                        className='mt-4 text-center font-medium'>
                        Already have an account? Please <Link to="/login" className='text-blue-800 underline'>Login</Link> </p>
                </div>
            </div>
        </Container>

    );
};

export default Register;