'use client'
import {motion} from 'framer-motion'

const fruits = 40

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
  return Math.random() * (max - min + 1) + min
}

function sample(...array: number[]) {
  return array[Math.floor(Math.random() * array.length)]
}

function classNames(...classes: Array<boolean | string | undefined>) {
  return classes.filter(Boolean).join(' ')
}

const props = (i: number) =>
  ({
    className: classNames('absolute top-0 md:block', i % 2 === 0 && 'hidden'),
    src: images[(i % images.length) + 1],
    initial: {
      translateY: '-25vh',
      left: `${(i / fruits) * 100}%`,
      width: `${interval(90, 144)}px`,
      zIndex: sample(5, 15),
    },
    animate: {
      translateY: `120vh`,
      rotate: `${interval(-360, 360)}deg`,
    },
    transition: {
      ease: 'easeOut',
      duration: interval(4, 8),
      delay: interval(0, 5),
      repeat: Infinity,
      // repeatType: 'mirror',
      // stiffness: interval(10, 25),
      // mass: interval(5, 15),
    },
  } as const)

export default function Home() {
  return (
    <main className="flex h-screen flex-row items-center justify-center bg-indigo-300 relative overflow-hidden">
      <h1 className="text-white/50 text-[10vw] tracking-widest z-10">
        feuillu
      </h1>

      {new Array(fruits).fill(0).map((_, i) => (
        <motion.img key={i} {...props(i)} />
      ))}
    </main>
  )
}
