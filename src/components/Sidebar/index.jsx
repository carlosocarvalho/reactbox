import React from 'react'
import {SidebarContainer, SidebarWrapper} from './style'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


function Sidebar({routers}) {

    return (
       <SidebarWrapper>
         <SidebarContainer>
         <ul className="list-unstyled components">
            
            { routers.map(({path, label, icon}, k)=>(
                <li key={k}>
                <Link to={path}>
                {icon  ? <i className={icon}/> : null}
                &nbsp;{label}
                </Link>
            </li>
            ))}
            
            {/* <li>
                <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Pages</a>
                <ul className="collapse list-unstyled" id="pageSubmenu">
                    <li>
                        <a href="#">Page 1</a>
                    </li>
                    <li>
                        <a href="#">Page 2</a>
                    </li>
                    <li>
                        <a href="#">Page 3</a>
                    </li>
                </ul>
            </li> */}
            
        </ul>
        </SidebarContainer>
       </SidebarWrapper>
       
    )
}

Sidebar.propTypes = {
    routers: PropTypes.array
}

export default Sidebar;
