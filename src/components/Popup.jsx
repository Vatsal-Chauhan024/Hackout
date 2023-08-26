import React, { useEffect, useState } from 'react';
import { Popup } from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const PopupExample = () => {
    const [open, setOpen] = useState(true)
    const [contentHeight, setContentHeight] = useState('300px')
    const [contentWidth, setContentWidth] = useState('300px')

    const handleOpen = () =>{
            setOpen(!open)
    }
    const handleClose = () =>{
        setOpen(false)

        
    }


    useEffect(() => {
        const handleResize = () => {
            const newContentHeight = window.innerWidth > 653 ? '400px' : '300px';
            setContentHeight(newContentHeight);
            const newContentWidth = window.innerWidth > 653 ? '400px' : '300px';
            setContentWidth(newContentWidth);
        };


        window.addEventListener('resize', handleResize);
        handleResize(); 

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (

<>
elkjj

<div ></div>
            <Popup  contentStyle={{width: contentWidth, height:contentHeight , padding: '12px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderRadius: '10px' }}>

                <h2 className='text-2xl font-semibold mb-3'>Popup Designs</h2>

                <span className=' text-justify text-gray-500 text-xs sm:text-base'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum architecto placeat quisquam, odio quia, impedit consequatur commodi perspiciatis esse voluptas nulla. Fugit ipsum consequuntur voluptate doloremque minus perferendis, eligendi labore quis neque.</span>
                <div className="buttons flex items-center justify-center gap-4 mt-6">
                    <button className=' bg-red-500 h-7 text-white px-3 rounded-sm' onClick={handleClose}>Yes, Delete</button>
                    <button className=' bg-indigo-500 h-7 text-white px-3 rounded-sm' onClick={handleClose}>Close</button>
                </div>
            </Popup>

            </>
    );
}

export default PopupExample