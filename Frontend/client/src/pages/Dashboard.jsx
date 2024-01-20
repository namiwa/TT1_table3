import { useState } from 'react'
import DashboardTable from '../components/DashboardTable';
import './Dashboard.css';

import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import DestinationModal from "../components/DestinationModal";

const Dashboard = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpen = () => setOpenModal(true);

  const navigate = useNavigate()

  return (
    <section className='dashboard-page container'>
      <Button onClick={handleOpen}>Open modal</Button>
      {openModal && (
        <DestinationModal openModal={openModal} setOpenModal={setOpenModal} />
      )}
        <button className='add-button' onClick={() => {navigate("/itinerary");}}>ADD ITENARY</button>
        <DashboardTable />
    </section>
  )
}

export default Dashboard
