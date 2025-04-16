import '../globals.css'

export default function CTA() {
    return (
        <div className="md:py-20 py-0 md:px-10 px-0">
            <div className="lg:mx-auto mx-0 lg:w-[100%] bg-blue-600 w-full py-28 md:rounded-2xl md:p-16 text-white text-center"
            // style={{
            //     backgroundImage: "url('./_overlay.png')",
            //     backgroundSize: 'cover',
            //     backgroundPosition: 'center'
            // }}
            >
                <div className="text-center md:w-[500px] w-full mx-auto px-10">
                    <h1 className="mb-3 text-3xl ">Take Control of Your Finance</h1>
                    <p className="text-xs md:w-[360px] mx-auto w-full">Make the wise decision today. Start your crypto investments with us and
                        build a better future.
                    </p>

                    <button className="w-32 rounded-lg py-2.5 bg-white text-sm text-black mt-7">
                        Start now
                    </button>
                </div>
            </div>
        </div>
    )
}