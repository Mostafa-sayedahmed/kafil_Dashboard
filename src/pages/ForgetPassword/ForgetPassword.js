import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ForgetPassword.css';
import { db, auth } from '../../Firebase/Firebase';
import '../../index.css';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";

const ForgetPassword= () => {

    const [email, setEmail] = useState('');


    function showAlert(message, icon) {
        Swal.fire({
            title: message,
            icon: icon,
            showConfirmButton: false,
            timer: 2000
        });
    }


    const navigate = useNavigate();

    const handlePasswordReset = (email) => {
        auth.sendPasswordResetEmail(email)
            .then(() => {
                showAlert("Password reset email sent", "success")
                navigate("/login");
            })
            .catch((error) => {
            showAlert(" An error occurred while sending the password reset email", "error")
            });
    };

return(<>      
        <div className="container">
        <div className="row m-4 bg-light">
            <div className="aside-right col-md-6 p-3 bg-white pt-5">
            <h2 className="title text-center text-black fw-bold mt-5">اعادة تعيين كلمة المرور</h2>

            <form  onSubmit={(e) => {
                    e.preventDefault();
                    handlePasswordReset(email);
                    }}>
                <label for="floatingEmail" className="p-2">البريد الالكتروني</label><br />
                <div className="form-floating">
                <input
                    required
                    type="email"
                    className="form-control"
                    id="floatingEmail"
                    placeholder="البريد الألكتروني"
                    onChange={(e) => setEmail(e.target.value)}
                />
                </div>
                <button type="submit"
                className="btn bg-success text-white w-100 mt-2">
                اعادة تعيين كلمة السر
                </button>
                <div className='d-flex justify-content-end'>
                <Link to='/Login' type="button" className="text-decoration-none text-success">دخول؟</Link>
                </div>
              
            </form>
            
            </div>
            <div className="aside-left col-md-6">
            <img src="https://kafiil.com/modules/base/img/static/forget-pass.svg" alt="imagelogin" className="w-100" />
            </div>
        </div>
        </div>
    </>);
};

export default ForgetPassword;

