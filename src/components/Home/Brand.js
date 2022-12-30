import React from 'react'
import BrandImage from "../../assets/img1.jpg"

const Brand = props => {
  return (
    <div className="container">
        <div className="row text-start align-items-center gy-5 my-5">
            <div className="col-12 col-md-6">
                <img src={BrandImage} className="w-100 h-100" alt=""/>
            </div>
            <div className="col-12 col-md-6">
                <div>
                    <h2 className="display-4">Brand</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        </div>
    </div>
  )
}



export default Brand