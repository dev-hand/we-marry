import React from 'react'
import styled, { Keyframes, keyframes } from 'styled-components'
import { random } from 'lodash'
import { useIsClient } from 'usehooks-ts'

// const color = [
//   '#90D3D1',
//   '#EAA586',
//   '#577BAF',
//   '#83678E',
//   '#EEC75D',
//   '#53B199',
//   '#BD454F',
//   '#D1DBAA',
// ]
// const color = ['#1F8EF0', '#24D59E', '#24D59E59', '#1F8EF073']
const color = ['#EAA586', '#D8BEB2', '#F8ECE7']

interface FlowerProps {
  shape: number
  color: string
  delay: number
  location: number
  duration: { drop: number; fly: number }
  direction: number
}

export const Flower: React.FC = () => {
  const isClient = useIsClient()
  if (!isClient) return null
  const data = []
  let count = 0
  for (let i = 0; i < 50; i++) {
    if (count === color.length) count = 0
    data.push({
      color: color[count],
      shape: random(1, 5),
      delay: random(0, 3000),
      location: random(0, window.innerWidth),
      duration: { fly: random(6000, 8000), drop: random(3000, 4000) },
      direction: random(0, 1),
    })
    count++
  }

  return (
    <Main>
      {data.map((item, index) => (
        <Box
          key={index}
          shape={item.shape}
          color={item.color}
          delay={item.delay}
          location={item.location}
          duration={item.duration}
          direction={item.direction}
        />
      ))}
    </Main>
  )
}

const Box: React.FC<FlowerProps> = ({
  shape,
  color,
  delay,
  location,
  duration,
  direction,
}) => {
  const fly = keyframes`
    0% {
      left: ${location}px;
      transform: ${
        direction === 0
          ? 'rotate(20deg) rotateX(0deg)'
          : 'rotate(-20deg) rotateX(0deg)'
      };
    }
    50% {
      left: ${location - 80}px;
      transform: ${
        direction === 0
          ? 'rotate(-20deg) rotateX(180deg)'
          : 'rotate(20deg) rotateX(180deg)'
      };
    }
    100% {
      left: ${location}px;
      transform: ${
        direction === 0
          ? 'rotate(20deg) rotateX(0deg)'
          : 'rotate(-20deg) rotateX(0deg)'
      };
    }
`
  return (
    <Paper
      fly={fly}
      shape={shape}
      color={color}
      delay={delay}
      location={location}
      duration={duration}
    />
  )
}

const Paper = styled.span<{
  fly: Keyframes
  shape: number
  color: string
  delay: number
  location: number
  duration: { drop: number; fly: number }
}>`
  ${(p) =>
    p.shape === 1
      ? `width:14px;height:30px;`
      : p.shape === 2
      ? `width:20px;height:20px;`
      : p.shape === 3
      ? `width:15px;height:15px;border-radius:100%;`
      : p.shape === 4
      ? `width:20px;height:20px;clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);`
      : `width:20px;height:20px;clip-path: polygon(50% 0%, 100% 50%, 0% 50%, 0% 50%);`}
  opacity: 0;
  position: absolute;
  left: ${(p) => p.location}px;
  background-color: ${(p) => p.color};
  @keyframes drop {
    0% {
      top: 0;
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      top: 100%;
    }
  }
  animation-name: ${(p) => p.fly}, drop;
  animation-duration: ${(p) => p.duration.fly}ms, ${(p) => p.duration.drop}ms;
  animation-timing-function: ease-in-out, ease-in;
  animation-iteration-count: 1;
  animation-delay: 0ms, ${(p) => p.delay}ms;
`

const Main = styled.div`
  z-index: 2;
  width: 100%;
  height: 100%;
  position: fixed;
  pointer-events: none;
`
