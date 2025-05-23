import { FaUserFriends } from "react-icons/fa"; 
import { IoMdList } from "react-icons/io"; 
import { MdDashboard } from "react-icons/md"; 

export default function ListMenu() {
    return (
            <div id="sidebar-menu" className="mt-10">
                <ul id="menu-list" className="space-y-3">
                    <li>
	                    <div id="menu-1" className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold">
                            
                            <MdDashboard />Dashboard</div>
	                  </li>
                    <li>
	                    <div id="menu-2" className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold">
                            
                            <IoMdList />Orders</div>
	                  </li>
	                  <li>
	                    <div id="menu-3" className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold">
                            
                            <FaUserFriends />Customers</div>
	                  </li>
                </ul>
            </div>
    );
}
