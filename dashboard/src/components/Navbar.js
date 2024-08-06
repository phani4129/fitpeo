// src/components/Navbar.js
import React from 'react';
import { FaSearch, FaBell, FaUserCircle } from 'react-icons/fa';
import styled from 'styled-components';

const NavbarContainer = styled.div`
  height: 60px;
  background-color: #1E1E2F;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  color: #FFF;
`;

const NavbarIcons = styled.div`
  display: flex;
  align-items: center;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <div>Dashboard</div>
      <NavbarIcons>
        <FaSearch style={{ marginRight: '20px' }} />
        <FaBell style={{ marginRight: '20px' }} />
        <FaUserCircle />
      </NavbarIcons>
    </NavbarContainer>
  );
};

export default Navbar;
