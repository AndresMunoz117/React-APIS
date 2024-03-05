import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';
import { FaComment } from 'react-icons/fa';

const UsePost = () => {
    const { ids } = useParams();
    const [posts, setPosts] = useState(null);
    const [comments, setComments] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);
    const [isCommentsLoaded, setIsCommentsLoaded] = useState(false);

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
            result = await axios.get(`https://gorest.co.in/public/v1/users/${ids}/posts?per_page=30`, config)

            setPosts(result.data);
            setIsLoaded(true);
        }
        handleFetchData();
    }, []);

    const fetchComments = async (id) => {
        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer a18a3e34a7760680134b35611cffb8f9ea2ae69f42033b753307257bd9951af0`
            }
        }
        let result = null;
        result = await axios.get(`https://gorest.co.in/public/v1/posts/${id}/comments`, config)

        setComments((prevComments) => ({ ...prevComments, [id]: result.data }));
        setIsCommentsLoaded(true);
    }

    return (
        <>
        <div className="m-5">
            <h1 className="text-xl font-bold mb-4">Posts</h1>
            {isLoaded ? (
                <div className="w-3/4 mx-auto">
                    {posts.data.map((item) => (
                        <div key={item.id} className="w-full bg-gray-300 p-4 rounded-md my-6">
                            <h2 className="text-xl font-bold mb-2">{item.title}</h2>
                            <p className="mb-2">{item.body}</p>
                            <div>
                                <button onClick={() => fetchComments(item.id)} className="italic">Show Comments</button>
                                {isCommentsLoaded && comments[item.id] ? (
                                    <div>
                                        {comments[item.id].data.map((comment) => (
                                            <div key={comment.id} className="mt-4 bg-gray-200 p-2 rounded-md">
                                                <strong className="text-left">{comment.name}</strong>
                                                <p className="text-left">{comment.body}</p>
                                            </div>
                                        ))}
                                    </div>
                                ) : ''}
                                <div className="flex justify-content-end">
                                    <Link to={`/posts/${item.id}/comments/create`}>
                                        <button className="bg-red-500 text-white p-2 mt-4 rounded-md">
                                            <FaComment />
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-bold">Loading ...</p>
            )}
        </div>
        </>
    )
}

export default UsePost