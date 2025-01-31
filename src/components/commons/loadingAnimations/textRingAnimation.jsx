import React from 'react'
import styled, { keyframes } from 'styled-components'

const tiltSpin = keyframes`
  from {
    transform: rotateY(0) rotateX(30deg);
  }
  to {
    transform: rotateY(1turn) rotateX(30deg);
  }
`
const spin = keyframes `
  from {
    transform: rotateY(0);
  }
  to {
    transform: rotateY(1turn);
  }
`

const RingAnimationStyled = styled.div`
  background: #000;
  color: #3df1f1;
  font: 1em Dosis, sans-serif;
  height: 100vh;
  width: 100%;
  line-height: 1.5;
  perspective: 40em;
  align-item: center;
  .preloader {
    display: flex;
    animation: ${tiltSpin} 8s linear infinite;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    width: 17em;
    height: 17em;
  }
  .preloader, .preloader__ring {
    transform-style: preserve-3d;
  }
  .preloader__ring {
    animation: ${spin} 4s linear infinite;
    font-size: 2em;
    position: relative;
    height: 3rem;
    width: 1.5rem;
    left: 50%;
    top: 50%;
  }
  .preloader__ring:nth-child(even) {
    animation-direction: reverse;
  }
  .preloader__sector {
    font-weight: 600;
    position: absolute;
    top: 0;
    left: 0;
    text-align: center;
    text-transform: uppercase;
    transform: translateZ(7rem);
  }
  .preloader__sector, .preloader__sector:empty:before {
    display: inline-block;
    width: 100%;
    height: 100%;
  }
  .preloader__sector:empty:before {
    background: linear-gradient(transparent 45%, currentColor 45% 55%, transparent 55%);
    content: '';
  }
  .preloader__sector:nth-child(2) {
    transform: rotateY(12deg) translateZ(7rem);
  }
  .preloader__sector:nth-child(3) {
    transform: rotateY(24deg) translateZ(7rem);
  }
  .preloader__sector:nth-child(4) {
    transform: rotateY(36deg) translateZ(7rem);
  }
  .preloader__sector:nth-child(5) {
    transform: rotateY(48deg) translateZ(7rem);
  }
  .preloader__sector:nth-child(6) {
    transform: rotateY(60deg) translateZ(7rem);
  }
  .preloader__sector:nth-child(7) {
    transform: rotateY(72deg) translateZ(7rem);
  }
  .preloader__sector:nth-child(8) {
    transform: rotateY(84deg) translateZ(7rem);
  }
  .preloader__sector:nth-child(9) {
    transform: rotateY(96deg) translateZ(7rem);
  }
  .preloader__sector:nth-child(10) {
    transform: rotateY(108deg) translateZ(7rem);
  }
  .preloader__sector:nth-child(11) {
    transform: rotateY(120deg) translateZ(7rem);
  }
  .preloader__sector:nth-child(12) {
    transform: rotateY(132deg) translateZ(7rem);
  }
  .preloader__sector:nth-child(13) {
    transform: rotateY(144deg) translateZ(7rem);
  }
  .preloader__sector:nth-child(14) {
    transform: rotateY(156deg) translateZ(7rem);
  }
  .preloader__sector:nth-child(15) {
    transform: rotateY(168deg) translateZ(7rem);
  }
  .preloader__sector:nth-child(16) {
    transform: rotateY(180deg) translateZ(7rem);
  }
  .preloader__sector:nth-child(17) {
    transform: rotateY(192deg) translateZ(7rem);
  }
  .preloader__sector:nth-child(18) {
    transform: rotateY(204deg) translateZ(7rem);
  }
  .preloader__sector:nth-child(19) {
    transform: rotateY(216deg) translateZ(7rem);
  }
  .preloader__sector:nth-child(20) {
    transform: rotateY(228deg) translateZ(7rem);
  }
  .preloader__sector:nth-child(21) {
    transform: rotateY(240deg) translateZ(7rem);
  }
  .preloader__sector:nth-child(22) {
    transform: rotateY(252deg) translateZ(7rem);
  }
  .preloader__sector:nth-child(23) {
    transform: rotateY(264deg) translateZ(7rem);
  }
  .preloader__sector:nth-child(24) {
    transform: rotateY(276deg) translateZ(7rem);
  }
  .preloader__sector:nth-child(25) {
    transform: rotateY(288deg) translateZ(7rem);
  }
  .preloader__sector:nth-child(26) {
    transform: rotateY(300deg) translateZ(7rem);
  }
  .preloader__sector:nth-child(27) {
    transform: rotateY(312deg) translateZ(7rem);
  }
  .preloader__sector:nth-child(28) {
    transform: rotateY(324deg) translateZ(7rem);
  }
  .preloader__sector:nth-child(29) {
    transform: rotateY(336deg) translateZ(7rem);
  }
  .preloader__sector:nth-child(30) {
    transform: rotateY(348deg) translateZ(7rem);
  }
`

const TextRingAnimationLoading = (props) => {
  return (
    <RingAnimationStyled className='preloader'>
      <div className='preloader__ring'>
        <div className='preloader__sector'>L</div>
        <div className='preloader__sector'>o</div>
        <div className='preloader__sector'>a</div>
        <div className='preloader__sector'>d</div>
        <div className='preloader__sector'>i</div>
        <div className='preloader__sector'>n</div>
        <div className='preloader__sector'>g</div>
        <div className='preloader__sector'>.</div>
        <div className='preloader__sector'>.</div>
        <div className='preloader__sector'>.</div>
        <div className='preloader__sector'></div>
        <div className='preloader__sector'></div>
        <div className='preloader__sector'></div>
        <div className='preloader__sector'></div>
        <div className='preloader__sector'></div>
        <div className='preloader__sector'></div>
        <div className='preloader__sector'></div>
        <div className='preloader__sector'></div>
        <div className='preloader__sector'></div>
        <div className='preloader__sector'></div>
        <div className='preloader__sector'></div>
        <div className='preloader__sector'></div>
        <div className='preloader__sector'></div>
        <div className='preloader__sector'></div>
        <div className='preloader__sector'></div>
        <div className='preloader__sector'></div>
        <div className='preloader__sector'></div>
        <div className='preloader__sector'></div>
        <div className='preloader__sector'></div>
        <div className='preloader__sector'></div>
      </div>
      <div className='preloader__ring'>
        <div className='preloader__sector'>L</div>
        <div className='preloader__sector'>o</div>
        <div className='preloader__sector'>a</div>
        <div className='preloader__sector'>d</div>
        <div className='preloader__sector'>i</div>
        <div className='preloader__sector'>n</div>
        <div className='preloader__sector'>g</div>
        <div className='preloader__sector'>.</div>
        <div className='preloader__sector'>.</div>
        <div className='preloader__sector'>.</div>
        <div className='preloader__sector'></div>
        <div className='preloader__sector'></div>
        <div className='preloader__sector'></div>
        <div className='preloader__sector'></div>
        <div className='preloader__sector'></div>
        <div className='preloader__sector'></div>
        <div className='preloader__sector'></div>
        <div className='preloader__sector'></div>
        <div className='preloader__sector'></div>
        <div className='preloader__sector'></div>
        <div className='preloader__sector'></div>
        <div className='preloader__sector'></div>
        <div className='preloader__sector'></div>
        <div className='preloader__sector'></div>
        <div className='preloader__sector'></div>
        <div className='preloader__sector'></div>
        <div className='preloader__sector'></div>
        <div className='preloader__sector'></div>
        <div className='preloader__sector'></div>
        <div className='preloader__sector'></div>
      </div>
    </RingAnimationStyled>
  )
}

export default TextRingAnimationLoading