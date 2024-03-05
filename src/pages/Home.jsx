import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { FaEdit, FaRegListAlt } from 'react-icons/fa';

const Home = () => {
    const [users, setUsers] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [query, setQuery] = useState('');
    const [search, setSearch] = useState('');

    useEffect(() => {
        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer a18a3e34a7760680134b35611cffb8f9ea2ae69f42033b753307257bd9951af0`
            }
        }
        const handleFetchData = async () => {
            let result = null;
            if (!query) {
                result = await axios.get('https://gorest.co.in/public/v1/users?per_page=20', config);
            } else {
                result = await axios.get(`https://gorest.co.in/public/v1/users?name=${search}&per_page=20`, config)
            }

            setUsers(result.data);
            setIsLoaded(true);
        }
        handleFetchData();
    }, [query, search]);

    return (
        <>
        <div className="m-5">
            <h1 className="text-xl font-bold mb-4">Users</h1>
            <div className="flex mb-5">
            <input
                type="text"
                value={query}
                className="flex-1 px-3 py-2 placeholder-gray-500 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Type user name ..."
            />
            <button
                type="button"
                onClick={() => setSearch(query)}
                className="ml-4 py-2 px-4 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                Search
            </button>
            </div>

            {isLoaded ? (
            <table className="w-full border-collapse">
                <thead>
                <tr className="bg-gray-200">
                    <th className="px-4 py-2">ID</th>
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Email</th>
                    <th className="px-4 py-2">Gender</th>
                    <th className="px-4 py-2">Status</th>
                    <th className="px-4 py-2">Options</th>
                </tr>
                </thead>
                <tbody>
                {users.data.map((item) => (
                    <tr key={item.id} className="border-b">
                    <td className="px-4 py-2">{item.id}</td>
                    <td className="px-4 py-2">{item.name}</td>
                    <td className="px-4 py-2">{item.email}</td>
                    <td className="px-4 py-2 text-center">{item.gender}</td>
                    <td className="px-4 py-2 text-center">{item.status}</td>
                    <td className="px-4 py-2 text-center">
                        <Link to={`/users/${item.id}/posts`}>
                            <button className="bg-purple-500 text-white p-2 mr-1 rounded-md">
                                <FaRegListAlt />
                            </button>
                        </Link>
                        <Link to={`/users/${item.id}`}>
                            <button className="bg-yellow-500 text-white p-2 ml-1 rounded-md">
                                <FaEdit />
                            </button>
                        </Link>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
            ) : (
            <p className="text-bold">Loading ...</p>
            )}
        </div>
        </>
    )
}

export default Home