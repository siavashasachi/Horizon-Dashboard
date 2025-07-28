import logoMoon from '../assets/images/icons/moon-darkmode.png'

function DarkMoodeToggle(){
    return(
        <a href="#" className=" rounded-full absolute bottom-10 right-10 z-10 background-linear-darkmood flex items-center justify-center w-12 h-12 dropshadow-darkmood" >
            <img className='w-4' src={logoMoon}/>
        </a>
    )
}
export default DarkMoodeToggle