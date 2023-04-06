import React from 'react'

//user
async function getData(param:string){
  const res = await fetch(`https://api.github.com/users/${param}`)
  return res.json()
}

//repository
async function getRepos(param:string){
  const res = await fetch(`https://api.github.com/users/${param}/repos`)
  await new Promise(r=>setTimeout(r,2000))
  return res.json()
}

//followers
async function getFollowers(param: string){
  const res = await fetch(`https://api.github.com/users/${param}/followers`)
  return res.json()
}

//following
async function getFollowings(param: string){
  const res = await fetch(`https://api.github.com/users/${param}/following`)
  return res.json() 
}

export default async function Detail({params}:{params:{slug:string}}) {
  const datauser = await getData(params.slug);
  const datarepo = await getRepos(params.slug);
  const datafollowers = await getFollowers(params.slug);
  const datafollowing = await getFollowings(params.slug);

  const [user,repos,followers,followings] = await Promise.all([datauser,datarepo,datafollowers,datafollowing])
  
  return (
    <div>
       <p> Detail User : {params.slug}</p>
       <div>
        {JSON.stringify(user)}
       </div>
       <br />
       <p>List Repository :</p>
       <div>
        {JSON.stringify(repos)}
       </div>
       <br />
       <p>Followers :</p>
       <div>
        {JSON.stringify(followers)}
       </div>
       <br />
       <p>Following</p>
       <div>
        {JSON.stringify(followings)}
       </div>
    </div>
  )
}
