"use client"
import 'bootstrap/dist/css/bootstrap.css'
import Image from 'next/image'
import React, { useState } from 'react'
import SectionResult from './[slug]/sectionResult';

export default function Page() {

     const [query, setquery] = useState('')

    const onSearch = (e: any) => {
        e.preventDefault()
        const inputQuery = e.target[0].value;
        setquery(inputQuery)
    };
    return (
        <div>
            <p>Halaman Untuk Melihat Pengunjung Github</p>
            <form onSubmit={onSearch}>
                <input placeholder='Masukkan Username Github yang ingin anda cari!' />
                <button>Cari</button>
            </form>
            
            {query && <SectionResult query={query} />}
        </div>
    )
}
