import { useState } from "react";
function AdvertiseCard() {
    const [btnText, setbtnText] = useState(true);
    return (
        <div className="flex px-14 py-8 items-center bg-adv-card bg-no-repeat bg-cover text-white " >
            <div className="flex flex-col gap-5 w-3/6">
                <h3 className="text-3xl font-bold">
                    Discover, collect, and sell extraordinary NFTs
                </h3>
                <p className="text-secondary-light">
                    Enter in this creative world. Discover now the latest NFTs or start creating your own!
                </p>
                <div className="flex items-center relative">
                    <a id='AdvBtn1' href="#" className="mx-4 z-10 "style={{ color: btnText ? "black" : "white" }} >Discover Now</a>
                    <a id='AdvBtn2' href="#" className="mx-4 z-10 hover:text-black" onMouseEnter={(e) => 
                    {
                        e.currentTarget.offs
                        setbtnText(false)
                    
                    }}
                        onMouseLeave={() => setbtnText(true)}>Watch Video Watch</a>
                    <div id="AdvBgBtn" className="bg-white w-[120px] h-[45px] left-[5px] absolute rounded-primary  transition-all  ease-in-out duration-500"></div>
                </div>
            </div>
        </div>
    )
}
export default AdvertiseCard