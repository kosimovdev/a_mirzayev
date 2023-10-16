"use client"
import React from 'react';
import Image from "next/image";
import logo from "../../public/images/logo.svg";
import Link from "next/link";
import Blog from "@/app/Blog";
import Courses from "@/app/Courses";
import Lessons from "@/app/Lessons";
import Footer from "@/app/Footer";

const Page = () => {
    return (
        <>
            <header className='bg-[url(../../public/images/header_bg_img.jpg)] w-full h-screen bg-no-repeat bg-cover'>
                <div className='container'>
                    <div className="logo pt-10">
                        <Image src={logo} alt='logo'/>
                    </div>
                     <nav className='mt-[145px]'>
                         <h1 className='text-[45px]  font-bold text-white'>Abdukarim Mirzayev <br/>
                             bilan <span className='text-[#00E689]'>storytelling</span> kursi...
                         </h1>
                         <p className='text-[16px] font-bold leading-[24px] mt-5 text-white'>
                             Ushbu kurs yordamida jozibali gapirish, sahnada va kamera <br/>
                             qarshisida hayajonlanmaslik, vizual kompozitsiya va <br/>
                             ovozlashtirish sirlarini bilib olasiz.
                         </p>
                         <Link className='flex items-center py-[14px] px-[22px] bg-[#FAA40C] text-black w-[207px] mt-10 hover:bg-transparent hover:border hover:border-[#FAA40] hover:text-white duration-200' href='/'>Guruhga qo’shilish
                             <svg className='ml-1' xmlns="http://www.w3.org/2000/svg" width="19" height="15" viewBox="0 0 19 15" fill="none">
                                 <g clipPath path="url(#clip0_12_26)">
                                     <path d="M3.95825 7.5H15.0416" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                     <path d="M10.2917 11.25L15.0417 7.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                     <path d="M10.2917 3.75L15.0417 7.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                 </g>
                                 <defs>
                                     <clipPath id="clip0_12_26">
                                         <rect width="19" height="15" fill="white"/>
                                     </clipPath>
                                 </defs>
                             </svg>
                         </Link>
                     </nav>
                </div>
            </header>
             <Blog/>
            <Courses/>
            <Lessons/>
            <Footer/>
        </>
    );
};

export default Page;