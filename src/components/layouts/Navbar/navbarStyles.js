import styled from 'styled-components';

const Container = styled.section`background:rgba(0, 0, 0, 0.349);`

const Navbar = styled.section`width:94%;
                              margin:auto;
                              display:flex;
                              justify-content:space-between;
                              align-items:center;
                              padding-top:1rem;
                              padding-bottom:1rem;
                              `

const Logo = styled.img`width:10rem;`;

const Navigations = styled.ul`display:flex;
                              list-style-type:none;
                              width:60%;
                              justify-content:space-between;
                              `

export { Container,Navbar,Logo,Navigations};