import React, {useEffect} from 'react'
import {FiSettings} from 'react-icons/fi';
import {TooltipComponent} from '@syncfusion/ej2-react-popups'
import { useTheme } from '@mui/material';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    // States 
    const theme=useTheme();

    // Styles
    const settingButtonStyle={
        backgroundColor: theme.palette.secondary.main,
        borderRadius: '50%',
    }

    // Local variables
    const activeMenu= false;

  return (
    <div className='flex relative'>
        <div className='fixed right-4 bottom-4' style={{zIndex:'100'}}>
            <TooltipComponent content='Settings' position='Top'>
                <button type="button" style={settingButtonStyle} className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white'>
                    <FiSettings/>
                </button>
            </TooltipComponent>
        </div>
        {
            activeMenu?(
                <div className='w-72 fixed sidebar'>
                    {/* <DashboardSidebar/> */}
                    Sidebar
                </div>
            ):(
                <div className='w-0'>

                </div>
            )
        }
        
    </div>
  )
}

export default Dashboard