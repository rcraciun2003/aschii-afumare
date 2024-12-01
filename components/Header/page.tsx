import React from 'react';

const Header = () => {
    return (
        <div className="w-full h-full mx-auto flex flex-col sm:flex-row p-4">
            <div className="w-full h-full p-4 my-auto flex flex-col items-center justify-center">
                <h1>Title</h1>
                <p>Description</p>
                <button>Call to action</button>
            </div>
            <div className="w-full h-auto max-w-lg mx-auto my-auto flex items-center justify-center bg-gray-100 rounded-lg shadow-md">
                <video
                    controls
                    autoPlay
                    loop
                    className="w-full  max-h-[50vh] rounded-lg"
                >
                    <source src="/trim.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
};

export default Header;
