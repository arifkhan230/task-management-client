import useAuth from "../../../Hooks/useAuth";


const Profile = () => {
    const {user} = useAuth()
    return (
        <div className="flex justify-center items-center h-[80vh]">
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img className="w-full h-[200px] object-cover" src={user?.photoURL}alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{user?.displayName}</h2>
                    <p>Email: {user?.email}</p>
                    <p>UserId: {user?.uid}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default Profile;