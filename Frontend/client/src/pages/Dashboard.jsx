import DashboardTable from '../components/DashboardTable';
import './Dashboard.css';
import NavBar from '../components/Navbar';

const Dashboard = () => {

  return (
    <section className='dashboard-page'>
        <NavBar />
        <DashboardTable />
    </section>
  )
}

export default Dashboard