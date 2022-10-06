import { faChevronCircleLeft, faToggleOn,} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';


const SideBar = () => {
    const { collapseSidebar } = useProSidebar();
    return (
        <div style={{ display: 'flex', height: '100%',background:'blue'}}>
      <Sidebar>
        <Menu>
          <Link style={{color:'white'}} to={'/addProduct'}><MenuItem> Add Product</MenuItem></Link>
          <Link to={'/manage'}><MenuItem> Manage</MenuItem></Link>
          <Link to={'/order'}><MenuItem> My Order</MenuItem></Link>
        </Menu>
      </Sidebar>
      <main>
      <h2><FontAwesomeIcon icon={faChevronCircleLeft} onClick={() => collapseSidebar()}/></h2>
      </main>
    </div>
    );
};

export default SideBar;