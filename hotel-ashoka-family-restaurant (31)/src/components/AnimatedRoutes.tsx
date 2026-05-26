import React, { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';

import Home from '../pages/Home';
const Menu = lazy(() => import('../pages/Menu'));
const Reservation = lazy(() => import('../pages/Reservation'));
const FAQ = lazy(() => import('../pages/FAQ'));
const Contact = lazy(() => import('../pages/Contact'));
const About = lazy(() => import('../pages/About'));
const Gallery = lazy(() => import('../pages/Gallery'));
const Events = lazy(() => import('../pages/Events'));

const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.9,
    rotateX: 15,
  },
  in: {
    opacity: 1,
    scale: 1,
    rotateX: 0,
  },
  out: {
    opacity: 0,
    scale: 1.1,
    rotateX: -15,
  }
};

const pageTransition = {
  type: "spring" as const,
  stiffness: 100,
  damping: 20,
  mass: 1
};

const Fallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-brand-cream">
    <div className="w-12 h-12 border-4 border-[#c9a34e]/30 border-t-[#c9a34e] rounded-full animate-spin"></div>
  </div>
);

const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransition}
  >
    {children}
  </motion.div>
);

export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      {/* @ts-ignore - key is required for AnimatePresence to work with Routes */}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/about" element={<Suspense fallback={<Fallback />}><PageWrapper><About /></PageWrapper></Suspense>} />
        <Route path="/menu" element={<Suspense fallback={<Fallback />}><PageWrapper><Menu /></PageWrapper></Suspense>} />
        <Route path="/gallery" element={<Suspense fallback={<Fallback />}><PageWrapper><Gallery /></PageWrapper></Suspense>} />
        <Route path="/events" element={<Suspense fallback={<Fallback />}><PageWrapper><Events /></PageWrapper></Suspense>} />
        <Route path="/reservation" element={<Suspense fallback={<Fallback />}><PageWrapper><Reservation /></PageWrapper></Suspense>} />
        <Route path="/faq" element={<Suspense fallback={<Fallback />}><PageWrapper><FAQ /></PageWrapper></Suspense>} />
        <Route path="/contact" element={<Suspense fallback={<Fallback />}><PageWrapper><Contact /></PageWrapper></Suspense>} />
      </Routes>
    </AnimatePresence>
  );
}
