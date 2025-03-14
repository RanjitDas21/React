import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router'


function Github() {
    // const data = useLoaderData()
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/RanjitDas21')
        .then((Response) => Response.json())
        .then((data) => {
            console.log(data);
            setData(data)
        })
    })

    return (
        <div className='bg-gray-600 m-4 p-4 text-center text-3xl text-white'>Github followers: {data.followers}
        <img src={data.avatar_url} alt='Git picture' width={200} />
        </div>
    )
}

export default Github

// export const githubInfoLoader = async () => {
//     const response = await fetch('https://api.github.com/users/RanjitDas21')
//     return response.json()
// }
