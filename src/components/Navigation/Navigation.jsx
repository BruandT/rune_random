import React from 'react';

function Navigation() {
    return (
        <>
        <nav className='h-screen w-16 flex flex-col items-center pt-5 bg-skin-bg-secondary text-skin-base'>
            <button>
                <img src="/assets/logo_menu.png" alt="icon menu" />
            </button>
            <button className='mt-20'>
                <img src="/assets/logo_rune.png" alt="icon rune" />
            </button>
        </nav>
        </>
    );
}

export default Navigation;