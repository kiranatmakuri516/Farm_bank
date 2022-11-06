import React from "react";
import "../App.css";
export default function investor(props) {
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
                        <p>collabrated with KIRAN</p>
                    </div>
                    <div className="box">
                        <div className="headbox">
                            <p className="headingg">EARNINGS</p>
                        </div>
                        <br />
                        <p>LAST YEAR: ₹50000</p>
                    </div>
                </div>
            </div>
        </>

    )
};

investor.defaultProps = {
    name: "Username",
    phone: "0000000000",
    city: "------",
    state: "-------",
};
