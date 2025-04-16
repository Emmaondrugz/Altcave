export default function BenefitsOne() {
    return (
        <div className="w-full flex justify-center bg-blue-600 pb-20  pt-20">

            {/* right content */}
            <div className="w-full flex justify-center p-8 lg:pl-20">
                <div className="flex flex-col max-w-[550px] w-full">
                    <h2 className="sm:text-4xl text-2xl text-white font-medium mb-4 text-center">Building the future of Decentralized Finance.</h2>
                    <p className="text-white text-center text-[12px] leading-relaxed">
                        We are committed to creating a more transparent and secure financial system that is accessible to everyone. Our platform is designed to help you invest in your future and build wealth over time.
                    </p>
                    <div className="flex w-full mt-7 flex-wrap gap-8 justify-center text-white">
                        <div>
                            <p className="text-xl font-medium">500K+</p>
                            <p className="text-xs text-blue-100 font-normal">Active users</p>
                        </div>

                        <div>
                            <p className="text-xl font-medium">900+</p>
                            <p className="text-xs text-blue-100 font-normal">Active users</p>
                        </div>
                        <div>
                            <p className="text-xl font-medium">250+</p>
                            <p className="text-xs text-blue-100 font-normal">Partnership</p>
                        </div>

                        <div>
                            <p className="text-xl font-medium">1.2M+</p>
                            <p className="text-xs text-blue-100 font-normal">Transactions</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}