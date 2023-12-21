import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import toast from "react-hot-toast";


const CreateTask = () => {

    const { user } = useAuth();
    const axiosPublic = useAxiosPublic()

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data)

        const task = {
            title: data.title,
            description: data.description,
            priority: data.priority,
            deadline: data.date,
            email: user?.email,
            name: user?.displayName
        }
        // console.log(task);

        axiosPublic.post('/task', task)
            .then(res => {
                console.log(res.data)
                toast.success("Task added successfully")
            })
            .catch(err => {
                console.log(err.message);
                toast.error(err.message)
            })
    };


    return (
        <div className="p-4 md:p-10">
            <h2 className="text-3xl text-center my-10 font-bold">Create Task</h2>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg text-[#9f99aa] font-semibold">
                                Title
                            </span>
                        </label>
                        <input
                            type="text"
                            placeholder="title"
                            name="title"
                            className="input input-bordered rounded-sm"
                            required
                            {...register("title")}
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg text-[#9f99aa] font-semibold">
                                Description
                            </span>
                        </label>
                        <textarea
                            className="p-3 border"
                            name="description"
                            placeholder="description"
                            required
                            {...register("description")}
                        ></textarea>
                    </div>
                    <div className="flex flex-wrap gap-5">
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text text-lg text-[#9f99aa] font-semibold">
                                    Priority
                                </span>
                            </label>
                            <select
                                className="input input-bordered rounded-sm"
                                name="priority"
                                defaultValue="low"
                                id="priority"
                                required
                                {...register("priority")}
                            >
                                <option value="Low">Low</option>
                                <option value="Moderate">Moderate</option>
                                <option value="Heigh">Heigh</option>
                            </select>
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text text-lg text-[#9f99aa] font-semibold">
                                    Deadline
                                </span>
                            </label>
                            <input
                                type="date"
                                placeholder="date"
                                name="date"
                                className="input input-bordered rounded-sm"
                                required
                                {...register("date")}
                            />
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button
                            type="submit"
                            className="btn bg-gradient-to-r from-[#4d516f]
             to-[#322535] font-semibold text-white border-none"
                        >
                            Create Task
                        </button>
                    </div>
                </form>
            </div>


        </div>
    );
};

export default CreateTask;