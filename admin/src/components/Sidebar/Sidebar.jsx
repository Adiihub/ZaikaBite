import { NavLink } from "react-router-dom";
import { assets } from "../../assets/assets";
import "./Sidebar.css";

const Sidebar = () => {
  return <div className="sidebar">
    <div className="sidebar-options">
        <NavLink to='/add' className="sidebar-option">
            <img src={assets.add_icon} alt="" />
            <p>Add Item</p>
        </NavLink>
        <NavLink to='/list' className="sidebar-option">
            <img src={assets.order_icon} alt="" />
            <p>List Items</p>
        </NavLink>
        <NavLink to='/orders' className="sidebar-option">
            <img src={assets.order_icon} alt="" />
            <p>Orders</p>
        </NavLink>
        {/* <div className="sidebar-option">
            <img src={assets.order_icon} alt="" />
            <p>Order</p>
        </div> */}
    </div>
  </div>;
};

export default Sidebar;
