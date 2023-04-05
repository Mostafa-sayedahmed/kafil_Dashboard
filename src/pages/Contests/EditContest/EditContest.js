
import * as React from 'react';
// import SideBar from '../../../components/FixedSideBar/SideBar';
import style from './EditContest.module.css';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { db } from '../../../Firebase/Firebase';
import { collection, addDoc} from "firebase/firestore";

function EditContest() {

// edit Contest
   
const navigate = useNavigate();

const { id } = useParams();

console.log(id);

const [name, setName] = useState('');
// const [comments, setComments] = useState('');
const [text, setText] = useState('');
const [type, setType] = useState('');
const [price, setPrice] = useState('');


const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
        const docRef = await addDoc(collection(db, "contests"), {name,text,type,price});
        console.log("Document written with ID: ", docRef.id);
        navigate("/contest");
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
                                <h2 className=""> تعديل المسابقة </h2>
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
                                        <strong>المسابقة:</strong>
                                        <input type="text" className="form-control"
                                         onChange={(e) => { setText(e.target.value) }}
                                        placeholder="المسابقة" />
                                    </div>
                                </div>

                                <div className="col-xs-6 col-sm-6 col-md-6 mb-3">
                                    <div className="form-group">
                                        <strong>النوع:</strong>
                                        <input type="text" className="form-control"
                                         onChange={(e) => { setType(e.target.value) }}
                                        placeholder="النوع" />
                                    </div>
                                </div>

                                <div className="col-xs-6 col-sm-6 col-md-6 mb-3">
                                    <div className="form-group">
                                        <strong>السعر:</strong>
                                        <input type="text" className="form-control"
                                         onChange={(e) => { setPrice(Number(e.target.value)) }}
                                        placeholder="السعر" />
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

export default EditContest;




