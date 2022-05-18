import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../firebase.init';
import Loading from './Loading';
import SingleTask from './SingleTask';

const MyTask = () => {
    const [user, loading] = useAuthState(auth)
    const { data, isLoading, refetch } = useQuery(['tasks', user], async () => {
        try {
            return await axios.get(`https://shielded-atoll-84288.herokuapp.com/my-task?email=${user.email}`)
        }
        catch (err) {
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
    })
    if (loading || isLoading) {
        return <Loading></Loading>
    }
    return (
        <div style={{ minHeight: "500px" }} className="container">
            <h1 className="text-center">Your Have Currently {data?.data?.length} Tasks</h1>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
                {
                    data?.data?.map((task, index) => <SingleTask
                        key={task._id}
                        task={task}
                        no={index + 1}
                        refetch={refetch}
                    ></SingleTask>)
                }
            </div>
        </div>
    );
};

export default MyTask;