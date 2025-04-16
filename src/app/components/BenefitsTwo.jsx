export default function Benefitstwo() {
    return (
        <div className="w-full flex lg:flex-row-reverse  flex-col-reverse items-center">
            {/* left image */}
            <div className="bg-white lg:w-[50%] w-full p-4 flex justify-center lg:justify-start min-h-[390px]">
                {/* box-ui */}
                <div className="bg-[#f7f7f7] p-6 max-w-[350px] h-full rounded-lg flex flex-col items-center justify-center">

                    <div className="w-full h-full bg-white shadow-md p-3 rounded-lg">
                        {/* Heading */}
                        <div className="w-full flex gap-3 flex-row items-center">
                            <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                                <img src="\bitcoin-btc-logo.png" alt="" />
                            </div>
                            <div className="flex flex-col">
                                <h1>Bitcoin</h1>
                                <p className="text-gray-500 text-xs">BTC</p>
                            </div>
                        </div>


                        {/* Price tag */}
                        <div className="w-full flex flex-col mt-5 justify-start">
                            <div>
                                <p className="sm:text-2xl text-xl">$83,855.76</p>
                            </div>

                            <div className="flex w-full gap-3 items-center">
                                <div className="bg-green-100 text-[10px] sm:text-[11px] py-0.5 px-2 rounded-lg text-green-400">
                                    $16,232.38676 (+27%)
                                </div>

                                <p className="sm:text-[11px] text-[10px] text-gray-400">Past 24 hours</p>
                            </div>
                        </div>

                        {/* graph */}
                        <div className="max-w-[350px] h-fit flex justify-normal items-end w-full flex-grow  -mt-[20px] rounded-b-xl">
                            <img src="\magicpattern-svg-chart-1744095478926.png" alt="" className="w-full" />
                        </div>
                    </div>
                </div>
            </div>


            {/* right content */}
            <div className="lg:w-1/2 w-full flex justify-center lg:justify-end p-8 lg:pr-20">
                <div className="flex flex-col max-w-[330px] w-full">
                    <h2 className="text-3xl font-medium mb-4">Technical Charts</h2>
                    <p className="text-gray-800 text-[12px] leading-relaxed">
                        Accurate chart predictions with in-depth analysis, identify trends and anticipate price change
                    </p>
                    <button className="w-40 py-2 text-sm mt-4 bg-blue-600 text-white">
                        Explore More
                    </button>
                </div>
            </div>
        </div>
    )
}