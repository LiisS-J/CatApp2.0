// import React, { useState, useRef, useEffect } from "react";
import {Link} from 'react-router-dom'

function LandingPage() {
    return (
        <div className="landingPage">
        {/* Background image by Jae Park https://unsplash.com/@jaehunpark */}
        <div className="sub-content">
            <div id="site-name">
                <h2>HAPPY PAWS</h2>
            </div>
            <div id="site-link">
                <Link
					className='btn btn-xs btn-info'
					to={{
						pathname: '/cats'
					}}
				>
					Meet our Adoptable Kitties
				</Link>
                {/* <a href="/cats">Meet our adoptable kitties</a> */}
            </div>
        </div>
      </div>
    );
}

export default LandingPage;