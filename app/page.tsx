'use client';

import { Suspense } from 'react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '../components/Header';
import Opening from '../components/Opening';
import CoupleStory from '../components/CoupleStory';
import EventDetails from '../components/EventDetails';
import WeedingMoments from '../components/WeedingMoments';
import WeddingStory from '../components/WeddingStory';
import WeedingGift from '../components/WeedingGift';
import WeddingWishes from '../components/WeddingWishes';
import ClosingPage from '../components/ClosingPage';
import ScrollAnimations from '../components/ScrollAnimations';
import BackgroundMusic from '../components/BackgroundMusic';

function HomeContent() {
  const searchParams = useSearchParams();
  const [isOpened, setIsOpened] = useState(false);
  const openingRef = useRef<HTMLDivElement | null>(null);

  const guestName = useMemo(() => {
    const rawName = searchParams.get('to');
    if (!rawName) return undefined;
    return rawName.replace(/\+/g, ' ').trim();
  }, [searchParams]);

  useEffect(() => {
    const overflowValue = isOpened ? 'auto' : 'hidden';
    document.documentElement.style.overflowY = overflowValue;
    document.body.style.overflowY = overflowValue;

    if (isOpened) {
      document.documentElement.style.backgroundColor = '#ffffff';
      document.body.style.backgroundColor = '#ffffff';
    } else {
      document.documentElement.style.backgroundColor = '';
      document.body.style.backgroundColor = '';
    }

    return () => {
      document.documentElement.style.overflowY = 'auto';
      document.body.style.overflowY = 'auto';
      document.documentElement.style.backgroundColor = '';
      document.body.style.backgroundColor = '';
    };
  }, [isOpened]);

  useEffect(() => {
    if (!isOpened || !openingRef.current) return;

    openingRef.current.scrollIntoView({ behavior: 'auto', block: 'start' });
  }, [isOpened]);

  const handleOpenInvitation = () => {
    setIsOpened(true);
  };

  return (
    <main className="w-full flex flex-col items-center px-0 sm:px-4 py-0 overflow-visible bg-white">
      <BackgroundMusic active={true} />
      <Header onOpenInvitation={handleOpenInvitation} guestName={guestName} />
      
      {isOpened && (
        <div ref={openingRef} className="invitation-flow invite-open-enter w-full bg-white">
          <ScrollAnimations active={isOpened} />

          <div data-scroll-section data-motion="lift-merge">
            <Opening />
          </div>
          <div data-scroll-section data-motion="soft-right">
            <CoupleStory />
          </div>
          <div data-scroll-section data-motion="soft-left">
            <EventDetails />
          </div>
          <div data-scroll-section data-motion="soft-up">
            <WeedingMoments />
          </div>
          <div data-scroll-section data-motion="soft-right">
            <WeddingStory />
          </div>
          <div data-scroll-section data-motion="soft-left">
            <WeedingGift />
          </div>
          <div data-scroll-section data-motion="soft-up">
            <WeddingWishes />
          </div>
          <div data-scroll-section data-motion="lift-merge">
            <ClosingPage />
          </div>
        </div>
      )}
    </main>
  );
}

export default function Home() {
  return (
    <Suspense fallback={null}>
      <HomeContent />
    </Suspense>
  );
}
