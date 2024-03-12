import React from 'react'
import Navbar from '../Components/Navbar'
import DashBoard , { Sidebar } from '../Components/DashBoard'

import '../Styles/dashboard.css'

const DashBoardPage = () => {
    return (
        <>
            <Navbar/>
            <DashBoard/>
        </>
    )
}

export default DashBoardPage