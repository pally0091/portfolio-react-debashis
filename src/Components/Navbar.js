import React from 'react';

const Navbar = () => {
    return (
        <div className='flex justify-end bg-current p-2 '>
            <button className='bg-lime-300 mx-3 p-3 rounded-full hover:text-white hover:bg-lime-900'><a href='https://form.jotform.com/223451972777467'>Contact Me</a></button>
            <button className='bg-sky-300 mx-3 p-3 rounded-full hover:text-white hover:bg-sky-900'><a href='https://drive.google.com/file/d/1NBT1HKBBISwVA91Hiw5V2yO6iUt1tHV4/view?usp=share_link' target='_blank'>Resume</a></button>
        </div>
    );
};

export default Navbar;