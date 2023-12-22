import { useEffect, useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAuth from "../../../Hooks/useAuth";


const AllTasks = () => {
    const {user} = useAuth()
    const axiosPublic= useAxiosPublic();

    const [tasks,setTasks] = useState([])

    useEffect(()=>{
        axiosPublic.get(`/tasks?email=${user.email}`)
        .then(res=>{
            console.log(res.data);
            setTasks(res.data)
        })
    },[axiosPublic,user.email])

    return (
        <div>
            <div className="flex gap-6 justify-between">
                <div className="border w-full min-h-[60vh] px-4">
                    <h2 className="text-3xl font-bold text-center my-6">TODO</h2>
                    <div className="flex flex-col gap-4">
                        {
                            tasks?.map(task=> <div key={task._id} className="card bg-gray-100 rounded ">
                            <div className="card-body">
                              <h2 className="card-title">{task?.title}</h2>
                              <p>Deadline: {task?.deadline}</p>
                             
                            </div>
                          </div>)
                        }
                    </div>
                </div>
                <div className="border w-full min-h-[60vh]">
                    <h2 className="text-3xl font-bold text-center my-6">On Going</h2>
                </div>
                <div className="border w-full min-h-[60vh]">
                    <h2 className="text-3xl font-bold text-center my-6">Completed</h2>
                </div>
            </div>
        </div>
    );
};

export default AllTasks;