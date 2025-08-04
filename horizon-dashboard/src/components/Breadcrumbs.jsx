import { useLocation } from "react-router-dom"
import { capitalizeFirstLetter } from "@utils/CapatalizeFirstLetter";

function BreadCrumb() {
    
    const location = useLocation();
    const pathName = location.pathname;
    let breadCrumbItem = pathName.slice(1);
    breadCrumbItem = capitalizeFirstLetter(breadCrumbItem);
    pathName === '/' ? breadCrumbItem =  'Dashboard' : breadCrumbItem;

    return (
        <div className="flex  flex-col gap-2 text-secondary">
            <div><a href="">pages</a><span> / </span> <a href="">{breadCrumbItem}</a></div>
            <h1 className="text-primary font-main-bold text-3xl">{breadCrumbItem}</h1>
        </div>
    )
}
export default BreadCrumb