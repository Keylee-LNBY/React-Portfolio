import React from "react";

const Navbar = () => {
    return(
        <nav class="grey darken-3">
            <div class="nav-wrapper">
                <a href="#" class="brand-logo">Kelly Lineberry</a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a href="https://github.com/Keylee-LNBY" target="_blank">GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/kellylineberry/" target="_blank">LinkedIn</a></li>
                <li><a href="https://docs.google.com/document/d/1QE_XRrJ1sv5WKhBHG9_gMmghK9c69XE8S3GW9mEwGzs/edit?usp=sharing" target="_blank">Resume</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;