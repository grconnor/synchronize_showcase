import Link from 'next/link';
import React, { useState } from 'react';
import { Add, HambergerMenu } from 'iconsax-react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

import headerData from '@mocks/headerData';
import HeaderLogo from '@icons/synchronize_logo.svg';
import Arrow from '@icons/arrow_up_right.svg';

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
              <Navbar.Brand>
                <HeaderLogo alt="Link to Home Page" height={50} width={315} />
              </Navbar.Brand>
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
              <Nav.Link href="/get-started" className="header-items-cta">
                <Button className="get-started">
                  <span className="get-started-content">
                    Get Started
                    <Arrow />
                  </span>
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
};

export default Header;
