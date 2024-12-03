import React from 'react'
import '../index.css'

function WebMarketing() {
    const moveeffect = () => {
        document.getElementById('MoveImg').style.background = 'url(https://img1.wsimg.com/cdnassets/transform/475af367-8a35-4d15-a838-37d8114ea080/intl-img-bl-prod-feature-get-online-fast-desktop)'
    }

    const moveeffect1 = () => {
        document.getElementById('MoveImg').style.background = 'url(https://img1.wsimg.com/cdnassets/transform/589acd99-ccfd-439a-88cb-1b5d7ee5f99f/intl-img-bl-prod-feature-build-trust-desktop)'
    }

    const moveeffect2 = () => {
        document.getElementById('MoveImg').style.background = 'url(https://img1.wsimg.com/cdnassets/transform/305e0fdd-0043-42cd-851e-5a6a00df7576/intl-img-bl-prod-feature-engage-with-marketing-desktop)'
    }
    return (
        <>
            <section className='tw-container margin1'>
                <div className='tw-text-center'>
                    <h1 className='tw-text-5xl'>Grow your brand with Websites + Marketing.</h1>
                </div>
                <div className="tw-container tw-px-24 tw-py-24 tw-mx-auto tw-flex tw-flex-wrap" id='main-div'>
                    <div className="tw-lg:w-2/3 tw-mx-auto" id='slider'>
                        <div className="tw-flex tw-flex-wrap tw-w-full tw-bg-gray-100 tw-py-48 tw-px-10 tw-relative tw-mb-4" id='MoveImg'>
                        </div>
                        <div className="tw-flex tw-flex-wrap -tw-mx-2">
                            <div className="tw-px-2 tw-w-1/3">
                                <div className="tw-flex tw-flex-wrap tw-w-full hover:tw-bg-gray-100 sm:tw-py-16 tw-py-16 sm:tw-px-10 tw-px-6 tw-relative tw-rounded-3xl" onMouseMove={moveeffect}>
                                    <div className="tw-relative tw-z-10 Text tw-w-full">
                                        <h1 className="tw-text-gray-900 tw-mb-2 tw-font-medium">Get online fast. No design skills needed. </h1>
                                        <p className="">Build your site in minutes. Choose from 100s of beautiful, mobile-friendly templates with our Website Builder, many with ecommerce features.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="tw-px-2 tw-w-1/3">
                                <div className="tw-flex tw-flex-wrap tw-w-full hover:tw-bg-gray-100 sm:tw-py-16 tw-py-16 sm:tw-px-10 tw-px-6 tw-relative tw-rounded-3xl" onMouseMove={moveeffect1}>
                                    <div className="tw-relative tw-z-10 Text tw-w-full">
                                        <h1 className="tw-text-gray-900 tw-mb-2 tw-font-medium">Build trust with email that matches your domain.  </h1>
                                        <p className="">Help boost your credibility with customers with free Professional Email that’s identical to your domain name.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="tw-px-2 tw-w-1/3">
                                <div className="tw-flex tw-flex-wrap tw-w-full hover:tw-bg-gray-100 sm:tw-py-16 tw-py-16 sm:tw-px-10 tw-px-6 tw-relative tw-rounded-3xl" onMouseMove={moveeffect2}>
                                    <div className="tw-relative tw-z-10 Text tw-w-full">
                                        <h1 className="tw-text-gray-900 tw-mb-2 tw-font-medium">Engage with marketing tools. </h1>
                                        <p className="">Help your audience find you with built-in SEO and promote your business with social media and email marketing tools.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="carouselExample" className="carousel slide Web">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className='tw-flex' id='tab'>
                                    <div className="card tw-rounded-xl tw-overflow-hidden tw-m-4">
                                        <img src="https://img1.wsimg.com/cdnassets/transform/db04a2fe-f1dd-47cf-9805-02e7281d65e5/intl-img-bl-prod-feature-get-online-fast-portrait" className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h1 className="tw-text-gray-900 tw-mb-2 tw-font-bold max-sm:tw-text-smmax-sm:tw-text-sm">Get online fast. No design skills needed. </h1>
                                            <p className="max-sm:tw-text-xs">Build your site in minutes. Choose from 100s of beautiful, mobile-friendly templates with our Website Builder, many with ecommerce features.</p>
                                        </div>
                                    </div>
                                    <div className="card tw-rounded-xl tw-overflow-hidden tw-m-4">
                                        <img src="https://img1.wsimg.com/cdnassets/transform/2ba9e3e7-09ca-4328-a731-a71aee2de27c/intl-img-bl-prod-feature-build-trust-portrait" className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h1 className="tw-text-gray-900 tw-mb-2 tw-font-bold max-sm:tw-text-sm">Build trust with email that matches your domain.  </h1>
                                            <p className="max-sm:tw-text-xs">Help boost your credibility with customers with free Professional Email that’s identical to your domain name.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card tw-rounded-xl tw-overflow-hidden tw-m-4" id='mob'>
                                    <img src="https://img1.wsimg.com/cdnassets/transform/db04a2fe-f1dd-47cf-9805-02e7281d65e5/intl-img-bl-prod-feature-get-online-fast-portrait" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h1 className="tw-text-gray-900 tw-mb-2 tw-font-bold max-sm:tw-text-smmax-sm:tw-text-sm">Get online fast. No design skills needed. </h1>
                                        <p className="max-sm:tw-text-xs">Build your site in minutes. Choose from 100s of beautiful, mobile-friendly templates with our Website Builder, many with ecommerce features.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className='tw-flex' id='tab'>
                                    <div className="card tw-rounded-xl tw-overflow-hidden tw-m-4">
                                        <img src="https://img1.wsimg.com/cdnassets/transform/49b4d83b-f74f-4850-898a-d3f981262e24/intl-img-bl-prod-feature-engage-with-marketing-portrait" className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h1 className="tw-text-gray-900 tw-mb-2 tw-font-bold max-sm:tw-text-sm">Engage with marketing tools. </h1>
                                            <p className="max-sm:tw-text-xs">Help your audience find you with built-in SEO and promote your business with social media and email marketing tools.</p>
                                        </div>
                                    </div>
                                    <div className="card tw-rounded-xl tw-overflow-hidden tw-m-4">
                                        <img src="https://img1.wsimg.com/cdnassets/transform/db04a2fe-f1dd-47cf-9805-02e7281d65e5/intl-img-bl-prod-feature-get-online-fast-portrait" className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h1 className="tw-text-gray-900 tw-mb-2 tw-font-bold max-sm:tw-text-sm">Get online fast. No design skills needed. </h1>
                                            <p className="max-sm:tw-text-xs">Build your site in minutes. Choose from 100s of beautiful, mobile-friendly templates with our Website Builder, many with ecommerce features.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card tw-rounded-xl tw-overflow-hidden tw-m-4" id='mob'>
                                    <img src="https://img1.wsimg.com/cdnassets/transform/2ba9e3e7-09ca-4328-a731-a71aee2de27c/intl-img-bl-prod-feature-build-trust-portrait" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h1 className="tw-text-gray-900 tw-mb-2 tw-font-bold max-sm:tw-text-sm">Build trust with email that matches your domain.  </h1>
                                        <p className="max-sm:tw-text-xs">Help boost your credibility with customers with free Professional Email that’s identical to your domain name.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className='tw-flex' id='tab'>
                                    <div className="card tw-rounded-xl tw-overflow-hidden tw-m-4">
                                        <img src="https://img1.wsimg.com/cdnassets/transform/2ba9e3e7-09ca-4328-a731-a71aee2de27c/intl-img-bl-prod-feature-build-trust-portrait" className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h1 className="tw-text-gray-900 tw-mb-2 tw-font-bold max-sm:tw-text-sm">Build trust with email that matches your domain.  </h1>
                                            <p className="max-sm:tw-text-xs">Help boost your credibility with customers with free Professional Email that’s identical to your domain name.</p>
                                        </div>
                                    </div>
                                    <div className="card tw-rounded-xl tw-overflow-hidden tw-m-4">
                                        <img src="https://img1.wsimg.com/cdnassets/transform/49b4d83b-f74f-4850-898a-d3f981262e24/intl-img-bl-prod-feature-engage-with-marketing-portrait" className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h1 className="tw-text-gray-900 tw-mb-2 tw-font-bold max-sm:tw-text-sm">Engage with marketing tools. </h1>
                                            <p className="max-sm:tw-text-xs">Help your audience find you with built-in SEO and promote your business with social media and email marketing tools.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card tw-rounded-xl tw-overflow-hidden tw-m-4" id='mob'>
                                    <img src="https://img1.wsimg.com/cdnassets/transform/49b4d83b-f74f-4850-898a-d3f981262e24/intl-img-bl-prod-feature-engage-with-marketing-portrait" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h1 className="tw-text-gray-900 tw-mb-2 tw-font-bold max-sm:tw-text-sm">Engage with marketing tools. </h1>
                                        <p className="max-sm:tw-text-xs">Help your audience find you with built-in SEO and promote your business with social media and email marketing tools.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className='tw-justify-center tw-text-center tw-relative -tw-top-16'><button className="tw-bg-black tw-text-white tw-font-semibold tw-py-3 tw-px-10 tw-rounded-xl tw-mt-3">
                    Learn More
                </button></div>
            </section>
        </>
    )
}

export default WebMarketing