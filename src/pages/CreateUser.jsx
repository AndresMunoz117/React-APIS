import axios from 'axios';
import { useState } from 'react'
import Logo from '../resources/new_user.svg';

const CreateUser = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        gender: '',
        status: '',
    })
    const { name, email, gender, status } = formData;

    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer a18a3e34a7760680134b35611cffb8f9ea2ae69f42033b753307257bd9951af0`
        }
    }

    const onChange = e => setFormData({ ...formData, [e.target.name] : e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        try {
            await axios.post(`https://gorest.co.in/public/v1/users`, formData, config);

            window.alert('Account Created Successfully');
            window.location.href = '/'
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <>
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                </div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <h3 className="text-2xl font-bold mb-4">Create User Account</h3>
                    <div className="mb-4">
                        <img src={Logo} alt="New User" className="w-1/2 h-1/2 mx-auto" />
                    </div>
                    <form onSubmit={e => onSubmit(e)}>
                        <div className="mb-2">
                            <input
                            type="text"
                            className="border-2 border-gray-300 p-2 w-full rounded-md"
                            name="name"
                            placeholder="Name"
                            value={name}
                            onChange={e => onChange(e)}
                            required
                            />
                        </div>
                        <div className="mb-2">
                            <input
                            type="email"
                            className="border-2 border-gray-300 p-2 w-full rounded-md"
                            name="email"
                            placeholder="Email"
                            value={email}
                            onChange={e => onChange(e)}
                            required
                            />
                        </div>
                        <div className="mb-2">
                            <select
                            className="border-2 border-gray-300 p-2 w-full rounded-md"
                            name="gender"
                            value={gender}
                            onChange={e => onChange(e)}
                            required
                            >
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <select
                            className="border-2 border-gray-300 p-2 w-full rounded-md"
                            name="status"
                            value={status}
                            onChange={e => onChange(e)}
                            required
                            >
                                <option value="">Select Status</option>
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                            </select>
                        </div>
                        <button
                            type="submit"
                            className="bg-cyan-500 text-white p-2 w-full rounded-md"
                        >
                            Create Account
                        </button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default CreateUser