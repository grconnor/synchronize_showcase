import Link from 'next/link';
import { Add, HambergerMenu } from 'iconsax-react';
import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

import headerData from '@mocks/headerData';

const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <header className="header">
      <Container>
        <Navbar
          expand="lg"
          className="navbar-light"
          onToggle={(expanded: boolean) => setIsExpanded(expanded)}
          expanded={isExpanded}
        >
          <div className="header-home">
            <Link href="/" passHref>
              <Navbar.Brand>{/* Set up svg component import */}</Navbar.Brand>
            </Link>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" aria-expanded="true">
            {isExpanded ? (
              <Add color="black" size={24} />
            ) : (
              <HambergerMenu color="black" size={24} />
            )}
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="header-items">
              {headerData.map(({ title, url }, idx) => {
                return (
                  <Nav.Link key={idx} href={url}>
                    {title}
                  </Nav.Link>
                );
              })}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
};

export default Header;
