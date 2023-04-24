import React from 'react'
import styled from 'styled-components'

export default function Snow() {
  return (
    <BackgroundStyled>
      <div className="snow_wrap">
        <div className="snow"></div>
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
    *,*:after,*:before{
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	-ms-box-sizing: border-box;
	box-sizing: border-box;
}
body{
	font-family: arial;
	font-size: 16px;
	margin: 0;
	background: #fff;
	color: #000;
}

.snow_wrap{
	height: 100vh;
	width: 100%;
	background:#0d709b;
	background-size: cover;
	background-position: center bottom; 
	overflow: hidden;
	position: relative;
}

.snow, .snow:before, .snow:after {
  position: absolute;
  top: -650px;
  left: 0;
  bottom: 0;
  right: 0;
  background-image: 
  radial-gradient(4px 4px at 100px 50px, #fff , transparent), 
  radial-gradient(6px 6px at 200px 150px, #fff, transparent), 
  radial-gradient(3px 3px at 300px 250px, #fff 50%, transparent), 
  radial-gradient(4px 4px at 400px 350px, #fff 50%, transparent), 
  radial-gradient(6px 6px at 500px 100px, #fff 50%, transparent), 
  radial-gradient(3px 3px at 50px 200px, #fff 50%, transparent), 
  radial-gradient(4px 4px at 150px 300px, #fff 50%, transparent), 
  radial-gradient(6px 6px at 250px 400px, #fff 50%, transparent), 
  radial-gradient(3px 3px at 350px 500px, #fff 50%, transparent);
  background-size: 650px 650px;
  animation: snow 3s linear infinite;
  content: "";
}

.snow:after {
  margin-left: -250px;
  opacity: 0.5;
  filter: blur(2px);
  animation-duration: 6s;
  animation-direction: reverse;
}

.snow:before {
	margin-left: -350px;
  opacity: 0.7;
  filter: blur(1px);
  animation-duration: 9s;
  animation-direction: reverse;
}

@keyframes snow {
  to {
    transform: translateY(650px);
  }
}
`