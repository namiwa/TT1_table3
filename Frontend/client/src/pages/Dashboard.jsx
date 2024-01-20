import { useState } from 'react'
import DashboardTable from '../components/DashboardTable';
import './Dashboard.css';

import { Button } from "@mui/material";
import DestinationModal from "../components/DestinationModal";

const Dashboard = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpen = () => setOpenModal(true);
  return (
    <section className='dashboard-page container'>
      <Button onClick={handleOpen}>Open modal</Button>
      {openModal && (
        <DestinationModal openModal={openModal} setOpenModal={setOpenModal} />
      )}
        <button className='add-button'>ADD ITENARY</button>
        <DashboardTable />
    </section>
  )
}

export default Dashboard
