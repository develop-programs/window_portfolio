import Image from 'next/image'
import React from 'react'

export default function Loading() {
    return (
        <div className='h-screen flex justify-center items-center'>
            <div className='flex flex-col items-center'>
                <div>
                    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 4.76191C0 2.13198 2.13198 0 4.7619 0H42.8571C45.4871 0 47.619 2.13198 47.619 4.7619V42.8571C47.619 45.4871 45.4871 47.619 42.8571 47.619H4.76191C2.13198 47.619 0 45.4871 0 42.8571V4.76191Z" fill="url(#paint0_radial_300_124)" />
                        <path d="M52.381 4.76191C52.381 2.13198 54.5129 0 57.1429 0H95.2381C97.868 0 100 2.13198 100 4.7619V42.8571C100 45.4871 97.868 47.619 95.2381 47.619H57.1429C54.5129 47.619 52.381 45.4871 52.381 42.8571V4.76191Z" fill="url(#paint1_radial_300_124)" />
                        <path d="M52.381 57.1429C52.381 54.5129 54.5129 52.381 57.1429 52.381H95.2381C97.868 52.381 100 54.5129 100 57.1429V95.2381C100 97.868 97.868 100 95.2381 100H57.1429C54.5129 100 52.381 97.868 52.381 95.2381V57.1429Z" fill="url(#paint2_radial_300_124)" />
                        <path d="M0 57.1429C0 54.5129 2.13198 52.381 4.7619 52.381H42.8571C45.4871 52.381 47.619 54.5129 47.619 57.1429V95.2381C47.619 97.868 45.4871 100 42.8571 100H4.76191C2.13198 100 0 97.868 0 95.2381V57.1429Z" fill="url(#paint3_radial_300_124)" />
                        <defs>
                            <radialGradient id="paint0_radial_300_124" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-3.33333 -2.14285) rotate(45.3811) scale(151.863)">
                                <stop offset="0.0366106" stopColor="#F2F2F2" />
                                <stop offset="0.3" stopColor="#9BD1DD" />
                                <stop offset="0.47" stopColor="#80C6D6" />
                                <stop offset="0.695" stopColor="#22A2BF" />
                                <stop offset="0.944311" stopColor="#0C839D" />
                            </radialGradient>
                            <radialGradient id="paint1_radial_300_124" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-3.33333 -2.14285) rotate(45.3811) scale(151.863)">
                                <stop offset="0.0366106" stopColor="#F2F2F2" />
                                <stop offset="0.3" stopColor="#9BD1DD" />
                                <stop offset="0.47" stopColor="#80C6D6" />
                                <stop offset="0.695" stopColor="#22A2BF" />
                                <stop offset="0.944311" stopColor="#0C839D" />
                            </radialGradient>
                            <radialGradient id="paint2_radial_300_124" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-3.33333 -2.14285) rotate(45.3811) scale(151.863)">
                                <stop offset="0.0366106" stopColor="#F2F2F2" />
                                <stop offset="0.3" stopColor="#9BD1DD" />
                                <stop offset="0.47" stopColor="#80C6D6" />
                                <stop offset="0.695" stopColor="#22A2BF" />
                                <stop offset="0.944311" stopColor="#0C839D" />
                            </radialGradient>
                            <radialGradient id="paint3_radial_300_124" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-3.33333 -2.14285) rotate(45.3811) scale(151.863)">
                                <stop offset="0.0366106" stopColor="#F2F2F2" />
                                <stop offset="0.3" stopColor="#9BD1DD" />
                                <stop offset="0.47" stopColor="#80C6D6" />
                                <stop offset="0.695" stopColor="#22A2BF" />
                                <stop offset="0.944311" stopColor="#0C839D" />
                            </radialGradient>
                        </defs>
                    </svg>
                </div>
                <div className='mt-52'>
                    <Image src="/loading-windows.gif" width={70} height={70} alt="loading-logo" loading="lazy" decoding='async' unoptimized={true} />
                </div>
            </div>
        </div>
    )
}
