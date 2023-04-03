import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../../SharedPage/Header/Header';
import { useContext } from 'react';
import { AuthContex } from '../../UserContext/UserContext';
import UseSellar from '../../UseallHooks/UseSellar/UseSellar';
import UseBuyer from '../../UseallHooks/UseSellar/UseBuyer/UseBuyer';
import UseAdmin from '../../UseallHooks/UseAdmin/UseAdmin';
import './DashboardLayout.css';
const DashboardLayout = () => {
    const {user,logOut}=useContext(AuthContex)
  
    const [isSellar]=UseSellar(user?.email)
    const [isBuyer]=UseBuyer(user?.email)
    const [isAdmin]=UseAdmin(user?.email)
                  
    return (
        <div>
              <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ml-4">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side shadow-slate-200 shadow-lg">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-32 bg-rose-500 lg:bg-slate-200 lg:w-80 text-base-content">
                        <li><Link to="/dashboard">dashboard</Link></li>
                        <>
                             {isSellar && <>  
                                <li><Link to="/dashboard/addproduct">Add Products</Link></li>
                                <li><Link to="/dashboard/myproduct">My Products</Link></li>
                                </>
                                }

                                {
                                    isBuyer &&<> 
                                    <li><Link to="/dashboard/orders">My orders</Link></li>
                                    <li><Link to="/dashboard/wishlist">WishList</Link></li>
                                    </>
                                }
                                {isAdmin && <> 
                                    <li><Link to="/dashboard/sellers">All Sellers</Link></li>
                                <li><Link to="/dashboard/buyers">All Buyers </Link></li>
                                <li><Link to="/dashboard/report">Reported Items</Link></li>
                                </>

                                }
                            </>
                      

                    </ul>

                </div>
            </div>
        </div>
       
    );
};

export default DashboardLayout;