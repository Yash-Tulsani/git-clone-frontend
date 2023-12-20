import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import { CChart } from "@coreui/react-chartjs";
import WDCList from '../../WDCList/WDCList';

const UserAdmin = () => {

    const [userData, setuserData] = useState(null);

    const [userSold, setuserSold] = useState(null);
    const [userPurchase, setuserPurchase] = useState(null);

    const [transactionTab, setTransactionTab] = useState(0);

    const [totalInvestment, setTotalInvestment] = useState(0);

    const [displayTab, setdisplayTab] = useState("Investment");

    const {currentUser} = useSelector(state=> state.user);

    console.log(currentUser, "This is the current user");

    const [graphData, setGraphData] = useState(null)

    useEffect(() => {
      
        axios.get(`${process.env.REACT_APP_API_URL}/api/user/getUser/${currentUser._id}`)
            .then(res=>res.data)
            .then(data=>{
                console.log(data,"This is the data");
                setuserData(data);
                let newGraphData = {
                    labels: [],
                    datasets:[
                        {
                            label: 'Percentage Stake Invested',
                            backgroundColor: '#0E2E50',
                            data: [20021, 30001, 7500],
                        },
                        {
                            label: 'Amount Invested',
                            backgroundColor: '#0E2E50',
                            data: [20021, 30001, 7500],
                        },
                        {
                            label: 'Income Obtained By Selling on FPO',
                            backgroundColor: '#0E2E50',
                            data: [20021, 30001, 7500],
                        },
                        {
                            label: 'Income Obtained from FPO',
                            backgroundColor: '#0E2E50',
                            data: [20021, 30001, 7500],
                        }
                    ]
                };

                data.FPO_invested.map(elm=>{
                    newGraphData.labels.push(elm.name);
                    newGraphData.datasets[0].data = data.percentageStake;
                    newGraphData.datasets[1].data = data.investedAmount;
                    
        
                    const sum1 = data.investedAmount.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
         
                    setTotalInvestment(sum1)
                    newGraphData.datasets[2].data = data.fpoSellIncome;
                    newGraphData.datasets[3].data = data.fpoIncome;
                })

                setGraphData(newGraphData)

            })
            .catch(err=>{
                console.log(err);
            })
    
    }, []);

    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_API_URL}/api/transaction/${currentUser._id}`)
            .then(res=>res.data)
            .then(data=>{
                console.log(data,"This is the data");
                

            })
            .catch(err=>{
                console.log(err);
            })
    })
    
  return (
    <div className='p-6'>
        {
            userData ? (<div>
                {/* <div className='mb-3'>
                    <Button onClick={(event)=>setdisplayTab("Investment")}>Investments</Button>
                    <Button onClick={(event)=>setdisplayTab("Transactions History")}>Transactions History</Button>
                </div> */}

                {
                    displayTab=="Investment" && (<div>
                        <div className='text-2xl font-bold mb-3'>Personal Investments Analysis</div>
                        <div className=''>
                            <div className='text-lg font-semibold mb-3 me-3'>Total Investments: &#8377;{totalInvestment}</div>
                            <div className='text-lg font-semibold mb-3 me-3'>Total Income Earned from Selling via FPO: &#8377;{userData.totalSellIncome}</div>
                            <div className='text-lg font-semibold mb-3 me-3'>Total Income Earned from FPO: &#8377;{userData.totalFPOIncome}</div>
                        </div>
     
                        <div className='grid grid-cols-12'>
                            {
                                graphData.datasets.map(elm=>{
                                    return (
                                        <div className='col-span-6 mx-10'>
                                            <CChart
                                            type="bar"
                                            data={{ 
                                                labels: graphData.labels,
                                                datasets: [
                                                    elm,
                                                ], 
                                            }}
    
                                        />
                                        </div>
                                    )
                                })
                            }
    
    
                        </div>
    
                    </div>)
                }
                {
                    displayTab=="Transactions History" && (
                        <div>
                            <div className='text-2xl font-bold mb-3'>Transactions</div>
                            <Button onClick={(event)=>setTransactionTab(0)}>Sold Transactions</Button>
                            <Button onClick={(event)=>setTransactionTab(1)}>Purchased Transactions</Button>
                            {
                                transactionTab==0 && (
                                    <div className='p-3'>
                                        <WDCList />
                                    </div>
                                )
                            }
                            {
                                transactionTab==1 && (
                                    <div className='p-3'>
                                        <WDCList />
                                    </div>
                                )
                            }
                        </div>
                    )
                }
                
                
            </div>) : (<div>Loading...</div>)
        }
    </div>
  )
}

export default UserAdmin