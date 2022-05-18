import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';

const SingleTask = ({ task, no, refetch }) => {
    const { _id, complete, description, name } = task
    const handleComplete = async (id) => {
        try {
            const { data } = await axios.put(`https://shielded-atoll-84288.herokuapp.com/task-done?id=${id}`)
            if (data.acknowledged) {
                toast.success('Changed task status to complete successfully', {
                    position: "top-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
                refetch()
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
        catch (err) {
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
    const handleDelete = async (id) => {
        try {
            const { data } = await axios.delete(`https://shielded-atoll-84288.herokuapp.com/delete-task?id=${id}`)
            if (data.acknowledged) {
                toast.success('Deleted Task successfully', {
                    position: "top-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
                refetch()
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
        catch (err) {
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
    return (
        <div className="col">
            <div className="card h-100">
                <div className="card-body d-flex flex-column justify-content-between">
                    <div>
                        <div className="d-flex justify-content-center">
                            <span className="text-center bg-success p-2 rounded-circle mx-auto">{no}</span>
                        </div>
                        <div>
                            <h5 className="card-title fw-bolder">Task : {name}</h5>
                        </div>
                        <div>
                            <h4 className='text-center'>Task Description</h4>
                            <p className="card-text text-center">{description}</p>
                        </div>
                        <h5 className={`card-text ${complete === 'Not Completed' ? 'text-danger' : 'text-success'}`}>Status : {complete}</h5>
                    </div>
                    <div className="d-flex justify-content-between">
                        <button className="btn btn-success" onClick={() => handleComplete(_id)}>Set as Complete</button>
                        <button className="btn btn-danger" onClick={() => handleDelete(_id)}>Delete Task</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleTask;