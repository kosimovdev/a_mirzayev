import React from 'react';
import Link from "next/link";

const Lessons = () => {
    return (
        <section className='py-16'>
            <div className="container">
            <div className="grid grid-cols-2   gap-5">
                <div className="card border-2 border-[rgba(250,164,12,0.50)] p-5 max-w-[510px] min-h-[255px]">
                    <span className='text-[20px] text-[#00E689] font-extrabold mb-[5px]'>— 01 dars</span>
                    <h1 className='text-[25px] font-extrabold mb-5'>Storytelling nima?</h1>
                    <p className='text-[20px] leading-[24px] font-normal'>— Ushbu darsda storytelling nima ekanligi haqida
                        gaplashamiz. Mavzuga umumiy kirish qilamiz.
                        Ritorika, qahramon, sayohat, sarguzasht kabi
                        asosiy tushunchalar haqida toxtalamiz.</p>
                </div>
                <div className="card border-2 border-[rgba(250,164,12,0.50)] p-5 max-w-[510px] min-h-[255px]">
                    <span className='text-[20px] text-[#00E689] font-extrabold mb-[5px]'>— 02 dars</span>
                    <h1 className='text-[25px] font-extrabold mb-5'>Kopirayterlik va hikoya jozibasi</h1>
                    <p className='text-[20px] leading-[24px] font-normal'>
                        — Qaysi mavzuda yozamiz?
                        Mavzu borasida bir toxtamga kelgandan keyingi
                        harakatlarimiz nimalardan iborat boladi?
                    </p>
                    <p className='text-[20px] leading-[24px] font-normal mt-5'>
                        — Ushbu darsda biz mavzuni tadqiq qilish,
                        malumot toplash, goyalar yaratish, yozuvlar va
                        fikrlarni tartibga solish kabi jarayonlarni qanday
                        amalga oshirish haqida gaplashamiz.
                    </p>
                </div>
                <div className="card border-2 border-[rgba(250,164,12,0.50)] p-5 max-w-[510px] min-h-[255px]">
                    <span className='text-[20px] text-[#00E689] font-extrabold mb-[5px]'>— 03 dars</span>
                    <h1 className='text-[25px] font-extrabold mb-5'>Mavzu topish va tadqiq qilish</h1>
                    <p className='text-[20px] leading-[24px] font-normal'>
                        — Tinglovchi va tomoshabinning qiziqishini
                        saqlab qolish uchun qanday usullardan
                        foydalanamiz?
                    </p>
                    <p className='text-[20px] leading-[24px] font-normal mt-5'>
                        — Tomoshabinlarning etiborini mavzuga jalb
                        qilish va uni doimo faol tarzda ushlab turish
                        uchun nima qilish zarur?
                    </p>
                    <p className='text-[20px] leading-[24px] font-normal mt-5'>
                        — Qanday qilib biz kutilmagan burilishlar, aql
                        o’yinlari, keskinlik va noaniqlik kabi vositalar bilan
                        ravon maʼlumot bera olamiz? Darsimizda matnni
                        qayta yozish, tuzatish, qisqartirish, sayqallash va
                        jozibali sarlavha qo’yish haqida so`z yuritamiz.
                    </p>
                </div>
                <div className="card border-2 border-[rgba(250,164,12,0.50)] p-5 max-w-[510px] min-h-[255px]">
                    <span className='text-[20px] text-[#00E689] font-extrabold mb-[5px]'>— 04 dars</span>
                    <h1 className='text-[25px] font-extrabold mb-5'>Nutq va gapirish usullari</h1>
                    <p className='text-[20px] leading-[24px] font-normal'>
                        — Bu darsda notiqlik sanati bilan qisqacha
                        tanishib chiqamiz. Hikoyachining eng kuchli
                        vositasi uning ovozidir. Ushbu dars davomida
                        jonli auditoriya oldida qanday gapirish va
                        taqdimot paytida nimalarga etibor qaratish
                        lozimligini bilib olasiz. Ikkinchi qismda esa
                        ovozlashtirish haqida gaplashamiz.
                    </p>
                    <p className='text-[20px] leading-[24px] font-normal mt-5'>
                        — Ovozingizni tuzatish va tildagi dangasalikdan
                        xalos bolish, ovozga ishlov berish, tartibga
                        solish, audio chastotalar, ekvalayzer, kompressor,
                        filtrlar va ulardan qayerda va qanday foydalanish
                        haqida malumotlar beriladi.
                    </p>

                </div>
                <div className="card border-2 border-[rgba(250,164,12,0.50)] p-5 max-w-[510px] min-h-[255px]">
                    <span className='text-[20px] text-[#00E689] font-extrabold mb-[5px]'>— 05 dars</span>
                    <h1 className='text-[25px] font-extrabold mb-5'>Kamera qarshisida ishlash</h1>
                    <p className='text-[20px] leading-[24px] font-normal'>
                        — Tasvirga tushirishdan oldingi eng soʻnggi
                        tayyorgarliklar nimalar? Kamera qarshisida
                        gapirishning sirlari. Obyektiv qarshisida
                        oʻzingizdagi eng yaxshi holatni topa olish uchun
                        nimalar qilish kerak?
                    </p>
                    <p className='text-[20px] leading-[24px] font-normal mt-5'>
                        — Matnlarni yodlash kerakmi yoki oʻqishmi?
                        Teleprompterdan qayerda va qanday
                        foydalanamiz?
                    </p>

                </div>
                <div className="card border-2 border-[rgba(250,164,12,0.50)] p-5 max-w-[510px] min-h-[255px]">
                    <span className='text-[20px] text-[#00E689] font-extrabold mb-[5px]'>— 06 dars</span>
                    <h1 className='text-[25px] font-extrabold mb-5'>Tasvirga olish vositalari va vizual
                        kompozitsiya</h1>
                    <p className='text-[20px] leading-[24px] font-normal'>
                        — Ushbu darsda biz kamera turlari, kameraning
                        anatomiyasi, muhim sozlamalar, fokuslash,
                        obyektiv turlari va ulardan foydalanish texnikalari
                        bilan tanishib chiqamiz.
                    </p>
                    <p className='text-[20px] leading-[24px] font-normal mt-5'>
                        — Muvozanat, boʻshliqlar, kompozitsiya qurish
                        usullari, 180 daraja qoidasi kabi tushunchalar
                        haqida to‘xtalamiz.
                    </p>

                </div>
                <div className="card border-2 border-[rgba(250,164,12,0.50)] p-5 max-w-[510px] min-h-[255px]">
                    <span className='text-[20px] text-[#00E689] font-extrabold mb-[5px]'>— 07 dars</span>
                    <h1 className='text-[25px] font-extrabold mb-5'>Studiya sharoitida ishlash</h1>
                    <p className='text-[20px] leading-[24px] font-normal'>
                        — Yorugʻlik – tasvirning asosidir. Ushbu darsda
                        ichki va tashqi yoritish usullarini misollar bilan
                        koʻrib chiqamiz. Dastlabki darslarda oʻrgangan
                        narsalarimizni amalda qoʻllaymiz.
                    </p>
                    <p className='text-[20px] leading-[24px] font-normal mt-5'>
                        — Tayyorgarlik jarayoni tugagach, birgalikda
                        namuna tarzida koʻrsatuvni tasvirga tushiramiz.
                    </p>

                </div>
                <div className="card border-2 border-[rgba(250,164,12,0.50)] p-5 max-w-[510px] min-h-[255px]">
                    <span className='text-[20px] text-[#00E689] font-extrabold mb-[5px]'>— 08 dars</span>
                    <h1 className='text-[25px] font-extrabold mb-5'>Montaj asoslari va uning tartibi
                    </h1>
                    <p className='text-[20px] leading-[24px] font-normal'>
                        — Ushbu darsda montaj asoslari va uning tartibi
                        haqida gaplashamiz. Kadrlarning keraksiz
                        qismlarini tozalash, yordamchi kadrlar va
                        animatsiyalar bilan boyitish, ranglardan toʻgʻri
                        foydalanish, qoʻshimcha ovozlar va effektlar
                        ishlatishni oʻrganamiz.
                    </p>
                </div>
            </div>
                <div className="flex items-center gap-x-5 mt-[34px]">
                    <Link className='flex items-center h-[48px] py-[14px] px-[22px] bg-[#FAA40C] text-black w-[207px]  hover:bg-transparent hover:border hover:border-[#FAA40] hover:text-white duration-200' href='/'>Guruhga qo’shilish
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
                    <p>
                        Ushbu tugmani bosish orqali kursning <br/>
                        Telegramdagi saralash guruhiga azo <br/>
                        bolasiz →
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Lessons;