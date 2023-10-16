import React from 'react';
import star from '@/../public/images/stars.svg'
import Image from "next/image";
const Courses = () => {
    return (
        <section id='courses' className='py-10'>
            <div className="container">
                <div className="box flex justify-between items-center gap-x-[100px] py-10">
                    <div className="left-box relative w-full">
                        <Image src={star} alt="stars"/>
                        <h1 className='text-[25px] font-extrabold absolute top-[35px] left-[50px]'>Kursning <br/>
                           <span className='text-[#00E689]'>davomiyligi 1 oy</span>
                        </h1>
                    </div>
                    <div className="center-box relative w-full">
                        <Image src={star} alt="stars"/>
                        <h1 className='text-[25px] font-extrabold absolute top-[35px] left-[50px]'>Kursda <br/>
                           <span className='text-[#00E689]'>darslar soni 8 ta</span>
                        </h1>
                    </div>
                    <div className="right-box relative w-full">
                        <Image src={star} alt="stars"/>
                        <h1 className='text-[25px] font-extrabold absolute top-[35px] left-[50px]'>Kursning <br/>
                           <span className='text-[#00E689]'>bahosi 1 mln.som</span>
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Courses;