import { useState } from "react";
import DashboardTable from "../components/DashboardTable";
import DashboardTable from '../components/DashboardTable';
import './Dashboard.css';
import { Button } from "@mui/material";
import NewDestinationModal from "../components/NewDestinationModal";
import EditDestinationModal from "../components/EditDestinationModal";
import AddNewItinerary from "../components/AddNewItinerary";

const Dashboard = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpen = () => setOpenModal(true);

  const [openEditModal, setOpenEditModal] = useState(false);
  const handleOpenEdit = () => setOpenEditModal(true);

  const [openNewItinModal, setOpenNewItinModal] = useState(false);
  const handleNewItinerary = () => setOpenNewItinModal(true);

  return (
    <section className="dashboard-page container">
      <Button onClick={handleOpen}>Open modal</Button>
      {openModal && (
        <NewDestinationModal
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      )}
      <Button onClick={handleOpenEdit}>Open edit modal</Button>
      {openEditModal && (
        <EditDestinationModal
          openModal={openEditModal}
          setOpenModal={setOpenEditModal}
        />
      )}
      <Button className="add-button" onClick={handleNewItinerary}>
        Add new itinerary
      </Button>
      {openNewItinModal && (
        <AddNewItinerary
          openModal={openNewItinModal}
          setOpenModal={setOpenNewItinModal}
        />
      )}
      <DashboardTable />
    </section>
  );
};

export default Dashboard;
