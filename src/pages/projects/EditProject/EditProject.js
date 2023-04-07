
import * as React from 'react';
// import SideBar from '../../../components/FixedSideBar/SideBar';
import style from './EditProject.module.css';
import axios from 'axios';
import Swal from "sweetalert2";
import { useState } from 'react';

import { useNavigate } from "react-router-dom";

import { db } from '../../../Firebase/Firebase';
import { collection, addDoc} from "firebase/firestore";

function EditProject(props) {

    // edit project
 
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [parag, setParag] = useState('');
    const [work, setWork] = useState('');

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const docRef = await addDoc(collection(db, "projects"), {name,parag, work});
            console.log("Document written with ID: ", docRef.id);
            navigate("/project");
        } catch (e) {
            console.error("Error adding document: ", e);
        }

        e.target.reset();
      };


    return (
        <>
            {/* <SideBar />
            <div className={`${style.page_content}`}> */}
            <div>
                <div className='container-fluid'>
                    <div className="row justify-content-center mx-1 mb-5">
                        <div className="col-lg-12 row my-4">
                            <div className='col-sm-12 col-lg-6 p-0'>
                                <h2 className="">تعديل المشروع</h2>
                            </div>
                        </div>
                        <form onSubmit={handleFormSubmit} className={`${style.create_accont}`}>
                            <div className="row">

                                <div className="col-xs-6 col-sm-6 col-md-6 mb-3">
                                    <div className="form-group">
                                        <strong>الاسم:</strong>
                                        <input type="text" className="form-control"
                                         onChange={(e) => { setName(e.target.value) }}
                                        placeholder="الاسم" />
                                    </div>
                                </div>

                                
                                <div className="col-xs-6 col-sm-6 col-md-6 mb-3">
                                    <div className="form-group">
                                        <strong>المشروع:</strong>
                                        <input type="text" className="form-control"
                                         onChange={(e) => { setParag(e.target.value) }}
                                        placeholder="المشروع" />
                                    </div>
                                </div>

                                <div className="col-xs-6 col-sm-6 col-md-6 mb-3">
                                    <div className="form-group">
                                        <strong>العمل:</strong>
                                        <input type="text" className="form-control"
                                         onChange={(e) => { setWork(e.target.value) }}
                                        placeholder="العمل" />
                                    </div>
                                </div>

                                <div className="col-xs-12 col-sm-12 col-md-12 text-center">
                                    <button type="submit" className={`btn ${style.btnCreate} mb-3`}>ارسال</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditProject;




