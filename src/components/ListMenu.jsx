import { FaUserFriends } from "react-icons/fa"; 
import { IoMdList } from "react-icons/io"; 
import { MdDashboard } from "react-icons/md"; 
import { Link, NavLink } from "react-router-dom";
import { MdFastfood } from "react-icons/md";
import { MdError } from "react-icons/md";

export default function ListMenu() {
    const menuClass = ({ isActive }) =>
        `flex cursor-pointer items-center rounded-xl p-4  space-x-2
        ${isActive ? 
            "text-hijau bg-green-200 font-extrabold" : 
            "text-gray-600 hover:text-hijau hover:bg-green-200 hover:font-extrabold"
        }`

    return (
            <div id="sidebar-menu" className="mt-10">
                <ul id="menu-list" className="space-y-3">
                    <li>
	                    <NavLink id="menu-1" to="/" className={menuClass}>
                            
                            <MdDashboard />Dashboard</NavLink>
	                  </li>
                    <li>
	                    <NavLink id="menu-2" to="/orders" className={menuClass}>
                            
                            <IoMdList />Orders</NavLink>
	                  </li>
	                <li>
	                    <NavLink id="menu-3" to="/customers" className={menuClass}>
                            
                            <FaUserFriends />Customers</NavLink>
	                  </li>
	                <li>
	                    <NavLink id="menu-4" to="/users" className={menuClass}>
                            
                            <FaUserFriends />Users</NavLink>
	                  </li>
                    <li>
	                    <NavLink id="menu-5" to="/products" className={menuClass}>
                            
                            <MdFastfood />Products</NavLink>
	                  </li>
                </ul>
            </div>
    );
}
