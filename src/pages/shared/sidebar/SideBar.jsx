import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';


const SideBar = () => {
    const { collapseSidebar } = useProSidebar();
    return (
        <div style={{ display: 'flex', height: '100%' }}>
      <Sidebar>
        <Menu>
          <Link to={'/addProduct'}><MenuItem> Add Product</MenuItem></Link>
          <Link to={'/manage'}><MenuItem> Manage</MenuItem></Link>
          <Link to={'/order'}><MenuItem> My Order</MenuItem></Link>
        </Menu>
      </Sidebar>
      <main>
        <button onClick={() => collapseSidebar()}>Collapse</button>
      </main>
    </div>
    );
};

export default SideBar;