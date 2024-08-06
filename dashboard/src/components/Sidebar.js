// src/components/Sidebar.js
import React from 'react';
import { FaHome, FaChartBar, FaCog, FaUsers, FaSignOutAlt } from 'react-icons/fa';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 250px;
  height: 100vh;
  background-color: #2D2F41;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SidebarItem = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  color: #FFF;
  cursor: pointer;
  &:hover {
    background-color: #414357;
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarItem><FaHome style={{ marginRight: '10px' }} /> Dashboard</SidebarItem>
      <SidebarItem><FaChartBar style={{ marginRight: '10px' }} /> Analytics</SidebarItem>
      <SidebarItem><FaCog style={{ marginRight: '10px' }} /> Settings</SidebarItem>
      <SidebarItem><FaUsers style={{ marginRight: '10px' }} /> Users</SidebarItem>
      <SidebarItem><FaSignOutAlt style={{ marginRight: '10px' }} /> Logout</SidebarItem>
    </SidebarContainer>
  );
};

export default Sidebar;
