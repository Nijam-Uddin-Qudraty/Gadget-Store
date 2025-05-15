import React from "react";

const Footer = () => {
	return (
        <div className="text-center px-40 py-26">
            <div className="mb-16">
                <h3 className="font-bold text-3xl mb-3">Gadget Heaven</h3>
                <p>Leading the way in cutting-edge technology and innovation.</p>
            </div>
            
			<footer className="footer justify-items-center sm:footer-horizontal bg-base-200 text-base-content px-32">
				<nav>
					<h6 className="footer-title">Services</h6>
					<a className="link link-hover">Branding</a>
					<a className="link link-hover">Design</a>
					<a className="link link-hover">Marketing</a>
					<a className="link link-hover">Advertisement</a>
				</nav>
				<nav>
					<h6 className="footer-title">Company</h6>
					<a className="link link-hover">About us</a>
					<a className="link link-hover">Contact</a>
					<a className="link link-hover">Jobs</a>
					<a className="link link-hover">Press kit</a>
				</nav>
				<nav>
					<h6 className="footer-title">Legal</h6>
					<a className="link link-hover">Terms of use</a>
					<a className="link link-hover">Privacy policy</a>
					<a className="link link-hover">Cookie policy</a>
				</nav>
			</footer>
			
		
        </div>
	);
};

export default Footer;
