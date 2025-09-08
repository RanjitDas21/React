import React, {useEffect, useState} from 'react';
import service from '../appwrite/configuration.js';
import Container from '../components/container/Container.jsx';
import PostCard from '../components/PostCard.jsx';

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        service.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
  
    if (posts.length === 0) {
        return (
            <div className="flex-grow max-w-7xl mx-auto px-6 py-12">
                <Container>
                            <h2 className="text-3xl font-semibold text-gray-800 py-6">Welcome 👋</h2>
                            <p className="text-2xl text-gray-600">Login to reads post</p>
                </Container>
            </div>
        )
    }
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home
