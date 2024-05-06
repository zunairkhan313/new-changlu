"use client"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../public/Images/White_Logo.png';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import "../Components/navbar.css"


function NavScrollExample() {
  const [header, setHeader] = useState(false);

  const scrollHeader = () => {
    if (window.scrollY >= 20) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollHeader);
    return () => {
      window.addEventListener('scroll', scrollHeader); 
    };
  }, []);

  return (
   

      <Navbar expand="lg" className={header ? 'fixed-top z-10 w-[100%] bg-green-900' : 'bg-green-900'} style={{marginTop: header ? -5 : '0px'}}>
        <Container fluid>
          <Link href={"/"}>
          <Image
            className='ml-5'
            width={100}
            src={logo}
            alt='logo'
            />
            </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
            </Nav>
            <div id='pagess' className='flex list-none m-5'>
              <Link href={"/"}>
                <p className='ml-5 font-bold text-white'>Home</p>
              </Link>
              <Link href={"/about"}>
                <p className='ml-5 font-bold text-white'>About Us</p>
              </Link>
              <Link href={"/product"}>
                <p className='ml-5 font-bold text-white'>Products</p>
              </Link>
              <Link href={"/contact"}>
                <p className='ml-5 font-bold text-white'>Contact Us</p>
              </Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
   
  );
}

export default NavScrollExample;
