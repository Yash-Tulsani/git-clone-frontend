import React, { useRef, useEffect, useState } from 'react'
import "./Checkout.css"
import { useParams, useNavigate } from 'react-router-dom';
import axios from "axios";
// import CircularProgress from '@mui/material/CircularProgress';
import { IconButton, CircularProgress, Snackbar, Alert, Button, ButtonGroup } from '@mui/material';
import plusIcon from "./plus.png"
import minusIcon from "./minus.png"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {

    const params = useParams();
    console.log(params);

    const navigate = useNavigate();

    const [Data, setData] = useState(null);

    const [quantity, setQuantity] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);


    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/api/service/${params.id}`)
            .then(res => {
                console.log(res.data);
                setData(res.data);
                setQuantity(res.data.minQuantity);
                setTotalAmount(res.data.minQuantity * res.data.price)
            })
            .catch(err => {
                toast("Invalid Page. Not found. Redirecting You to Home Page");
                setTimeout(() => {
                    return navigate("/")
                }, 3000);
                console.log(err);
            })


    }, []);


    const [tab, setTab] = useState("service");


    const increaseQuantity = (event) => {
        if (quantity == Data.quantityLeft) {

            toast.warn(`Maximum Available Quantity is ${Data.quantityLeft}`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

        } else {
            setTotalAmount((quantity + 1) * Data.price);
            setQuantity(prev => prev + 1);
        }
    };

    const decreaseQuantity = (event) => {
        if (quantity == Data.minQuantity) {

            toast.warn(`Quantity should be more than minimum quantity`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } else {
            setTotalAmount((quantity - 1) * Data.price);
            setQuantity(prev => prev - 1);
        }
    }

    const ServiceContent = ()=>{

        return (
            <div>
                <div className='text-xl primaryTextFont'>{Data.name}</div>
                <div className='text-md'>{Data.type}</div>
                <div className='italic'>{`${Data.district}, ${Data.state}`}</div>
                <div className='mt-2'>{Data.description}</div>
            </div>
        )
    }
    const WdcContent = ()=>{

        return (
            <div>
                <div className='text-xl primaryTextFont'>{Data.WDC_id.name}</div>
                <div className='text-md'>{Data.type}</div>
                <div className='italic mb-3'>{`${Data.WDC_id.address}, ${Data.WDC_id.district}, ${Data.WDC_id.state}`}</div>
                <div className=''>{`Handled By: ${Data.FPO_id.head_name}`}</div>
                <div className=''>{`Contact No: ${Data.FPO_id.phoneNumber}`}</div>

            </div>
        )
    }
    const FpoContent = ()=>{

        return (
            <div>
                FPO Content
            </div>
        )
    }

    const selectedStyle = {
        backgroundColor: "#F58F3C",
        color: "white",
    };

    const unselectedStyle = {}

    return (
        <div className=''>
            <video autoPlay muted loop id="myVideo" className='background-video' >
                <source src="/video/droneFootage.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
            </video>
            <div className="overlay"></div>
            <div className='flex flex-row justify-center'>

                {
                    Data == null ?
                        (<div>
                            <CircularProgress color='secondary' size={100} className='mt-48' />
                        </div>)
                        : (
                            <div className='grid grid-cols-10 w-full mt-20 mx-4 md:mx-20 xl:mx-48 shadow-2xl'>
                                <div className='col-span-6 bg-white bg-opacity-60 p-4'>
                                    <div className='text-2xl text-[#d9680b] font-semibold border-b-2 border-black pb-2 mb-4'>
                                        <div className='flex flex-row justify-between'>
                                            <span className='primaryTextFont'>Service</span>
                                            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                                                <Button onClick={(event)=>setTab("service")} style={tab=="service" ? selectedStyle : unselectedStyle}>Service</Button>
                                                <Button onClick={(event)=>setTab("wdc")} style={tab=="wdc" ? selectedStyle : unselectedStyle}>WDC & FPO</Button>
                                                {/* <Button onClick={(event)=>setTab("fpo")}>FPO</Button> */}
                                            </ButtonGroup>
                                        </div>

                                    </div>
                                    <div className='grid grid-cols-8 gap-6'>
                                        <div className='col-span-3' style={{ overflow: "hidden"}}>
                                            <img src={`${Data.images[0]}`} style={{objectFit: "cover", height: "200px", objectPosition: "center"}} className='max-w-full' alt="" />                
                                        </div>
                                        <div className='col-span-5'>
                                            {tab=="service" && <ServiceContent/>}
                                            {tab=="wdc" && <WdcContent/>}
                                            {tab=="fpo" && <FpoContent/>}
                                        </div>
                            
                                    </div>
                                </div>
                                <div className='col-span-4 bg-white p-4'>
                                    <div className='primaryTextFont text-2xl text-[#d9680b] font-semibold border-b-2 border-black pb-2 mb-4'>Summary</div>
                                    <div className='flex flex-row justify-between items-center mb-10'>
                                        <div>
                                            <div className='text-lg'>{Data.name}</div>
                                            <div className='text-md italic'>{Data.type}</div>

                                        </div>
                                        <div className='text-2xl text-right'>
                                            &#8377;{Data.price}
                                        </div>
                                    </div>
                                    <div className='flex flex-row justify-between items-center border-b-2 border-black pb-2 mb-3'>
                                        <div className='flex flex-row justify-start items-center'>
                                            <IconButton onClick={decreaseQuantity}>
                                                <img src={minusIcon} alt="Decrease Icon" style={{ width: '20px', height: '20px' }} />
                                            </IconButton>
                                            <div className='text-xl'>{quantity}</div>
                                            <IconButton onClick={increaseQuantity}>
                                                <img src={plusIcon} alt="Decrease Icon" style={{ width: '20px', height: '20px' }} />
                                            </IconButton>
                                        </div>
                                        <div>
                                            <div className='italic'>x{quantity}</div>
                                        </div>

                                    </div>
                                    <div className='text-right text-2xl mb-3'>
                                        &#8377;{totalAmount}
                                    </div>
                                    <Button variant="contained" color='success' style={{ width: "100%" }}>Make Payment</Button>

                                </div>
                            </div>
                        )
                }


            </div>
            <ToastContainer />
        </div>
    )
}

export default Checkout