export default function Services() {
    const Services = [
        {
            id: 1,
            logo: (
                <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#fff">
                    <path d="M200-160q-33 0-56.5-23.5T120-240v-280q0-74 28.5-139.5T226-774q49-49 114.5-77.5T480-880q74 0 139.5 28.5T734-774q49 49 77.5 114.5T840-520v400q0 33-23.5 56.5T760-40H520q-17 0-28.5-11.5T480-80q0-17 11.5-28.5T520-120h240v-40h-80q-33 0-56.5-23.5T600-240v-160q0-33 23.5-56.5T680-480h80v-40q0-116-82-198t-198-82q-116 0-198 82t-82 198v40h80q33 0 56.5 23.5T360-400v160q0 33-23.5 56.5T280-160h-80Zm0-80h80v-160h-80v160Zm480 0h80v-160h-80v160ZM200-400h80-80Zm480 0h80-80Z" />
                </svg>
            ),
            title: "24/7 Customer Service",
            description: "Always available to assist you with any queries or concerns."
        },
        {
            id: 2,
            logo: (
                <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#fff">
                    <path d="M444-360h72q9 0 15.5-7.5T536-384l-19-105q20-10 31.5-29t11.5-42q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 23 11.5 42t31.5 29l-19 105q-2 9 4.5 16.5T444-360Zm36 276q-7 0-13-1t-12-3q-135-45-215-166.5T160-516v-189q0-25 14.5-45t37.5-29l240-90q14-5 28-5t28 5l240 90q23 9 37.5 29t14.5 45v189q0 140-80 261.5T505-88q-6 2-12 3t-13 1Zm0-80q104-33 172-132t68-220v-189l-240-90-240 90v189q0 121 68 220t172 132Zm0-316Z" />
                </svg>
            ),
            title: "Secure Trading Platform",
            description: "Advanced security to protect your assets and transactions."
        },
        {
            id: 3,
            logo: (
                <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#fff">
                    <path d="M400-840q-17 0-28.5-11.5T360-880q0-17 11.5-28.5T400-920h160q17 0 28.5 11.5T600-880q0 17-11.5 28.5T560-840H400Zm80 440q17 0 28.5-11.5T520-440v-160q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600v160q0 17 11.5 28.5T480-400Zm0 320q-74 0-139.5-28.5T226-186q-49-49-77.5-114.5T120-440q0-74 28.5-139.5T226-694q49-49 114.5-77.5T480-800q62 0 119 20t107 58l28-28q11-11 28-11t28 11q11 11 11 28t-11 28l-28 28q38 50 58 107t20 119q0 74-28.5 139.5T734-186q-49 49-114.5 77.5T480-80Zm0-80q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82Zm0-280Z" />
                </svg>
            ),
            title: "Real-Time Market Analysis",
            description: "Comprehensive data and analytics for informed decisions."
        }
    ];

    return (
        <div className="w-full pt-32 pb-20 min-h-screen h-full bg-white">
            <div className="w-full flex items-center h-full flex-col justify-center">
                <div className="w-full text-center mb-[100px]">
                    <p className="bg-blue-200 hidden w-fit rounded-full px-3 mx-auto mb-5 shadow-lg shadow-blue-100 text-xs py-1.5 border text-blue-500 border-blue-500">Services</p>
                    <div className='lg:w-full px-4 max-w-[400px] flex gap-y-4  flex-col items-center mx-auto justify-between'>
                        <div className="w-full  mx-auto">
                            <h1 className="md:text-3xl text-2xl font-medium text-center">Reasons why <br /> Customers Choose Us ?</h1>
                        </div>
                        <div className="w-full  mx-auto">
                            <p className="text-xs text-center">We Offer a Reliable platform to transact in confidence. Join us and experience seemless investments.</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:w-full md:w-fit lg:flex-row h-full mx-auto justify-center gap-x-3 gap-y-3 px-4">
                    {Services.map((service, index) => (
                        <div className="bg-[#f7f7f7] p-3 rounded-lg">
                            <div
                                key={service.id}
                                className={`w-full bg-white sm:w-[300px] p-4 h-fit sm:h-[180px] rounded-md  relative shadow-md
                                    }`}
                            >
                                {/* Main content */}
                                <div className="flex flex-col justify-start gap-y-8 text-left relative z-10">
                                    <div className="h-10 w-10 bg-blue-500 rounded-md shadow-xl shadow-blue-50 flex items-center justify-center">
                                        {service.logo}
                                    </div>
                                    <div className="font-medium">
                                        <h2 className="text-md">{service.title}</h2>
                                        <p className="font-normal text-sm mt-3 text-gray-600">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    );
}