'use client'
import React, { useContext, useEffect, useState } from 'react';
import Header from '@/components/header&footer/Header';
import { dataContext } from '@/context/Context';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { FiEdit2, FiLogOut, FiSave, FiX } from 'react-icons/fi';

export default function ProfilePage() {
    const { email, setEmail, setLoading } = useContext(dataContext);
    const [user, setUser] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const router = useRouter();

    async function getUser(e) {
        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/getuser`, { email: e });
            setUser(res.data);
        } catch (err) {
            console.error('Error fetching user:', err);
        }
    }

    async function updateProfile() {
        try {
            await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/updateuser`, user);
            alert('Profile updated successfully ✅');
            setEditMode(false);
        } catch (err) {
            console.error('Error updating profile:', err);
        }
    }

    function logout() {
        localStorage.removeItem('u');
        setEmail(null);
        router.push('/auth/login');
    }

    useEffect(() => {
        if (email) {
        getUser(email);
        setLoading(false);
        } 
      
    }, [email]);

    if (!user) {
        return (
            <div className="w-full h-screen flex items-center justify-center text-gray-500">
                Loading profile...
            </div>
        );
    }

    return (
        <div className="w-full min-h-screen bg-gray-100">
            <Header />

            <div className="max-w-4xl mx-auto px-4 md:px-10 py-10 mt-16">
                <div className="bg-white shadow-xl rounded-lg p-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">My Profile</h2>

                    <div className="flex flex-col gap-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="text-sm text-gray-500 mb-1 block">Full Name</label>
                                <input
                                    type="text"
                                    value={user?.username }
                                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                                    disabled={!editMode}
                                    className={`w-full border rounded-md px-3 py-2 ${editMode
                                            ? 'border-blue-400 focus:border-blue-500'
                                            : 'border-gray-200 bg-gray-100 cursor-not-allowed'
                                        }`}
                                />
                            </div>

                            <div>
                                <label className="text-sm text-gray-500 mb-1 block">Email</label>
                                <input
                                    type="email"
                                    value={user?.email || ''}
                                    disabled
                                    className="w-full border rounded-md px-3 py-2 bg-gray-100 cursor-not-allowed"
                                />
                            </div>

                            <div>
                                <label className="text-sm text-gray-500 mb-1 block">Phone</label>
                                <input
                                    type="text"
                                    value={user?.phone || ''}
                                    onChange={(e) => setUser({ ...user, phone: e.target.value })}
                                    disabled={!editMode}
                                    className={`w-full border rounded-md px-3 py-2 ${editMode
                                            ? 'border-blue-400 focus:border-blue-500'
                                            : 'border-gray-200 bg-gray-100 cursor-not-allowed'
                                        }`}
                                />
                            </div>

                            <div>
                                <label className="text-sm text-gray-500 mb-1 block">Address</label>
                                <input
                                    type="text"
                                    value={user?.address || ''}
                                    onChange={(e) => setUser({ ...user, address: e.target.value })}
                                    disabled={!editMode}
                                    className={`w-full border rounded-md px-3 py-2 ${editMode
                                            ? 'border-blue-400 focus:border-blue-500'
                                            : 'border-gray-200 bg-gray-100 cursor-not-allowed'
                                        }`}
                                />
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-3 mt-6">
                            {editMode ? (
                                <>
                                    <button
                                        onClick={updateProfile}
                                        className="flex items-center gap-1 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium transition"
                                    >
                                        <FiSave /> Save
                                    </button>
                                    <button
                                        onClick={() => setEditMode(false)}
                                        className="flex items-center gap-1 bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-md text-sm font-medium transition"
                                    >
                                        <FiX /> Cancel
                                    </button>
                                </>
                            ) : (
                                <button
                                    onClick={() => setEditMode(true)}
                                    className="flex items-center gap-1 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium transition"
                                >
                                    <FiEdit2 /> Edit Profile
                                </button>
                            )}

                            <button
                                onClick={logout}
                                className="flex items-center gap-1 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium transition"
                            >
                                <FiLogOut /> Logout
                            </button>
                        </div>
                    </div>
                </div>

                <div className="bg-white shadow-md rounded-lg mt-10 p-6">
                    <h3 className="text-lg font-semibold mb-4 text-gray-800">Account Overview</h3>
                    <ul className="text-gray-600 space-y-2 text-sm md:text-base">
                        <li>🛍️ Total Orders: {user?.orders?.length || 0}</li>
                        <li>💳 Preferred Payment: {user?.paymentMethod || 'Not Set'}</li>
                        <li>🚚 Default Address: {user?.address || 'No Address Saved'}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
