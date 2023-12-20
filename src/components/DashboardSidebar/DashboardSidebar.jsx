import React from 'react'
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

const DashboardSidebar = (props) => {
  return (
    <Sidebar>
      <Menu
        menuItemStyles={{
          button: {
            // the active class will be added automatically by react router
            // so we can use it to style the active menu item
            [`&.active`]: {
              backgroundColor: '#13395e',
              color: '#b6c8d9',
            },
          },
        }}
      >
        <MenuItem onClick={()=>props.setTabFunction(0)}> Add WDC</MenuItem>
        <MenuItem onClick={()=>props.setTabFunction(1)}> Add Service</MenuItem>
        <MenuItem onClick={()=>props.setTabFunction(2)}> WDC Admin</MenuItem>
        <MenuItem onClick={()=>props.setTabFunction(3)}> Statistics</MenuItem>
      </Menu>
    </Sidebar>
  )
}

export default DashboardSidebar