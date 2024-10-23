"use client";
import React from 'react'
import Loading from '@/components/custom/Loading';
import LockScreen from '@/components/custom/LockScreen';

export default function page() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div>
      {loading ? <Loading /> : <LockScreen />}
    </div>
  )
}