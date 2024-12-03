import React from 'react'
import '../index.css'
import tabImg from '../img/Premium(720).webp'
import tabImg1 from '../img/Premium1.webp'
import tabImg2 from '../img/Premium2.webp'
// import Arrow from '../img/pngtree-right-arrow-image_1129437.jpg'

function Premium() {
    return (
        <>
            <section className='tw-container tw-mt-10 '>
                <div className='tw-text-center'>
                    <h1 className='tw-text-5xl'>What's first up for your business?</h1>
                    <button className='tw-bg-black tw-text-white tw-rounded-full tw-py-3 tw-px-5 hover:tw-scale-105 tw-transition-all tw-mt-4 tw-mx-2'>Domains</button>
                    <button className='tw-bg-white tw-text-black tw-border-2 tw-border-solid hover:tw-border-black  tw-rounded-full tw-py-3 tw-px-5 hover:tw-scale-105 tw-transition-all tw-mt-4 tw-mx-2'>Recommended</button>
                    <button className='tw-bg-white tw-text-black tw-border-2 tw-border-solid hover:tw-border-black  tw-rounded-full tw-py-3 tw-px-5 hover:tw-scale-105 tw-transition-all tw-mt-4 tw-mx-2'>WordPress and Security</button>
                </div>
                <div className='tw-container'>
                    <div className='tw-flex tw-mx-20 tw-my-5 Nest-Hub'>
                        <div className='bg-img tw-p-14 Flex-1'>
                            <div className="tw-pt-72 tw-m-6">
                                <h1 className="tw-text-black tw-text-3xl tw-font-bold">Domains</h1>
                                <h1 className="tw-my-3 tw-font-extralight">
                                    Get started with the perfect domain, which comes <br /> with free
                                    domain privacy protection forever.
                                </h1>
                                <button className="tw-bg-black tw-text-white tw-font-semibold tw-py-3 tw-px-3 tw-rounded-lg tw-mb-7">
                                    Search Domains
                                </button>
                            </div>
                        </div>
                        <div className='tw-relative tw-left-20 main-Flex tw-m-6'>
                            <div className='bg-img1 tw-px-20 Flex-2  tw-relative'>
                                <div className="tw-relative tw-top-12 -tw-left-14">
                                    <h1 className="tw-font-bold tw-text-black tw-text-xl">
                                        .co for $ 0.01/1st year
                                    </h1>
                                    <h1 className="tw-font-semibold tw-my-4">
                                        Ensure your company and website <br /> stand out with a .co domain.
                                        3-year <br /> purchase required. Additional <br /> year(s) $ 47.99.
                                    </h1>
                                    <button className="tw-bg-black tw-text-white tw-font-semibold tw-py-3 tw-px-3 tw-rounded-lg tw-mb-7">
                                        Search Domains
                                    </button>
                                </div>
                            </div>
                            <div className='bg-img2 tw-p-8 Flex-3 tw-relative'>
                                <div className="">
                                    <h1 className="tw-font-bold tw-text-black tw-text-xl tw-mt-8">
                                        .in $ 12.99/1st yr
                                    </h1>
                                    <h1 className="tw-font-semibold tw-my-4">
                                        Boost your local impact with our <br /> localized top-level domains.
                                    </h1>
                                    <button className="tw-bg-black tw-text-white tw-font-semibold tw-py-3 tw-px-3 tw-rounded-lg tw-mb-7">
                                        Search Domains
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="tw-container tw-px-5 tw-py-24 tw-mx-auto tw-flex tw-flex-wrap Tablate">
                        <div className="lg:tw-w-2/3 tw-mx-auto">
                            <div className="tw-flex tw-flex-wrap tw-w-full tw-py-32 tw-px-10 tw-relative tw-mb-4 Tablate-div">
                                <img alt="gallery" className="tw-w-full tw-object-cover tw-h-full tw-object-center tw-block tw-absolute tw-inset-0 tw-rounded-3xl" src={tabImg} />
                                <div className="tw-relative tw-top-20">
                                    <h1 className='tw-text-3xl'>Domains</h1>
                                    {/* <span><img src={Arrow} alt="" /></span> */}
                                </div>
                            </div>
                            <div className="tw-flex tw-flex-wrap -tw-mx-2">
                                <div className="tw-px-2 tw-w-1/2" id="hidden1">
                                    <div className="tw-flex tw-flex-wrap tw-w-full sm:tw-py-24 tw-py-16 sm:tw-px-10 tw-px-6 tw-relative">
                                        <img alt="gallery" className="tw-w-full tw-object-cover tw-h-full tw-object-center tw-block tw-rounded-3xl tw-absolute tw-inset-0" src={tabImg1} />
                                        <div className="tw-relative tw-top-16 -tw-left-4">
                                        <h1 className='tw-text-xl'>.co for $ 0.01/1st year</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="tw-px-2 tw-w-1/2" id='hidden'>
                                    <div className="tw-flex tw-flex-wrap tw-w-full sm:tw-py-24 tw-py-16 sm:tw-px-10 tw-px-6 tw-relative">
                                        <img alt="gallery" className="tw-w-full tw-object-cover tw-h-full tw-object-center tw-block tw-rounded-3xl tw-absolute tw-inset-0" src={tabImg2} />
                                        <div className="tw-relative tw-top-16 -tw-left-4">
                                        <h1 className='tw-text-xl'>.in $ 12.99/1st yr</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>




                </div>

            </section>
        </>
    )
}

export default Premium