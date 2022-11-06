import React, { useRef, useEffect, useState } from "react";
import '../App.css';
import ReactDOM from "react-dom";
import Detail from './detail';
import axios from 'axios';
export default function Edit(props) {
    const a = useRef(null);
    const b = useRef(null);
    const c = useRef(null);
    const d = useRef(null);
    const [a_value, set_a_value] = useState("");
    const [b_value, set_b_value] = useState("");
    const [c_value, set_c_value] = useState("");
    const [d_value, set_d_value] = useState("");
    const update = async () => {
        console.log(a_value);
        await axios.post("http://localhost:5000/edit", {
            a: a_value,
            b: b_value,
            c: c_value,
            d: d_value
        }).then((res) => {
            if (res === 1)
                alert("updated successfully");
            else
                alert("Not updated");
        })
    }
    return (
        <div className='editdivmain' >
            <div className='edit1'>
                <div className="heading">
                    EDIT PROFILE
                </div>
                <div className="editform"  >
                    <div>
                        <div>
                            <p>NAME</p>
                            <p><input type="text" ref={a} placeholder={props.name} onChange={(e) => { set_a_value(e.target.value) }} /></p>
                        </div>
                        <div>
                            <p>PHONE</p>
                            <p><input type="text" ref={b} placeholder={props.phone} onChange={(e) => { set_b_value(e.target.value) }} /></p>
                        </div>
                        <div>
                            <p>CITY</p>
                            <p><input type="text" ref={c} placeholder={props.city} onChange={(e) => { set_c_value(e.target.value) }} /></p>
                        </div>
                        <div>
                            <p>STATE</p>
                            <p><input type="text" ref={d} placeholder={props.state} onChange={(e) => { set_d_value(e.target.value) }} /></p>
                        </div>
                        <div>
                            <p>EARNINGS</p>
                            <p><input type="text" /></p>
                        </div>
                        <br />
                        <div>
                            <p>CHANGE PROFILE PIC</p>
                            <p><input type="FILE" /></p>
                        </div>
                        <div>
                            <button onClick={update}>SUBMIT</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="edit2">
                <Detail />
            </div>
        </div>
    );
}

Edit.defaultProps = {
    NAME: "------NAME",
    AGE: "--- YEARS",
    PHONE: "0000000000",
    EXPERIENCE: "---YEARS",
    PROPERTY: "---ACRES"
}
