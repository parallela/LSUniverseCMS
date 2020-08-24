import React from "react";

const Section = props => (
    <>
        <div className="site-section bg-light">
            <div className="container">
                <div className="row justify-content-center text-center mb-5">
                    <div className="col-md-6" >
                        <h2>Different hosting platforms to suit every need!</h2>
                    </div>
                </div>
                <div className="row hosting">
                    <div className="col-md-6 col-lg-4 mb-5 mb-lg-0" >

                        <div className="unit-2 text-center border py-5 h-100 bg-white">
                            <span className="icon fl-bigmug-line-paper122 text-primary"></span>
                            <h3 className="h4 text-black">Shared Hosting</h3>
                            <p className="mb-4 text-gray-500">Plans start at $3.99/month</p>
                            <p><a href="#" className="btn btn-primary py-2 px-4 rounded-0">View Details</a></p>
                        </div>

                    </div>
                    <div className="col-md-6 col-lg-4 mb-5 mb-lg-0" >

                        <div className="unit-2 text-center border py-5 h-100 bg-white">
                            <span className="icon fl-bigmug-line-airplane86 text-primary"></span>
                            <h3 className="h4 text-black">Dedicated Hosting</h3>
                            <p className="mb-4 text-gray-500">Plans start at $6.99/month</p>
                            <p><a href="#" className="btn btn-primary py-2 px-4 rounded-0">View Details</a></p>
                        </div>

                    </div>
                    <div className="col-md-6 col-lg-4 mb-5 mb-lg-0" >

                        <div className="unit-2 text-center border py-5 h-100 bg-white">
                            <span className="icon fl-bigmug-line-hot67 text-primary"></span>
                            <h3 className="h4 text-black">Premium Hosting</h3>
                            <p className="mb-4 text-gray-500">Plans start at $9.99/month</p>
                            <p><a href="#" className="btn btn-primary py-2 px-4 rounded-0">View Details</a></p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </>
)
export default Section;
