export default function Footer() {
    return (
        <div className="w-full flex flex-col md:py-20 pb-16 pt-20 md:px-10 px-5">
            <div className="flex w-full md:justify-between justify-center items-center md:flex-row flex-col gap-10">

                {/* page icon */}
                <div>
                    <img src="/main-logo-removebg-preview.png" alt="" className="w-28" />
                </div>

                <div className="flex gap-5">
                    <div className="rounded-full border h-8 w-8 cursor-pointer">
                        <img src="https://cdn-icons-png.flaticon.com/512/733/733641.png" />
                    </div>

                    <div className="rounded-full border h-8 w-8 cursor-pointer">
                        <img src="https://cdn-icons-png.flaticon.com/512/733/733609.png" />
                    </div>

                    <div className="rounded-full border h-8 w-8 cursor-pointer">
                        <img src="https://cdn-icons-png.flaticon.com/512/5969/5969020.png" alt="" />
                    </div>
                </div>
            </div>


            <div className="flex mt-16 md:justify-between md:flex-row flex-col items-start md:items-center gap-10">

                <div>
                    <p className="text-sm font-normal">Company</p>

                    <ol className="flex flex-col gap-2 mt-2">
                        <li className="text-sm text-gray-800 font-normal">Trade</li>
                        <li className="text-sm text-gray-800 font-normal">Featured</li>
                        <li className="text-sm text-gray-800 font-normal">Market</li>
                        <li className="text-sm text-gray-800 font-normal">Portfolio</li>
                    </ol>
                </div>

                <div>
                    <p className="text-sm font-normal">Crypto Market</p>

                    <ol className="flex flex-col gap-2 mt-2">
                        <li className="text-sm text-gray-800 font-normal">Price Chart</li>
                        <li className="text-sm text-gray-800 font-normal">Market Analysis</li>
                        <li className="text-sm text-gray-800 font-normal">Latest News</li>
                        <li className="text-sm text-gray-800 font-normal">ICO</li>
                    </ol>
                </div>

                <div>
                    <p className="text-sm font-normal">Resources</p>

                    <ol className="flex flex-col gap-2 mt-2">
                        <li className="text-sm text-gray-800 font-normal">Guide for beginners</li>
                        <li className="text-sm text-gray-800 font-normal">Trading Platform</li>
                        <li className="text-sm text-gray-800 font-normal">Digital wallet</li>
                        <li className="text-sm text-gray-800 font-normal">Blockchain Technology</li>
                    </ol>
                </div>

                <div>
                    <p className="text-sm font-normal">Community</p>

                    <ol className="flex flex-col gap-2 mt-2">
                        <li className="text-sm text-gray-800 font-normal">Crypto Discussion forum</li>
                        <li className="text-sm text-gray-800 font-normal">Discord Group</li>
                        <li className="text-sm text-gray-800 font-normal">Local Meetup Events</li>
                        <li className="text-sm text-gray-800 font-normal">Project Collaboration</li>
                    </ol>
                </div>
            </div>

            <div className="mt-20 border-t py-10 flex md:flex-row flex-col gap-7 justify-between items-center">
                <div className='text-sm'>@Copyright 2025 Altcave</div>
                <div className="flex gap-5 items-center">
                    <div className='text-sm'>
                        Terms and Condition
                    </div>
                    <div className='text-sm'>
                        Privacy Policy
                    </div>
                </div>
            </div>

        </div>
    )
}