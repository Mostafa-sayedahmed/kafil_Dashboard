
import * as React from 'react';
import {Link} from 'react-router-dom';
import { useMemo, useState, useEffect, useRef } from "react";
import '../../index.css'



function SideBar(){

    // sidebar
    const [isActive, setActive] = useState("false");

    const ToggleClass = () => {
      setActive(!isActive); 
    };

    return(
        <div>
  
            <div className={`side-bar  ${isActive ? "null" : "opened"}`}>
               
                <button type="button" className="btn side-bar__btn-toggler d-block d-lg-none" onClick={ToggleClass}>
                    <i className="fa fa-angle-right open font-weight-bold" aria-hidden="true"></i>
                    <i className="fa fa-times close" aria-hidden="true"></i>
                </button>
                
                <div className={` header__navbar `}>
                    <ul className="list-unstyled d-block w-100">
                        <li className="has-sub ">
                            <Link to="/">
                                {/* <i className="fas fa-tachometer-alt"></i> */}
                                المستخدمين
                                <span className="bot-line"></span>
                            </Link>
                            <ul className="header3-sub-list list-unstyled">
                                <li>
                                    <Link to="/">الحسابات</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="has-sub ">
                            <Link  to="/contest">
                                {/* <i className="fas fa-tachometer-alt"></i> */}
                                المسابقات
                                <span className="bot-line"></span>
                            </Link>
                            <ul className="header3-sub-list list-unstyled">
                                <li>
                                    <Link to="/contest">كل المسابقات</Link>
                                </li>
                                <li>
                                    <Link to="/createContest">انشاء مسابقة</Link>
                                </li>  
                            </ul>
                        </li>

                        <li className="has-sub ">
                            <Link  to="/project">
                                {/* <i className="fas fa-tachometer-alt"></i> */}
                                المشاريع
                                <span className="bot-line"></span>
                            </Link>
                            <ul className="header3-sub-list list-unstyled">
                                <li>
                                    <Link to="/project">كل المشاريع</Link>
                                </li>
                                <li>
                                    <Link to="/createProject">انشاء مشروع</Link>
                                </li>

                            </ul>
                        </li>
                    </ul>
                </div>
            
            </div> 
        </div>

    )

}

export default SideBar ;