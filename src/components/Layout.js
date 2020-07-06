import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { Link } from '../styles'

const Wrapper = styled.div`
  display: grid;
  grid-template-areas: "sidebar header"
                       "sidebar content";
  grid-template-columns: 300px 1fr;
  grid-template-rows: 80px 1fr;
`
const Header = styled.header`
  grid-area: header;
  grid-row: auto;
  background: #3C4F5E;
  color: #fff;
`
const SideBar = styled.nav`
  grid-area: sidebar;
  height: 100%;
  min-height: 100vh;
  background: #3C4F5E;
  color: #fff;
  text-align: center;
`
const Content = styled.section`
  grid-area: content;
  display: block;
  padding: 20px 50px;
`
const Logo = styled.img`
  max-width: 180px;
  margin: 20px 0;
`
const Menu = styled.ul`
  margin: 0;
  padding: 0;
`
const MenuItem = styled.li`
  text-align: left;
  margin: 0;
  padding: 10px 50px;
  text-decoration: none;
  font-size: 20px;
`

export const Layout = ({ children }) => (
  <Wrapper>
    <Header />
    <SideBar>
      <Logo src="https://externalstorageaccount.blob.core.windows.net/recursos/img/auralogo.png" alt="logo" />
      <Menu>
        <MenuItem>Inicio</MenuItem>
        <NavLink exact activeClassName='current' to="/">
          <MenuItem>
            <Link to='/'>Reportes</Link>
          </MenuItem>
        </NavLink>
        <NavLink activeClassName='current' to='/listlogs'>
          <MenuItem>
            <Link to='/listlogs'>Logs</Link>
          </MenuItem>
        </NavLink>
      </Menu>
    </SideBar>
    <Content>
      {children}
    </Content>
  </Wrapper>
)