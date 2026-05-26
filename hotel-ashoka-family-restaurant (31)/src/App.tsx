/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import AnimatedRoutes from './components/AnimatedRoutes';

const ThreeDBackground = React.lazy(() => import('./components/ThreeDBackground'));
const ChatWidget = React.lazy(() => import('./components/ChatWidget'));

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={null}>
        <ThreeDBackground />
      </Suspense>
      <div className="min-h-screen bg-brand-cream font-sans text-[#1a3c34] selection:bg-[#d4af37]/30 flex flex-col relative z-0">
        <Navbar />
        <main className="flex-1">
          <AnimatedRoutes />
        </main>
        <Footer />
        <Suspense fallback={null}>
          <ChatWidget />
        </Suspense>
      </div>
    </Router>
  );
}
