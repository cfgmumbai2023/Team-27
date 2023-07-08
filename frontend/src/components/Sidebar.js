import { useEffect, useState } from "react";
import "../styles/AdminPage.css";
import { useLocation, useNavigate } from "react-router-dom";
function Sidebar() {
    const location = useLocation();
    const navigate = useNavigate();
    const {pathname} = location
    const [currentPath, setPath] = useState('Users')
    function buttonClick(path){
        console.log(path)
        navigate(`/admin/${path}`)
    }
    useEffect(() => {
        if(pathname==="/admin/user"){
            setPath("Users")
        }
        else{
            setPath("Videos")
        }
    }, [pathname])
	return (
		<div id="sidebar">
			<div
				id="sidebar_content"
				className={`${
					currentPath === "Users" ? "selected_content" : ""
				}` } onClick={buttonClick('user')}
			>
				Users
			</div>
			<div
				id="sidebar_content"
				className={`${
					currentPath === "Videos" ? "selected_content" : ""
				}`} onClick={buttonClick('videos')}
			>
				Videos
			</div>
		</div>
	);
}
export default Sidebar;
