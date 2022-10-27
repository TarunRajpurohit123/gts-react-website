import styled from "styled-components";

const Hero = styled.section`margin-top:var(--sTop)`;
const Left = styled.section`width:40%`;
const Right = styled.section`width:50%;
position:relative;
&::after{
    content:"";
    width:5rem;
    height:5rem;
    position:absolute;
    top:-25px;
    border-radius:50%;
    left:
    -25px;
    z-index:-999999 !important;
    background: linear-gradient(90deg, rgba(45,170,226,1) 35%, rgba(149,53,142,1) 100%);
}

&::before{
    content:"";
    width:5rem;
    height:5rem;
    position:absolute;
    bottom:-25px;
    border-radius:50%;
    right:
    -25px;
    z-index:-999999 !important;
    background: linear-gradient(90deg, rgba(45,170,226,1) 35%, rgba(149,53,142,1) 100%);
}`;
const Container = styled.section`
                                 width:100%;
                                 margin:auto;
                                 display:flex;
                                 justify-content:space-between;
                                 align-items:center`;

export { Hero, Container, Left, Right }