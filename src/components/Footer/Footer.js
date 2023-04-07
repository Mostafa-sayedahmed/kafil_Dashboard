import React from 'react';
import  style  from './Footer.module.css';

const Footer = () => {

    // footer
    return (
        <div>
            <footer className={`${style.footer}  text-center text-lg-start fixed-bottom`}>
                <div className="text-center p-4 text-white">
                   جميع الحقوق محفوظة
                </div>

            </footer>

        </div>
    );
}

export default Footer;
