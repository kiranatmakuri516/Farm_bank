import React from 'react'
import '../App.css';
import Edit from '../editimg.gif'
export default function Img() {
    return (
        <div className="imgcontainer">
            <img src="https://thumbs.dreamstime.com/b/indian-farmer-holding-crop-plant-his-wheat-field-indian-farmer-holding-crop-plant-his-wheat-field-123557695.jpg" className='userpic' />
            <img src={Edit} className="editimg" />
        </div>
    );
}
