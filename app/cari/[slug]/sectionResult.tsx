import React from 'react'
import useSWR from 'swr'
import Image from 'next/image'
const fetcher = (url: string) => fetch(url).then(res => res.json())

interface Props {
    query: string;
}

export default function SectionResult({ query }: Props) {
    const {data , error } = useSWR(`https://api.github.com/search/users?q=${query}`, fetcher)
    var loading = !data && !error

    return (
       <div>
        <div>
        {data && data.items && data.items.length > 0 ? (
            <div>{data.items[0].login} ; {data.items[0].id}

<div className="card mb-3" style={{ maxWidth: 540 }}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={(data.items[0].avatar_url)} width={100} height={100} className="img-fluid rounded-start" alt="" />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Profil Data</h5>
        <p className="card-text">
          
        </p>
        <p className="card-text">
          <small className="text-body-secondary">Last updated 3 mins ago</small>
        </p>
      </div>
    </div>
  </div>
</div>

            </div>
        ) : (
            <div>Loading...</div>
        )}

                {JSON.stringify(data)}
            </div>
        </div>
    )
}
