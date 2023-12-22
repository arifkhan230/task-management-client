import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAuth from "../../../Hooks/useAuth";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const ManageTask = () => {

    const { user } = useAuth()
    console.log(user?.email);
    const axiosPublic = useAxiosPublic();
    console.log(user);

    const { data: tasks = [], refetch } = useQuery({
        queryKey: ['task', user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/tasks?email=${user.email}`)
            return res.data
        }
    })
    console.log(tasks);

    const handleDelete = (id)=>{
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You Want to Delete this product",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.delete(`/tasks/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            
                        }
                    })
            }
        });
    }

    return (
        <div>
            <h2 className="text-3xl font-bold my-10 text-center">Manage Your task</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {
                    tasks?.map((task, idx) => <div key={idx} className="card  bg-base-100 shadow rounded border">
                        <div className="card-body">
                            <h2 className="card-title">{task?.title}</h2>
                            <p className="text-sm">{task?.description}</p>
                            <p className="text-blue-600">Deadline: {task.deadline}</p>
                            <p>Priority: {task.priority}</p>
                            <div className="card-actions flex justify-between mt-6 ">
                                <button
                                onClick={()=>handleDelete(task._id)}
                                    className="btn btn-sm bg-red-500">
                                    <FaTrashAlt className="text-white"></FaTrashAlt>
                                </button>
                                <Link to={`/dashboard/update-task/${task._id}`}>
                                    <button
                                        className="btn btn-sm bg-[#2eca7f]">
                                        <FaEdit className="text-white 
                                            text-sm"></FaEdit>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageTask;