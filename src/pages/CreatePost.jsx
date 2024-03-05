import axios from 'axios';
import { useState } from 'react'
import Logo from '../resources/new_post.svg';

const CreatePost = () => {
    const [id, setId] = useState(null)
    const [formData, setFormData] = useState({
        title: '',
        body: '',
    })
    const { title, body } = formData;

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
            await axios.post(`https://gorest.co.in/public/v1/users/${id}/posts`, formData, config);

            window.alert('Post Created Successfully');
            window.location.href = '/'
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <>
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                </div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <h3 className="text-2xl font-bold mb-4">Create Post</h3>
                    <div className="mb-4">
                        <img src={Logo} alt="New Post" className="w-1/2 h-1/2 mx-auto" />
                    </div>
                    <form onSubmit={e => onSubmit(e)}>
                        <div className="mb-2">
                            <input
                            type="number"
                            className="border-2 border-gray-300 p-2 w-full rounded-md"
                            name="userID"
                            placeholder="User ID"
                            value={id}
                            onChange={e => setId(e.target.value)}
                            required
                            />
                        </div>
                        <div className="mb-2">
                            <input
                            type="text"
                            className="border-2 border-gray-300 p-2 w-full rounded-md"
                            name="title"
                            placeholder="Title"
                            value={title}
                            onChange={e => onChange(e)}
                            required
                            />
                        </div>
                        <div className="mb-2">
                            <textarea
                                className="border-2 border-gray-300 p-2 w-full rounded-md"
                                name="body"
                                placeholder="body"
                                value={body}
                                onChange={e => onChange(e)}
                                required
                                rows="8"
                                cols="50"
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-purple-500 text-white p-2 w-full rounded-md"
                        >
                            Create Post
                        </button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default CreatePost