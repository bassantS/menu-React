import React, { useState } from "react";
import "../index.css";
import {
  Navbar,
  Nav,
  Container,
  Row,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";

const NavBar = ({ filterBySearch }) => {
  const [searchValue, setSearchValue] = useState("");
  const onSearch = () => {
    filterBySearch(searchValue);
    setSearchValue("");
  };
  return (
    <Row className="navBackgroundColor">
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#">
            <div className="brand-color">مطعم جديد</div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form className="d-flex">
              <FormControl
                type="text"
                placeholder="ابحث"
                className="mx-2"
                onChange={(e) => setSearchValue(e.target.value)}
                value={searchValue}
              />
              <Button className="btn-search" onClick={() => onSearch()}>
                بحث
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>
  );
};

export default NavBar;
