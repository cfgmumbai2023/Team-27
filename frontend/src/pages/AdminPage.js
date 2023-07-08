import "../styles/AdminPage.css"
import Sidebar from "../components/Sidebar"
function AdminPage(props){
    return(
        <div id="page">
            <div id="header">
                Welcome Admin!
            </div>
            <Sidebar/>
        </div>
    )
}
export default AdminPage