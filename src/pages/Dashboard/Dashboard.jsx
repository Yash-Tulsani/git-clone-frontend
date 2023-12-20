import React, {useState} from 'react'
import DashboardSidebar from '../../components/DashboardSidebar/DashboardSidebar'

import { WdcCreationForm } from '../../components/DashboardComponents/WdcCreationForm/WdcCreationForm';
import { useSelector } from 'react-redux';
import AddServiceForm from '../../components/DashboardComponents/AddServiceForm/AddServiceForm';
import WDCAdmin from '../../components/DashboardComponents/WDCAdmin/WDCAdmin';
import ChartsComponent from '../../components/DashboardComponents/ChartsComponent/ChartsComponent';
import UserAdmin from '../../components/DashboardComponents/UserAdmin/UserAdmin';

const Dashboard = () => {

  const { currentUser } = useSelector(state => state.user)
  console.log(currentUser, "Here is the user");
  const [tab, setTab] = useState(0);

  const RenderingComponent = ()=>{

      return (
        <div>
          {
            tab==0 &&  <WdcCreationForm/>
          }
          {
            tab==1 &&  <AddServiceForm/>
          }
          { 
            tab==2 && <WDCAdmin/>
          }
          {
            tab==3 && <ChartsComponent />
          }
          {
            tab==4 && <UserAdmin />
          }
        </div>
        
      )

  }
  
  return (
    <div className='grid grid-cols-12'>
      <div className='col-span-2'>
        <DashboardSidebar setTabFunction={setTab}/>
      </div>
      <div className='col-span-10'>
        <RenderingComponent />
      </div>
    </div>
  )
}

export default Dashboard