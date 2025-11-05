import React from 'react'

export default function ImgLayout() {
    return (
        <div className="container w-full p-5 h-screen">
            <img src="https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hvcHxlbnwwfDB8MHx8fDA%3D" alt="" className="w-full h-full rounded-2xl grayscale-100 md:block hidden" />
            <img src="https://images.unsplash.com/photo-1612124119733-d23933139790?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNob3B8ZW58MHwxfDB8fHww" alt="" className="w-full grayscale-75 h-full md:hidden block" />
        </div>
    )
}
