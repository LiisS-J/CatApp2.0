import React, { useState, useRef, useEffect } from "react";


function LandingPage() {
    return (
        <div class="landingPage">
        {/* Background image by Jae Park https://unsplash.com/@jaehunpark */}
        <div className="sub-content">
            <div id="site-name">
                <h2>HAPPY PAWS</h2>
            </div>
            <div id="site-link">
                <a href="/cats">Meet our adoptable kitties</a>
            </div>
        </div>
      </div>
    );
}

export default LandingPage;