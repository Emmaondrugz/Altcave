export default function BenefitsOne() {
    return (
        <div className="w-full flex lg:flex-row  flex-col-reverse items-center">
            {/* left image */}
            <div className="bg-white lg:w-[50%] w-full p-4 flex justify-center lg:justify-end lg:pr-20 min-h-[390px]">
                {/* box-ui */}
                <div className="bg-[#f7f7f7] p-6 max-w-[350px] h-full rounded-lg flex flex-col items-center justify-center">

                    <div className="w-full h-full bg-white shadow-md p-3 rounded-lg">
                        {/* ui header */}
                        <div className="text-sm mb-3">
                            Advanced Orders
                        </div>

                        {/* selections */}
                        <div className="flex flex-col w-full gap-y-3">

                            {/* Box one */}
                            <div className="w-full flex p-2.5 items-center h-18 gap-x-3 rounded-lg shadow-lg shadow-blue-50 border-2 border-blue-600">
                                <div className="flex h-full items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#2563eb"><path d="m438-338 226-226-57-57-169 169-84-84-57 57 141 141Zm42 258q-139-35-229.5-159.5T160-516v-244l320-120 320 120v244q0 152-90.5 276.5T480-80Zm0-84q104-33 172-132t68-220v-189l-240-90-240 90v189q0 121 68 220t172 132Zm0-316Z" /></svg>
                                </div>

                                <div className="flex flex-col flex-grow">
                                    <h1 className="text-[13px]">Limit Order</h1>
                                    <p className="text-[11px] text-gray-600">Place orders at the lowest <br /> possible price</p>
                                </div>

                                <div>
                                    <input type="radio" name="" id="" checked readOnly className="w-3.5 h-3.5 accent-blue-600" />
                                </div>
                            </div>

                            {/* Box two */}
                            <div className="w-full flex p-2.5 items-center h-18 gap-x-3 rounded-lg border-2 border-[#f7f7f7]">
                                <div className="flex h-full items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#4b5563"><path d="m438-338 226-226-57-57-169 169-84-84-57 57 141 141Zm42 258q-139-35-229.5-159.5T160-516v-244l320-120 320 120v244q0 152-90.5 276.5T480-80Zm0-84q104-33 172-132t68-220v-189l-240-90-240 90v189q0 121 68 220t172 132Zm0-316Z" /></svg>
                                </div>

                                <div className="flex flex-col flex-grow">
                                    <h1 className="text-[13px]">Stop Order</h1>
                                    <p className="text-[11px] text-gray-600">Launch a market buy order <br /> at a specified price rise</p>
                                </div>

                                <div>
                                    <div className="w-3.5 h-3.5 border border-gray-500 rounded-full" >

                                    </div>
                                </div>
                            </div>

                            {/* Box three */}
                            <div className="w-full flex p-2.5 items-center h-18 gap-x-3 rounded-lg border-2 border-[#f7f7f7]">
                                <div className="flex h-full items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#4b5563"><path d="m438-338 226-226-57-57-169 169-84-84-57 57 141 141Zm42 258q-139-35-229.5-159.5T160-516v-244l320-120 320 120v244q0 152-90.5 276.5T480-80Zm0-84q104-33 172-132t68-220v-189l-240-90-240 90v189q0 121 68 220t172 132Zm0-316Z" /></svg>
                                </div>

                                <div className="flex flex-col flex-grow">
                                    <h1 className="text-[13px]">Limit Order</h1>
                                    <p className="text-[11px] text-gray-600">Place orders at the lowest <br /> possible price</p>
                                </div>

                                <div>
                                    <div className="w-3.5 h-3.5 border border-gray-500 rounded-full" >

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* right content */}
            <div className="lg:w-1/2 w-full p-8 flex justify-center lg:justify-start">
                <div className="flex flex-col max-w-[330px] w-full">
                    <h2 className="text-3xl font-medium mb-4">Advance Order Types</h2>
                    <p className="text-gray-800 text-[12px] leading-relaxed">
                        Provides the ability to access a variety of more advanced order types, allowing you to set up and trade with high precision.
                    </p>
                    <button className="w-40 text-sm py-2 mt-4 bg-blue-600 text-white">
                        Explore More
                    </button>
                </div>
            </div>
        </div>
    )
}