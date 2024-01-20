import { useState } from 'react'
import DashboardTable from '../components/DashboardTable';
import './Dashboard.css';

import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import NewDestinationModal from "../components/NewDestinationModal";
import EditDestinationModal from "../components/EditDestinationModal";
import AddNewItinerary from "../components/AddNewItinerary";

const Dashboard = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpen = () => setOpenModal(true);

  const navigate = useNavigate()
  const [openEditModal, setOpenEditModal] = useState(false);
  const handleOpenEdit = () => setOpenEditModal(true);

  const [openNewItinModal, setOpenNewItinModal] = useState(false);
  const handleNewItinerary = () => setOpenNewItinModal(true);

  return (
    <section className="dashboard-page container">
      <button className='add-button' onClick={handleOpen}>Add Destination</button>
      {openModal && (
        <NewDestinationModal
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      )}
      <button className='add-button' onClick={handleOpenEdit}>Edit Destination</button>
      {openEditModal && (
        <EditDestinationModal
          openModal={openEditModal}
          setOpenModal={setOpenEditModal}
        />
      )}

      {openNewItinModal && (
        <AddNewItinerary
          openModal={openNewItinModal}
          setOpenModal={setOpenNewItinModal}
        />
      )}
      <button className='add-button' onClick={() => {navigate("/itinerary");}}>Add Intinerary</button>
      <DashboardTable />
    </section>
  );
};

export default Dashboard;
