import React, { useEffect, useState } from 'react';
import './App.css';
import Detail from './components/detail';
import Investor from './components/investor'
import History from './components/history'
import Edit from './components/edit';
import axios from 'axios';
function App() {
    const [arr, setArr] = useState([]);
    const [brr, setbrr] = useState([]);
    const [crr, setcrr] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:5000").then((res) => {
            setArr(res.data);
        })
        axios.get("http://localhost:5000/room").then((res) => {
            setbrr(res.data);
        })
        axios.get("http://localhost:5000/posts").then((res) => {
            setcrr(res.data);
        })
    }, []);
    return (
        <>
            {(arr.length === 1) ?
                <Detail name={arr[0].name} phone={arr[0].phone} adhaar={arr[0].adhaar} city={arr[0].city} state={arr[0].state} room={brr.length} crr={crr} /> : <Detail />}
            <Investor />
            <History />
            {(arr.length === 1) ?
                <Edit name={arr[0].name} phone={arr[0].phone} adhaar={arr[0].adhaar} city={arr[0].city} state={arr[0].state} room={brr.length} /> : <Edit />}
            <Investor />
        </>
    );
}
export default App;

//name={arr[0].name} phone={arr[0].phone} adhaar={arr[0].adhaar} city={arr[0].city} state={arr[0].state} 