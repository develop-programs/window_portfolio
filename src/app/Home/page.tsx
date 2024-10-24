import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import React from 'react'

export default function page() {
    return (
        <div className='relative h-screen' style={{
            backgroundImage: `url("./wallapaper_home.jpg")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>
            <div className='absolute bottom-0 w-full h-12 bg-slate-800 border-t-2 border-slate-700 flex justify-between items-center px-2'>
                <div>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="default">
                                <div>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="18" height="18" rx="9" fill="url(#paint0_radial_285_6)" />
                                        <defs>
                                            <radialGradient id="paint0_radial_285_6" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(2.88 3.15) rotate(50.5412) scale(17.1355)">
                                                <stop stopColor="#FFD54A" />
                                                <stop offset="1" stopColor="#F37A0F" />
                                            </radialGradient>
                                        </defs>
                                    </svg>
                                </div>
                            </Button>
                        </SheetTrigger>
                        <SheetContent>

                        </SheetContent>
                    </Sheet>
                </div>
                <div className='flex items-center gap-4'>
                    <Popover>
                        <PopoverTrigger >
                            <svg width="108" height="108" viewBox="0 0 108 108" className='size-6' fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_362_100)">
                                    <path d="M4 4.76191C4 2.13198 6.13198 0 8.7619 0H46.8571C49.4871 0 51.619 2.13198 51.619 4.7619V42.8571C51.619 45.4871 49.4871 47.619 46.8571 47.619H8.76191C6.13198 47.619 4 45.4871 4 42.8571V4.76191Z" fill="url(#paint0_radial_362_100)" />
                                    <path d="M56.381 4.76191C56.381 2.13198 58.5129 0 61.1429 0H99.2381C101.868 0 104 2.13198 104 4.7619V42.8571C104 45.4871 101.868 47.619 99.2381 47.619H61.1429C58.5129 47.619 56.381 45.4871 56.381 42.8571V4.76191Z" fill="url(#paint1_radial_362_100)" />
                                    <path d="M56.381 57.1429C56.381 54.5129 58.5129 52.381 61.1429 52.381H99.2381C101.868 52.381 104 54.5129 104 57.1429V95.2381C104 97.868 101.868 100 99.2381 100H61.1429C58.5129 100 56.381 97.868 56.381 95.2381V57.1429Z" fill="url(#paint2_radial_362_100)" />
                                    <path d="M4 57.1429C4 54.5129 6.13198 52.381 8.7619 52.381H46.8571C49.4871 52.381 51.619 54.5129 51.619 57.1429V95.2381C51.619 97.868 49.4871 100 46.8571 100H8.76191C6.13198 100 4 97.868 4 95.2381V57.1429Z" fill="url(#paint3_radial_362_100)" />
                                    <path d="M8.7619 0.5H46.8571C49.2109 0.5 51.119 2.40812 51.119 4.7619V42.8571C51.119 45.2109 49.2109 47.119 46.8571 47.119H8.76191C6.40812 47.119 4.5 45.2109 4.5 42.8571V4.76191C4.5 2.40812 6.40812 0.5 8.7619 0.5ZM61.1429 0.5H99.2381C101.592 0.5 103.5 2.40812 103.5 4.7619V42.8571C103.5 45.2109 101.592 47.119 99.2381 47.119H61.1429C58.7891 47.119 56.881 45.2109 56.881 42.8571V4.76191C56.881 2.40812 58.7891 0.5 61.1429 0.5ZM61.1429 52.881H99.2381C101.592 52.881 103.5 54.7891 103.5 57.1429V95.2381C103.5 97.5919 101.592 99.5 99.2381 99.5H61.1429C58.7891 99.5 56.881 97.5919 56.881 95.2381V57.1429C56.881 54.7891 58.7891 52.881 61.1429 52.881ZM8.7619 52.881H46.8571C49.2109 52.881 51.119 54.7891 51.119 57.1429V95.2381C51.119 97.5919 49.2109 99.5 46.8571 99.5H8.76191C6.40812 99.5 4.5 97.5919 4.5 95.2381V57.1429C4.5 54.7891 6.40812 52.881 8.7619 52.881Z" stroke="url(#paint4_radial_362_100)" />
                                </g>
                                <defs>
                                    <filter id="filter0_d_362_100" x="0" y="0" width="108" height="108" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="4" />
                                        <feGaussianBlur stdDeviation="2" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_362_100" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_362_100" result="shape" />
                                    </filter>
                                    <radialGradient id="paint0_radial_362_100" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(0.666669 -2.14285) rotate(45.3811) scale(151.863)">
                                        <stop offset="0.0366106" stopColor="#F2F2F2" />
                                        <stop offset="0.3" stopColor="#9BD1DD" />
                                        <stop offset="0.47" stopColor="#80C6D6" />
                                        <stop offset="0.695" stopColor="#22A2BF" />
                                        <stop offset="0.944311" stopColor="#0C839D" />
                                    </radialGradient>
                                    <radialGradient id="paint1_radial_362_100" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(0.666669 -2.14285) rotate(45.3811) scale(151.863)">
                                        <stop offset="0.0366106" stopColor="#F2F2F2" />
                                        <stop offset="0.3" stopColor="#9BD1DD" />
                                        <stop offset="0.47" stopColor="#80C6D6" />
                                        <stop offset="0.695" stopColor="#22A2BF" />
                                        <stop offset="0.944311" stopColor="#0C839D" />
                                    </radialGradient>
                                    <radialGradient id="paint2_radial_362_100" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(0.666669 -2.14285) rotate(45.3811) scale(151.863)">
                                        <stop offset="0.0366106" stopColor="#F2F2F2" />
                                        <stop offset="0.3" stopColor="#9BD1DD" />
                                        <stop offset="0.47" stopColor="#80C6D6" />
                                        <stop offset="0.695" stopColor="#22A2BF" />
                                        <stop offset="0.944311" stopColor="#0C839D" />
                                    </radialGradient>
                                    <radialGradient id="paint3_radial_362_100" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(0.666669 -2.14285) rotate(45.3811) scale(151.863)">
                                        <stop offset="0.0366106" stopColor="#F2F2F2" />
                                        <stop offset="0.3" stopColor="#9BD1DD" />
                                        <stop offset="0.47" stopColor="#80C6D6" />
                                        <stop offset="0.695" stopColor="#22A2BF" />
                                        <stop offset="0.944311" stopColor="#0C839D" />
                                    </radialGradient>
                                    <radialGradient id="paint4_radial_362_100" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(4 1.50001) rotate(45.1458) scale(138.947)">
                                        <stop stopColor="#BBDDE5" />
                                        <stop offset="1" stopColor="#74C1D2" />
                                    </radialGradient>
                                </defs>
                            </svg>
                        </PopoverTrigger>
                        <PopoverContent sideOffset={20} className='w-[30rem]' side='top' align='start'></PopoverContent>
                    </Popover>
                    <Popover>
                        <PopoverTrigger>
                            <svg width="31" height="32" viewBox="0 0 31 32" className='size-7' fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_362_102)">
                                    <path d="M5 10.6483C5.00004 6.52268 7.91445 2.97165 11.9608 2.16695C16.0072 1.36224 20.0585 3.528 21.637 7.33968C23.2156 11.1514 21.8817 15.5473 18.4511 17.839C15.0206 20.1307 10.4489 19.6799 7.53201 16.7623C5.91075 15.1406 4.99998 12.9414 5 10.6483Z" fill="#635F5F" stroke="#FAFAFA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M22.2935 19.2942L26 23.0007" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                                <defs>
                                    <filter id="filter0_d_362_102" x="-1" y="0" width="33" height="33" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="4" />
                                        <feGaussianBlur stdDeviation="2" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_362_102" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_362_102" result="shape" />
                                    </filter>
                                </defs>
                            </svg>
                        </PopoverTrigger>
                        <PopoverContent>
                        </PopoverContent>
                    </Popover>
                </div>
                <div>
                    <svg width="26" height="26" viewBox="0 0 26 26" className='size-5' fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.8742 22.7501C14.6837 23.0784 14.4103 23.351 14.0814 23.5404C13.7525 23.7299 13.3796 23.8296 13 23.8296C12.6204 23.8296 12.2475 23.7299 11.9186 23.5404C11.5897 23.351 11.3163 23.0784 11.1258 22.7501M19.5 8.66675C19.5 6.94284 18.8152 5.28954 17.5962 4.07055C16.3772 2.85157 14.7239 2.16675 13 2.16675C11.2761 2.16675 9.62279 2.85157 8.40381 4.07055C7.18482 5.28954 6.5 6.94284 6.5 8.66675C6.5 16.2501 3.25 18.4167 3.25 18.4167H22.75C22.75 18.4167 19.5 16.2501 19.5 8.66675Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>
        </div>
    )
}
