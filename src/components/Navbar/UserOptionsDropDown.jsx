import React from "react";
import { Dropdown, Nav } from "react-bootstrap";
// import { Container } from './styles';
import { UserNavDropDownOptions } from "@coc/config/app.setting.user";

export default function UserOptionsDropDown() {
  const [toggleMenuUser, setToggleMenuUser] = React.useState(false);

  const handleToggleMenuUser = () => setToggleMenuUser(!toggleMenuUser);
  const getUserOptions = () =>
    UserNavDropDownOptions ? (
      <Dropdown.Menu show={toggleMenuUser} className="super-colors">
        {UserNavDropDownOptions.map(({ label, toggleClose, onClick }, k) => (
          <Dropdown.Item
            key={k}
            onClick={e => {
              if (toggleClose === true) setToggleMenuUser(!toggleMenuUser);
              if (typeof onClick === "function") onClick(e, label);
            }}
            eventKey={k}
          >
            {label}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    ) : null;
  return (
    <>
      {UserNavDropDownOptions ? (
        <>
          <Nav.Link
            className="align-self-end user-options-dropdown"
            onClick={handleToggleMenuUser}
          >
            <i className="icon-user" />
          </Nav.Link>
          {getUserOptions()}
        </>
      ) : null}
    </>
  );
}
