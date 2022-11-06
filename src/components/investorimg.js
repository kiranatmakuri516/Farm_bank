import React from 'react'
import '../App.css';
import Edit from '../editimg.gif'
export default function Img() {
    return (
        <div className="imgcontainer">
            <img src="https://www.openaccessgovernment.org/wp-content/uploads/2018/11/dreamstime_s_49033405.jpg" className='userpic' />
            <img src={Edit} className="editimg" />
        </div>
    );
}
