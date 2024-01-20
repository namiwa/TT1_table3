import { useState } from 'react'
import DashboardTable from '../components/DashboardTable';
import './Dashboard.css';
import NavBar from '../components/Navbar';

import { Button } from "@mui/material";
import DestinationModal from "../components/DestinationModal";

const Dashboard = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpen = () => setOpenModal(true);

  return (
    <section className='dashboard-page'>
      <Button onClick={handleOpen}>Open modal</Button>
      {openModal && (
        <DestinationModal openModal={openModal} setOpenModal={setOpenModal} />
      )}
        <DashboardTable />
    </section>
  )
}

export default Dashboard
