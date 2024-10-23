"use client";
import React from 'react'
import Loading from '@/components/custom/Loading';
import LockScreen from '@/components/custom/LockScreen';
import LoginScreen from '@/components/custom/LoginScreen';

export default function page() {
  const [loading, setLoading] = React.useState(true);
  const [isLocked, setIsLocked] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <div>
      {loading ? <Loading /> : <>
        <LockScreen />
      </>}
    </div>
  )
}