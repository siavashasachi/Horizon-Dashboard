import HorizonIcon from '@images/icons/Horizon_icon.png';
function UpgradeCard(){
    return (
        <a href="#" className='flex flex-col items-center justify-center relative '>
                
               <span className='flex items-center justify-center background-linear-upgradecard p-6 rounded-full border-8 border-white absolute bottom-4/5'>
                 <img className='w-[40px]' src={HorizonIcon} alt='icon'/>
               </span>
            <div className='flex flex-col  items-center text-white background-linear-upgradecard pt-20 py-15 px-5 rounded-secondary'>
                <h4>
                    Upgrade to Pro
                </h4>
                <p>
                    To get access all features!
                    <br/>
                    connect to the world
                </p>
            </div>
        </a>
    )
}
export default UpgradeCard