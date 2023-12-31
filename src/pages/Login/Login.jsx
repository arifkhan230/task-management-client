
import { FaLock } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import google from "../../assets/images/google.png"
import useAuth from "../../Hooks/useAuth";
// import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import Container from "../../Components/Container/Container";

const Login = () => {
    const { signIn, signInGoogle, signInGithub } = useAuth();
    const navigate = useNavigate()


    const handleSignIn = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log({ email, password })

        // signIn with email password
        signIn(email, password)
            .then(async (result) => {
                toast.success("Logged in successfully")
                console.log(result.user);
                navigate("/dashboard/create-task")
            })

            .catch(err => {
                console.log(err.message)
                toast.error(err.message)
            })
    }

    // sign in with google 
    const handleGoogleLogin = () => {
        signInGoogle()
            .then((result) => {
                console.log(result);
                toast.success("Logged in successfully")
                navigate("/dashboard/create-task")

            })
            .catch(err => {
                console.log(err.message)
                toast.error(err.message)
            })
    }

    const handleGithubLogin = () => {
        signInGithub()
            .then((result) => {
                console.log(result);
                toast.success("Logged in successfully")
                navigate("/dashboard/create-task")

            })
            .catch(err => {
                console.log(err.message)
                toast.error(err.message)
            })
    }

    return (
        <Container>
            {/* <Helmet>
                <title>NexGen Inventory || Login</title>
            </Helmet> */}
            <div className="flex justify-center mt-20 px-4 items-center ">
                {/* image div */}
                {/* <div className="hidden md:flex w-1/2">
                    <img className="h-[600px] w-full" src={loginImage} alt="" />
                </div> */}
                {/* form div */}
                <div className="w-full md:w-2/3 lg:w-1/2 border px-8 py-10 bg-contain  bg-gray-200 rounded">
                    <h2 className="text-3xl text-center font-bold mb-6">Login Now!!</h2>
                    <form onSubmit={handleSignIn}>

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
                        <div className='mt-6'>
                            <button
                                className='btn w-full text-white  hover:bg-[#6610f2] bg-[#2eca7f]' type="submit">Login</button>
                        </div>
                    </form>
                    <p
                        className='mt-4 text-center font-medium'>
                        Do not have an account? Please <Link to="/register" className='text-blue-800 underline'>Register</Link>
                    </p>
                    <div className="divider">OR</div>

                    <div className="flex flex-col md:flex-row justify-center gap-4 ">
                        <div onClick={handleGoogleLogin} className='flex  w-full md:w-1/2 items-center justify-center btn-outline py-2  rounded mt-6 cursor-pointer btn'>
                            <img className='w-6 h-6 ml-2' src={google} alt="" />
                            <p className='text-lg ml-4'>Login with google</p>
                        </div>
                        <div onClick={handleGithubLogin} className='flex w-full md:w-1/2 items-center justify-center btn-outline py-2  rounded mt-6 cursor-pointer btn'>
                            <img className='w-8 h-8 ml-2' src="https://pngimg.com/d/github_PNG58.png" alt="" />
                            <p className='text-lg ml-4'>Login with github</p>
                        </div>
                    </div>
                </div>


            </div>
        </Container>
    );
};

export default Login;