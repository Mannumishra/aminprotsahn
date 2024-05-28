import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar';
import axios from 'axios';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const Testimonial = () => {
    const [data, setData] = useState([]);

    const deleteRecord = async (_id) => {
        try {
            const res = await axios.delete(`null/testimonial/${_id}`)
            if (res.status === 200) {
                toast.success("Testimonial Deleted Successfully");
                getApiData();
            }
        } catch (error) {
            console.log(error);
        }
    };

    const getApiData = async () => {
        try {
            const res = await axios.get("null/testimonial");
            setData(res.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getApiData();
    }, []);

    return (
        <div className="container-fluid"  style={{marginTop:70}}>
            <div className="row">
                <div className="side col-md-3 bg-dark">
                    <Sidebar />
                </div>
                <div className="col-md-9 mb-5">
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <h2>Job Seekers</h2>
                        <Link to='/createtestimonial' className='btn btn-dark'>Create Testimonial</Link>
                    </div>
                    <table className='table table-bordered table-responsive mt-5'>
                        <thead>
                            <tr>
                                <th>S.No.</th>
                                <th>Applicant Name</th>
                                <th>Email ID</th>
                                <th>Resume</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={index}>
                                    <td></td>
                                    <td></td>
                                    <td><img src={''} alt="" style={{ height: 50 }} /></td>
                                    <td><img src={''} alt="" style={{ height: 50 }} /></td>
                                    <td><Link to={`/updatetestimonial/${item._id}`} className='btn btn-success'>Edit</Link></td>
                                    <td><button className='btn btn-danger' onClick={() => deleteRecord(item._id)}>Delete</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
