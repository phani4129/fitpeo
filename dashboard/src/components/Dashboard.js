// src/components/Dashboard.js (continued)
import ActivityChart from './ActivityChart';
import RecentOrdersTable from './RecentOrdersTable';
import CustomerFeedback from './CustomerFeedback';
import SummaryCard from './SummaryCard';
import styled from 'styled-components';
import { FaShoppingCart, FaTruck, FaTimes, FaDollarSign } from 'react-icons/fa';

const DashboardContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const SummarySection = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Dashboard = () => {
  return (
    <DashboardContainer>
      <SummarySection>
        <SummaryCard title="Total Orders" value="75" icon={<FaShoppingCart />} />
        <SummaryCard title="Total Delivered" value="70" icon={<FaTruck />} />
        <SummaryCard title="Total Cancelled" value="5" icon={<FaTimes />} />
        <SummaryCard title="Net Profit" value="$6759.25" icon={<FaDollarSign />} />
      </SummarySection>
      <ActivityChart />
      <RecentOrdersTable />
      <CustomerFeedback />
    </DashboardContainer>
  );
};

export default Dashboard;
