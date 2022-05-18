import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../firebase.init';
import Loading from './Loading';

const AddTask = () => {
    const [user, loading] = useAuthState(auth)
    const handleTaskSubmit = async (e) => {
        e.preventDefault()
        const task = {
            name: e.target.task.value,
            email: user?.email,
            description: e.target.description.value,
            complete: "Not Completed",
        }
        try {
            const { data } = await axios.post('https://shielded-atoll-84288.herokuapp.com/add-task', task)
            if (data.acknowledged) {
                toast.success('Task added successfully', {
                    position: "top-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
            }
            else {
                toast.error('Something went wrong, Please try again', {
                    position: "top-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
            }
        }
        catch (e) {
            toast.error('Something went wrong, Please try again',
                {
                    position: "top-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
        }
        e.target.reset()
    }
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div style={{ minHeight: "500px" }} className="d-flex justify-content-center align-items-center">
            <div className="w-75">
                <h1 className="text-center">Add a Task</h1>
                <form onSubmit={handleTaskSubmit}>
                    <div className="form-group">
                        <label htmlFor="taskname">Task Name</label>
                        <input type="text" className="form-control" id="taskname" placeholder="Task Name" name='task' required />
                    </div>
                    <div className="form-group my-3">
                        <label htmlFor="description">Task Description</label>
                        <textarea type="text" className="form-control" id="description" placeholder="Task Description" name='description' required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary d-block mx-auto">Add Task</button>
                </form>
            </div>
        </div>
    );
};

export default AddTask;