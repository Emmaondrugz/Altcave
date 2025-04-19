"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Header from "./Header";

export default function Hero({ sideNav, setSideNav }) {

    // motion varaibles
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div className="min-h-screen bg-[#f7f7f7] w-full pb-32 sm:pb-20">
            <Header sideNav={sideNav} setSideNav={setSideNav} />

            <div className="flex flex-col gap-x-20 gap-y-14 lg:flex-row items-center lg:pt-10 pt-10 px-6 lg:px-20">
                <div className="flex flex-col w-full lg:w-1/2">
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, y: 100 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="sm:text-5xl text-3xl w-full lg:text-left text-center md:leading-tight lg:w-full poppins">

                        The best platform<br />
                        for Crypto Trading &
                        investments
                    </motion.div>

                    <p className="mt-4 text-xs text-gray-500 md:text-sm lg:text-left md:text-center text-center w-[80%] sm:w-[60%] lg:mx-0 mx-auto lg:w-[70%] comfortaa">
                        Discover the best investment opportunities in the cryptocurrency market.
                    </p>


                    <div className="flex gap-x-5 gap-y-3 mt-8 flex-wrap md:justify-start justify-center md:mx-auto lg:mx-0">

                        <button className="flex flex-nowrap text-sm min-w-[150px] shadow-md items-center justify-center gap-4 px-[36px] py-2.5 w-fit bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                            <p className="comfortaa flex flex-nowrap text-ellipsis">
                                Start now
                            </p>
                        </button>



                        <button className="flex flex-nowrap text-sm min-w-[150px]  items-center justify-center gap-4 px-[36px] py-2.5 w-fit border-2 border-blue-600 text-blue-600  rounded-full bg-white transition-colors">
                            <p className="comfortaa flex flex-nowrap text-ellipsis">
                                About us
                            </p>
                        </button>
                    </div>
                </div>


                {/* Hero image */}
                <div className="lg:w-1/2 sm:w-[500px]  flex items-end sm:pr-16 justify-start sm:justify-end h-full">
                    <img src="/Untitled.svg" alt="" className="" />
                </div>
            </div>
        </div>
    )
}