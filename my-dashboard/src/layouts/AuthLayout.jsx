import { Outlet } from "react-router-dom";
import Footer from '@components/Footer';
function AuthLayout(){
    return(
        <main>
            <Outlet/>
            <Footer/>
        </main>
    )
}
export default AuthLayout