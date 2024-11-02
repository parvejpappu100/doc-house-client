import React from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from 'react-query';
import { FaTrashAlt } from 'react-icons/fa';

const AllUsers = () => {

    const [axiosSecure] = useAxiosSecure();

    const { data: users = [], refetch } = useQuery(["allUsers"], async () => {
        const res = await axiosSecure.get("/allUsers")
        return res.data;
    });

    console.log(users);

    return (
        <div className='max-w-[1140px] mx-auto px-4'>
            <h3 className='text-4xl font-semibold'>All Users : {users.length}</h3>
            <div className="overflow-x-auto w-full  mt-5">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className='bg-[#E6E6E6]  text-xl'> # </th>
                            <th className='bg-[#E6E6E6]  text-xl'>Image </th>
                            <th className='bg-[#E6E6E6]  text-xl'>Name</th>
                            <th className='bg-[#E6E6E6]  text-xl'>Email</th>
                            <th className='bg-[#E6E6E6]  text-xl'>Role</th>
                            <th className='bg-[#E6E6E6]  text-xl'>Make</th>
                            <th className='bg-[#E6E6E6]  text-xl'>Action</th>
                        </tr>
                    </thead>
                    <tbody className='bg-white'>
                        {
                            users?.map((user, index) => <tr
                                key={user._id}
                            >
                                <td>
                                    <h3 className='text-2xl font-bold'>{index + 1}</h3>
                                </td>
                                <td>
                                    <img className='rounded-3xl w-16 h-16' src={user?.image} alt="" />
                                </td>
                                <td>
                                    <h3 className=' font-semibold'>{user.name}</h3>
                                </td>
                                <td>
                                    <h4 className=' font-semibold'>{user.email}</h4>
                                </td>
                                <td>
                                    <h4 className=' font-semibold'>{user.role}</h4>
                                </td>
                                <td>
                                   <button className='bg-[#07332F] text-white font-semibold px-3 py-1 rounded'>Make Admin</button>
                                </td>
                                <td>
                                    <button className="btn bg-red-700 duration-500 text-white hover:text-black border-none h-10 w-10 btn-xs">
                                        <FaTrashAlt></FaTrashAlt>
                                    </button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;