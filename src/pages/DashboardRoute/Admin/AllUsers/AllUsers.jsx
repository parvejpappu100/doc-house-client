import React from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from 'react-query';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const AllUsers = () => {

    const [axiosSecure] = useAxiosSecure();

    const { data: users = [], refetch } = useQuery(["allUsers"], async () => {
        const res = await axiosSecure.get("/allUsers")
        return res.data;
    });

    console.log(users);

    const handleMakeAdmin = (user) => {
        const updatedRole = { role: user?.role == "admin" ? "user" : "admin" };
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, do it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.put(`/users/${user._id}`, updatedRole)
                    .then(data => {
                        if (data.data.modifiedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Success!',
                                `${user.name} is Admin Now `,
                                'success'
                            )
                        }
                    })
            }
        })
    };

    const handleDeleteUser = (user) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, do it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${user._id}`)
                    .then(data => {
                        if (data.data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Success!',
                                `Deleted Successful `,
                                'success'
                            )
                        }
                    })
            }
        })

    };

    return (
        <div className='max-w-[1140px] mx-auto px-4'>
            <h3 className='text-4xl font-semibold'>All Users : {users.length}</h3>
            <div className="overflow-x-auto w-full  mt-5">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className='bg-[#125d51]  text-xl'> # </th>
                            <th className='bg-[#125d51] text-white  text-xl'>Image </th>
                            <th className='bg-[#125d51] text-white  text-xl'>Name</th>
                            <th className='bg-[#125d51] text-white  text-xl'>Email</th>
                            <th className='bg-[#125d51] text-white  text-xl'>Role</th>
                            <th className='bg-[#125d51] text-white  text-xl'>Make</th>
                            <th className='bg-[#125d51] text-white  text-xl'>Action</th>
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
                                    <h4 className=' font-semibold'>{user.role == "admin" ? "Admin" : "User"}</h4>
                                </td>
                                <td>
                                    <button onClick={() => handleMakeAdmin(user)} className='bg-[#07332F] w-[120px] h-[32px] text-white font-semibold px-3 py-1 rounded'>
                                        {user?.role == "admin" ? "Make User" : "Make Admin"}
                                    </button>
                                </td>
                                <td>
                                    <button onClick={() => handleDeleteUser(user)} className="btn bg-red-700 duration-500 text-white hover:bg-red-900 border-none h-10 w-10 btn-xs">
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