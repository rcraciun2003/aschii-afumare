import React from 'react'
import Image from 'next/image'

const Header = () => {
    return (
        <div className="w-full h-full mx-auto flex flex-col sm:flex-row p-4">
            <div className="w-full h-full p-4 my-auto flex flex-col items-center justify-center">
                <h1>Title</h1>
                <p>Description</p>
                <button>Call to action</button>
            </div>
            <div className="w-full h-full p-2 md:p-4 mx-auto my-auto flex items-center justify-center">
                <video width="320" height="240" controls preload="none">
                    <source src="../../public/presentation.mp4" type="video/mp4"/>
                    <track
                        src="../public/presentation.mp4"
                        kind="subtitles"
                        srcLang="en"
                        label="English"
                    />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    )
}
export default Header
