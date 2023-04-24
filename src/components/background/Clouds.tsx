import React from 'react'
import styled from 'styled-components'

export default function Clouds() {
    return (
        <BackgroundStyled>
            <div className="container">
                <div id="cloud-intro"></div>
            </div>
        </BackgroundStyled>
    )
}
const BackgroundStyled = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
    html, body, .container{
  width: 100%;
  height: 100%;
  min-width: 500px;
  min-height: 500px;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
.container{
  background-color: #007ced;
	background: linear-gradient(to bottom, #4D515D 1%,#70727E 100%);
}
#cloud-intro{
  position: relative;
  height: 100%;
  background: url(https://static.radulescu.me/examples/clouds/clouds1000.png);
  background: url(https://static.radulescu.me/examples/clouds/clouds1000.png) 0 200px,
              url(https://static.radulescu.me/examples/clouds/clouds1200_1.png) 0 300px,
              url(https://static.radulescu.me/examples/clouds/clouds1000_blur3.png) 100px 250px; 
	animation: wind 20s linear infinite;
}
@keyframes wind{
  0% {
    background-position: 0 200px, 0 300px, 100px 250px;
  }
  100% {
    background-position: 1000px 200px, 1200px 300px, 1100px 250px;
  }

}
`