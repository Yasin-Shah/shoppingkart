import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ButtonContainer } from './Button'
import SearchBox from './SearchBox';
import { ProductConsumer } from "../context"
// import Logout from './Logout';
export default class Navbar extends Component {
  render() {
    return (
      <ProductConsumer>
        {data => {
          const { openSideNav, getProductType, links } = data;

          let NavLink = links.map((link, i) => {
            return (
              <li key={i} className="nav-item mx-5 pl-5">
                <Link to="/" className="nav-link "
                  activestyle={{ color: 'red' }}
                  onClick={() => getProductType({ link })}>
                  {link}
                </Link>
              </li>
            )
          });
          return (
            <NavWrapper className="navbar navbar-expand-sm  navbar-dark px-sm-5">

              <div className="container">
                {/* <div className="row"> */}
                {/* <div className="col-sm-12"> */}
                <div className="body">
                <div className="box">
                  <div className="inner">
                    <span>GadgetKart</span>
                  </div>
                  <div className="inner">
                    <span>GadgetKart</span>
                  </div>
                </div>
                </div>

                <i className="fas fa-bars"
                  style={{ fontSize: "20px", color: '#fff' }}
                // onClick={() => openSideNav()}
                />
                <ul className=" navbar-nav align-items-center">
                  <li className="nav-item mx-5 pl-5 ">
                    <Link to="/" className="nav-link">
                      GadgetKart
                    </Link>
                  </li>
                  {NavLink}
                </ul>

                <Link to="/cart" className="ml-auto">
                  <span className="mr-2">
                    <i className="fas fa-cart-plus " />
                  </span>
                  Cart¸
                  </Link>
                {/* </div> */}
              </div>

              {/* <Logout /> */}
              {/* </div> */}
            </NavWrapper>
          )
        }}

      </ProductConsumer>
    )
  }
}

const NavWrapper = styled.nav`
  // background: var(--mainBlue);
  background: rgba(45,45,45,0.98);
  font-size:20px;
  @media (max-width: 576px) {
    .navbar-nav {
      flex-direction: column !important;
    }
  }

  .body {
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: grey;
  }
  
  .box {
    display: flex;
  }
  
  .box .inner {
    width: 68px;
    height: 60px;
    line-height: 70px;
    font-size: 1.5em;
    font-family: sans-serif;
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
  }
  
  .box .inner:first-child {
    background-color: white;
    color: darkred;
    transform-origin: right;
    transform: perspective(100px) rotateY(-15deg);
  }
  
  .box .inner:last-child {
    background-color: black;
    color: antiquewhite;
    transform-origin: left;
    transform: perspective(100px) rotateY(15deg);
  }
  
  .box .inner span {
    position: absolute;
    animation: marquee 5s linear infinite;
  }
  
  .box .inner:first-child span {
    animation-delay: 2.5s;
    left: -100%;
  }
  
  @keyframes marquee {
    from {
      left: 100%;
    }
  
    to {
      left: -100%;
    }
  }
`;