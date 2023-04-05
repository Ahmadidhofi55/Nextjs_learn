"use client"
import React, { ReactNode, use } from "react"
//import boostarpt
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import Link from "next/link"
import { useRouter } from "next/navigation"

type LayoutProps = {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
    
    const router =useRouter()
    const onClickUrl=(url:string)=>{
        router.push(url)
    }

  return (
    <>
      <html lang="en">
      </html>
      <head></head>
      <body>
        <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/dashboard-app">Dashboard</Link></li>
            <li><Link href="/settings" >Settings</Link></li>
            <li><Link href="/cari">Cari</Link></li>
            <li style={{ backgroundColor:"#000",color:"#fff",padding:"5px",cursor:"pointer" }} onClick={()=>onClickUrl('/settings')}>Settings</li>
        </ul>
        {children}
      </body>
    </>
  )
}
