import styled from 'styled-components'


const BL = styled.div`width:100%;
                      height:5200px;
                      display:flex;
                      position:absolute;
                      left:0;
                      top:0;
                      z-index:-999999`

const Drill = styled.div`width:16.66%;
                         height:100%;
                         border-right:1px solid var(--card)`

export {
    BL,Drill
}