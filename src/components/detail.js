import React, { useRef, useEffect, useState } from "react";
import axios from 'axios';
import "../App.css";
export default function Profile(props) {
    const a = useRef(null);
    const b = useRef(null);
    const [a_value, set_a_value] = useState("");
    const [b_value, set_b_value] = useState("");
    const addpost = async () => {
        console.log(b_value);
        await axios.post("http://localhost:5000/addpost", {
            a: a_value,
            b: b_value,
        }).then((res) => {
            if (res === 1)
                alert("posted successfully");
            else
                alert("not added");
        })
    }
    return (
        <>
            <div className="bodydiv">
                <div className="container">
                    <img className="imgcontainer" src="https://thumbs.dreamstime.com/b/indian-farmer-holding-crop-plant-his-wheat-field-indian-farmer-holding-crop-plant-his-wheat-field-123557695.jpg"></img>
                    <div className="detaildiv">
                        <div className="f f1" >
                            <p>NAME:{props.name}</p>
                        </div>
                        <hr className="line" />
                        <div className="f">
                            <p>PHONE:{props.phone}</p>
                        </div>
                        <hr className="line" />
                        <div className="f">
                            <p>ADHAAR: {props.adhaar}</p>
                        </div>
                        <hr className="line" />
                        <div className="f">
                            <p>CITY:{props.city}</p>
                        </div>
                        <hr className="line" />
                        <div className="f f2" >
                            <p>STATE:{props.state}</p>
                        </div>
                    </div>
                </div>

                <div className="remaininginfo">
                    <div className="box">
                        <div className="headbox">
                            <p className="headingg">BIDDING ROOMS</p>
                        </div>
                        <br />
                        <p>ROOMS CREATED:{props.room}</p>
                    </div>
                    <div className="box">
                        <div className="headbox">
                            <p className="headingg">COLLABRATIONS</p>
                        </div>
                        <br />
                        <p>collabrated with mani revanth</p>
                    </div>
                    <div className="box">
                        <div className="headbox">
                            <p className="headingg">EARNINGS</p>
                        </div>
                        <br />
                        <p>LAST YEAR: ₹50000</p>
                    </div>
                </div>




                <div className="addpost">
                    <div className="heading headbox">ADD POST</div>
                    <center>
                        <br />
                        <input type="text" className="postpic" ref={a} placeholder="Add Url" style={{ textAlign: "center" }} onChange={(e) => { set_a_value(e.target.value) }} />
                        <input type="text" className="postdesc inpu" ref={b} placeholder="Add Description" style={{ textAlign: "center" }} onChange={(e) => { set_b_value(e.target.value) }} />
                        <button className="btnn" onClick={addpost}>Submit</button>
                        <br />
                        <br />
                    </center>
                </div>

                <br />

                <br />
                <div className="heading">POSTS</div>
                <br />
                <div className="posts">

                    {/* {props.crr.map((val, index) => {
                        return (
                            <div className="p1">
                                <div className='images'>
                                    <img src={val.img} className='postimg' />
                                </div>
                                <div className='content'>
                                    {val.desc}
                                </div>
                            </div>
                        )
                    })} */}
                </div>
            </div>
        </>
    );
}
Profile.defaultProps = {
    name: "Username",
    phone: "0000000000",
    city: "------",
    state: "-------",
};
