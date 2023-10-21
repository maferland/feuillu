'use client'
import {motion} from 'framer-motion'

const fruits = 75

const images = [
  '/apple_1.png',
  '/apple_2.png',
  '/apple_3.png',
  '/apple_4.png',
  '/apple_5.png',
  '/apple_1.png',
  '/apple_2.png',
  '/apple_3.png',
  '/apple_4.png',
  '/apple_5.png',
  '/pears_1.png',
  '/pears_2.png',
  '/pears_3.png',
  '/pears_4.png',
]

function interval(min: number, max: number) {
  // min and max included
  return Math.random() * (max - min + 1) + min
}

function sample(...array: number[]) {
  return array[Math.floor(Math.random() * array.length)]
}

const props = () =>
  ({
    className: 'absolute top-0',
    initial: {
      translateY: '-20vh',
      left: `${interval(0, 100)}%`,
      width: `${interval(90, 144)}px`,
      zIndex: sample(5, 15),
    },
    animate: {
      translateY: `${interval(80, 120)}vh`,
      rotate: `${interval(-360, 360)}deg`,
    },
    transition: {
      type: 'spring',
      duration: interval(4, 10),
      delay: interval(0, 5),
      repeat: Infinity,
      repeatType: 'mirror',
      stiffness: interval(10, 25),
      mass: interval(5, 15),
    },
  } as const)

export default function Home() {
  return (
    <main className="flex h-screen flex-row items-center justify-center bg-indigo-300 relative overflow-hidden">
      <h1 className="text-white/50 text-[10vw] tracking-widest z-10">
        FEUILLU
      </h1>

      {new Array(fruits).fill(0).map((_, i) => (
        <motion.img
          key={i}
          src={images[(i % images.length) + 1]}
          {...props()}
        />
      ))}
    </main>
  )
}
