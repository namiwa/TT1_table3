import { useState } from "react";
import DashboardTable from "../components/DashboardTable";
import "./Dashboard.css";
import { Button } from "@mui/material";
import NewDestinationModal from "../components/NewDestinationModal";
import EditDestinationModal from "../components/EditDestinationModal";

const Dashboard = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpen = () => setOpenModal(true);

  const [openEditModal, setOpenEditModal] = useState(false);
  const handleOpenEdit = () => setOpenEditModal(true);

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
      <button className="add-button">ADD ITINERARY</button>
      <DashboardTable />
    </section>
  );
};

export default Dashboard;
