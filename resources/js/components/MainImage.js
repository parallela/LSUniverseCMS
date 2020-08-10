import React from "react";

const MainImage = props => {
    return (
        <>

            <div className="site-blocks-cover " style={{backgroundImage: `url(images/hero_bg_1.jpg)`}}>
                <div className="container">
                    <div className="row align-items-center justify-content-center text-center">
                        <div className="col-md-11">
                            <h1 className="mb-2">{'Heading Text'}</h1>
                            <p className="mb-6">{'Text'}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MainImage;
