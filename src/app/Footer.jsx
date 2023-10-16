import React, { useState } from 'react';
import 'keen-slider/keen-slider.min.css'
import KeenSlider from 'keen-slider'
import { useKeenSlider } from "keen-slider/react"


const Footer = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        },
    })

    return (
        <>
            <footer id='courses' className="navigation-wrapper pt-16 pb-20">
                <div ref={sliderRef} className="keen-slider container">
                    <div className="keen-slider__slide number-slide1 relative">
                        <div className="absolute top-12 left-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="81" height="67" viewBox="0 0 81 67" fill="none">
                                <path opacity="0.3" d="M81 67H51.4447V40.8244C51.4447 35.3011 52.0604 30.098 53.2919 25.2151C54.5849 20.2521 56.4629 15.9295 58.9259 12.2473C61.3888 8.56511 64.4367 5.60335 68.0696 3.36201C71.764 1.12067 76.0741 0 81 0V14.0484C68.5006 14.0484 62.2509 22.9737 62.2509 40.8244V44.5466H81V67ZM29.3706 67H0V40.8244C0 35.3011 0.584949 30.098 1.75485 25.2151C2.98632 20.2521 4.83352 15.9295 7.29647 12.2473C9.75941 8.56511 12.8073 5.60335 16.4401 3.36201C20.1346 1.12067 24.4447 0 29.3706 0V14.0484C16.9943 14.0484 10.8062 22.9737 10.8062 40.8244V44.5466H29.3706V67Z" fill="#FAA40C"/>
                            </svg>
                        </div>
                        <h1 className='text-center text-[25px] font-bold mb-10'>O’quvchilarimizning <span className='text-[#00E689]'>kurs haqidagi fikrlari</span></h1>
                        <h2 className='text-[20px] leading-[30px] mb-5'>Abdukarim Mirzaevning 1-halqa tinglovchilaridan biri bo`lish imkonini bergan <br/> Robbimga hamdlar bo'lsin! Mening nazarimda bu bilimlar hozirgi kunda juda <br/> muhim.</h2>
                        <p className='text-[20px] leading-[30px] mb-10'>Darsda o'tilgan mavzulardan foydalanib bir sifatli video, audio, tekst, va hkz tayyorlasa tinglovchi va ko'ruvchilarga yaxshi mahsulot yetib borsa, menimcha bizning ustoz niyatlariga yetgan bo’lardilar deb o'ylayman.</p>
                        <p className='text-[20px] leading-[30px] mb-10 font-bold text-[#FAA40C]'>Baxrom Abduqayyum</p>
                    </div>
                    <div className="keen-slider__slide number-slide2 relative">
                        <div className="absolute top-12 left-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="81" height="67" viewBox="0 0 81 67" fill="none">
                                <path opacity="0.3" d="M81 67H51.4447V40.8244C51.4447 35.3011 52.0604 30.098 53.2919 25.2151C54.5849 20.2521 56.4629 15.9295 58.9259 12.2473C61.3888 8.56511 64.4367 5.60335 68.0696 3.36201C71.764 1.12067 76.0741 0 81 0V14.0484C68.5006 14.0484 62.2509 22.9737 62.2509 40.8244V44.5466H81V67ZM29.3706 67H0V40.8244C0 35.3011 0.584949 30.098 1.75485 25.2151C2.98632 20.2521 4.83352 15.9295 7.29647 12.2473C9.75941 8.56511 12.8073 5.60335 16.4401 3.36201C20.1346 1.12067 24.4447 0 29.3706 0V14.0484C16.9943 14.0484 10.8062 22.9737 10.8062 40.8244V44.5466H29.3706V67Z" fill="#FAA40C"/>
                            </svg>
                        </div>
                        <h1 className='text-center text-[25px] font-bold mb-10'>O’quvchilarimizning <span className='text-[#00E689]'>kurs haqidagi fikrlari</span></h1>
                        <h2 className='text-[20px] leading-[30px] mb-5'>Abdukarim Mirzaevning 1-halqa tinglovchilaridan biri bo`lish imkonini bergan <br/> Robbimga hamdlar bo'lsin! Mening nazarimda bu bilimlar hozirgi kunda juda <br/> muhim.</h2>
                        <p className='text-[20px] leading-[30px] mb-10'>Darsda o'tilgan mavzulardan foydalanib bir sifatli video, audio, tekst, va hkz tayyorlasa tinglovchi va ko'ruvchilarga yaxshi mahsulot yetib borsa, menimcha bizning ustoz niyatlariga yetgan bo’lardilar deb o'ylayman.</p>
                        <p className='text-[20px] leading-[30px] mb-10 font-bold text-[#FAA40C]'>Baxrom Abduqayyum</p>
                    </div>
                    <div className="keen-slider__slide number-slide3 relative">
                        <div className="absolute top-12 left-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="81" height="67" viewBox="0 0 81 67" fill="none">
                                <path opacity="0.3" d="M81 67H51.4447V40.8244C51.4447 35.3011 52.0604 30.098 53.2919 25.2151C54.5849 20.2521 56.4629 15.9295 58.9259 12.2473C61.3888 8.56511 64.4367 5.60335 68.0696 3.36201C71.764 1.12067 76.0741 0 81 0V14.0484C68.5006 14.0484 62.2509 22.9737 62.2509 40.8244V44.5466H81V67ZM29.3706 67H0V40.8244C0 35.3011 0.584949 30.098 1.75485 25.2151C2.98632 20.2521 4.83352 15.9295 7.29647 12.2473C9.75941 8.56511 12.8073 5.60335 16.4401 3.36201C20.1346 1.12067 24.4447 0 29.3706 0V14.0484C16.9943 14.0484 10.8062 22.9737 10.8062 40.8244V44.5466H29.3706V67Z" fill="#FAA40C"/>
                            </svg>
                        </div>
                        <h1 className='text-center text-[25px] font-bold mb-10'>O’quvchilarimizning <span className='text-[#00E689]'>kurs haqidagi fikrlari</span></h1>
                        <h2 className='text-[20px] leading-[30px] mb-5'>Abdukarim Mirzaevning 1-halqa tinglovchilaridan biri bo`lish imkonini bergan <br/> Robbimga hamdlar bo'lsin! Mening nazarimda bu bilimlar hozirgi kunda juda <br/> muhim.</h2>
                        <p className='text-[20px] leading-[30px] mb-10'>Darsda o'tilgan mavzulardan foydalanib bir sifatli video, audio, tekst, va hkz tayyorlasa tinglovchi va ko'ruvchilarga yaxshi mahsulot yetib borsa, menimcha bizning ustoz niyatlariga yetgan bo’lardilar deb o'ylayman.</p>
                        <p className='text-[20px] leading-[30px] mb-10 font-bold text-[#FAA40C]'>Baxrom Abduqayyum</p>
                    </div>
                    <div className="keen-slider__slide number-slide4 relative">
                        <div className="absolute top-12 left-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="81" height="67" viewBox="0 0 81 67" fill="none">
                                <path opacity="0.3" d="M81 67H51.4447V40.8244C51.4447 35.3011 52.0604 30.098 53.2919 25.2151C54.5849 20.2521 56.4629 15.9295 58.9259 12.2473C61.3888 8.56511 64.4367 5.60335 68.0696 3.36201C71.764 1.12067 76.0741 0 81 0V14.0484C68.5006 14.0484 62.2509 22.9737 62.2509 40.8244V44.5466H81V67ZM29.3706 67H0V40.8244C0 35.3011 0.584949 30.098 1.75485 25.2151C2.98632 20.2521 4.83352 15.9295 7.29647 12.2473C9.75941 8.56511 12.8073 5.60335 16.4401 3.36201C20.1346 1.12067 24.4447 0 29.3706 0V14.0484C16.9943 14.0484 10.8062 22.9737 10.8062 40.8244V44.5466H29.3706V67Z" fill="#FAA40C"/>
                            </svg>
                        </div>
                        <h1 className='text-center text-[25px] font-bold mb-10'>O’quvchilarimizning <span className='text-[#00E689]'>kurs haqidagi fikrlari</span></h1>
                        <h2 className='text-[20px] leading-[30px] mb-5'>Abdukarim Mirzaevning 1-halqa tinglovchilaridan biri bo`lish imkonini bergan <br/> Robbimga hamdlar bo'lsin! Mening nazarimda bu bilimlar hozirgi kunda juda <br/> muhim.</h2>
                        <p className='text-[20px] leading-[30px] mb-10'>Darsda o'tilgan mavzulardan foydalanib bir sifatli video, audio, tekst, va hkz tayyorlasa tinglovchi va ko'ruvchilarga yaxshi mahsulot yetib borsa, menimcha bizning ustoz niyatlariga yetgan bo’lardilar deb o'ylayman.</p>
                        <p className='text-[20px] leading-[30px] mb-10 font-bold text-[#FAA40C]'>Baxrom Abduqayyum</p>
                    </div>
                    <div className="keen-slider__slide number-slide5 relative">
                        <div className="absolute top-12 left-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="81" height="67" viewBox="0 0 81 67" fill="none">
                                <path opacity="0.3" d="M81 67H51.4447V40.8244C51.4447 35.3011 52.0604 30.098 53.2919 25.2151C54.5849 20.2521 56.4629 15.9295 58.9259 12.2473C61.3888 8.56511 64.4367 5.60335 68.0696 3.36201C71.764 1.12067 76.0741 0 81 0V14.0484C68.5006 14.0484 62.2509 22.9737 62.2509 40.8244V44.5466H81V67ZM29.3706 67H0V40.8244C0 35.3011 0.584949 30.098 1.75485 25.2151C2.98632 20.2521 4.83352 15.9295 7.29647 12.2473C9.75941 8.56511 12.8073 5.60335 16.4401 3.36201C20.1346 1.12067 24.4447 0 29.3706 0V14.0484C16.9943 14.0484 10.8062 22.9737 10.8062 40.8244V44.5466H29.3706V67Z" fill="#FAA40C"/>
                            </svg>
                        </div>
                        <h1 className='text-center text-[25px] font-bold mb-10'>O’quvchilarimizning <span className='text-[#00E689]'>kurs haqidagi fikrlari</span></h1>
                        <h2 className='text-[20px] leading-[30px] mb-5'>Abdukarim Mirzaevning 1-halqa tinglovchilaridan biri bo`lish imkonini bergan <br/> Robbimga hamdlar bo'lsin! Mening nazarimda bu bilimlar hozirgi kunda juda <br/> muhim.</h2>
                        <p className='text-[20px] leading-[30px] mb-10'>Darsda o'tilgan mavzulardan foydalanib bir sifatli video, audio, tekst, va hkz tayyorlasa tinglovchi va ko'ruvchilarga yaxshi mahsulot yetib borsa, menimcha bizning ustoz niyatlariga yetgan bo’lardilar deb o'ylayman.</p>
                        <p className='text-[20px] leading-[30px] mb-10 font-bold text-[#FAA40C]'>Baxrom Abduqayyum</p>
                    </div>


                </div>

            </footer>
            <h1 className='text-center text-[16px] font-bold uppercase mt-5 pb-5'>© Abdukarim Mirzayev | Barcha huquqlar himoyalangan.</h1>
            {loaded && instanceRef.current && (
                <div className='relative'>
                    <div className="dots absolute bottom-[100px] left-[45%]">
                        {[
                            ...Array(instanceRef.current.track.details.slides.length).keys(),
                        ].map((idx) => {
                            return (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        instanceRef.current?.moveToIdx(idx)
                                    }}
                                    className={"dot" + (currentSlide === idx ? " active" : "")}
                                ></button>
                            )
                        })}
                    </div>
                </div>
            )}
        </>
    )
}


export default Footer;
