"use client"

export default function News() {

    const newsDataOne = [
        {
            id: 1,
            header: "Understanding Market Trends",
            image: "/business-man-working-late.jpg",
            text: "Explore the latest patterns and movements in the crypto market, including key indicators and future predictions."
        },
        {
            id: 2,
            header: "Blockchain Technology Evolution",
            image: "/low-angle-plain-concrete-structure-city-with-copy-space.jpg",
            text: "Discover how blockchain infrastructure is developing and shaping the future of digital transactions."
        }
    ]

    const newsDataTwo = [
        {
            id: 3,
            header: "DeFi Protocols and Security",
            image: "/hud-user-interface-technology-spaceship-virtual-reality-game-with-infographic-chart-navigation-button.jpg",
            text: "Learn about the latest developments in decentralized finance and important security considerations."
        },
        {
            id: 4,
            header: "NFT Market Innovations",
            image: "/freepik__the-style-is-candid-image-photography-with-natural__51741.jpeg",
            text: "Stay updated on the newest trends and opportunities in the non-fungible token ecosystem."
        }
    ]


    return (
        <div className="py-28 bg-[#f7f7f7] px-3">
            {/* Section Header */}
            <div className="max-w-[1000px] w-full mx-auto flex items-center lg:flex-row gap-4 flex-col justify-between">
                <div>
                    <h1 className="text-3xl lg:text-left text-center font-normal">
                        The latest information and <br className="hidden sm:flex" /> insights from us
                    </h1>
                </div>
                <div>
                    <p className="lg:text-left sm:text-sm text-xs text-center">
                        We are ready to provide you with the latest knowledge<br className="hidden sm:flex" /> that can enrich your understanding
                    </p>
                </div>
            </div>

            {/* News Boxes */}
            <div className="lg:max-w-[1000px] mx-auto lg:w-full max-w-[700px] flex flex-col lg:flex-row items-center gap-5 mt-16">
                {newsDataOne.map((news) => (
                    <div key={news.id}
                        className="h-56 lg:w-1/2 w-full gap-5 items-center flex rounded-lg shadow-md border p-3  bg-white" >
                        <div className="h-full min-w-32 sm:min-w-52 w-56 bg-gray-500 border rounded-lg">
                            <img src={news.image} alt="" className="w-full object-cover rounded-lg h-full" />
                        </div>

                        <div className="py-2 h-full justify-between flex-grow flex flex-col gap-3">
                            <div>
                                <h1 className="text-xs text-gray-500">{news.header}</h1>
                                <p className="mt-3 text-xs sm:text-sm">{news.text}</p>
                            </div>

                            <button className="text-sm w-fit">
                                Read more
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* News Boxes */}
            <div className="lg:w-full lg:max-w-[1000px] max-w-[700px] mx-auto flex flex-col items-center lg:flex-row gap-5 mt-5">
                {newsDataTwo.map((news) => (
                    <div key={news.id}
                        className="h-56 lg:w-1/2 w-full gap-5 items-center flex rounded-lg shadow-md border p-3  bg-white" >
                        <div className="h-full min-w-32 sm:min-w-52 w-56 bg-gray-500 border rounded-lg">
                            <img src={news.image} alt="" className="w-full object-cover rounded-lg h-full" />
                        </div>

                        <div className="py-2 h-full justify-between w- flex flex-col gap-3">
                            <div>
                                <h1 className="text-xs text-gray-500">{news.header}</h1>
                                <p className="mt-3 text-xs sm:text-sm">{news.text}</p>
                            </div>

                            <button className="text-sm w-fit">
                                Read more
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}