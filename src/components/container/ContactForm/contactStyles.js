import styled from 'styled-components';


const Wrapper = styled.div`
                width:33.2%;
                height:464px;
                background:#1e1e1e57;
                backdrop-filter: blur(50px);
                border-radius:1rem;
                position:relative;
                z-index:2;
                
               `;

const InnerWrap = styled.div`
                  width:88%;
                  margin:auto;
                  height:100%;
                  padding-top:1rem;
                  padding-bottom:1rem`

export {Wrapper,InnerWrap};