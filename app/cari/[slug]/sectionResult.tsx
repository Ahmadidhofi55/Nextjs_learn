import React from 'react'
import useSWR from 'swr'

import Image from 'next/image'
import Error from '../../error';
import { OBJECT } from 'swr/_internal';
const fetcher = (url: string) => fetch(url).then(res => res.json())

interface Props {
  query: string;
}

export default function SectionResult({ query }: Props) {
  //user
  const { data, error } = useSWR(`https://api.github.com/search/users?q=${query}`, fetcher)
  //repository
  const { data: data2 } = useSWR(`https://api.github.com/users/${query}/repos`, fetcher)
  //followers
  const { data:data3 } = useSWR(`https://api.github.com/users/${query}/followers`,fetcher)
  //following
  const { data:data4 } = useSWR(`https://api.github.com/users/${query}/following`,fetcher)
  var loading = !data && !error
  
  // menjumlahkan data repository
  let repository = 0;
  if (data2){
    for (let i = 0; i < data2.length; i++) {
      repository += i;
    }
  }

  console.log(repository)
  // menjumlahkan data followers
  let followers  = 0;
  if (data3) {
    for (let i = 0; i < data3.length; i++) {
      followers  += i;
    }
  }
  
  //menjumlahkan data following
  let followings  = 0;
  if (data3) {
    for (let i = 0; i < data3.length; i++) {
      followings  += i;
    }
  }

  return (
    <div>
      <div>
        {data && data.items && data.items.length > 0 ? (
          <div>{data.items[0].login} : {data.items[0].id}

            <div className="card mb-3" style={{ maxWidth: 540 }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={(data.items[0].avatar_url)} width={100} height={100} className="img-fluid rounded-start" alt="" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Profil Data</h5>
                    <p className="card-text">
                      Username = {data.items[0].login}
                    </p>
                    <p className="card-text">
                      ID = {data.items[0].id}
                    </p>
                    <p className="card-text">
                      Followers = {followers}
                    </p>
                    <p className="card-text">
                      Following = {followings}
                    </p>
                    <p className="card-text">
                      Repositori = Developing
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
        <p>DATA USER</p>
        {JSON.stringify(data)}
        <br />
        <br />
        <p>DATA REPOSITORY</p>
        {JSON.stringify(data2)}
      </div>
    </div>
  )
}
