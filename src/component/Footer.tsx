import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <>
            <footer className="mainFooter">
                <div className="inerFooter">
                    <div className="footerMnuBox">
                        <div className="inerFootMnu">
                            <img src={window.location.origin + '/images/footer-logo.svg'} alt="" />
                        </div>
                        <div className="inerFootMnu">
                            <h3><span>Washington </span> DC</h3>
                            <ul>
                                <li><a href="/">Chicago</a></li>
                                <li><a href="/">London</a></li>
                            </ul>
                        </div>
                        <div className="inerFootMnu">
                            <h3>SEARCH & FILTER</h3>
                            <ul>
                                <li><a href="/">Commodity Codes</a></li>
                                <li><a href="/">Contract Vehicles</a></li>
                                <li><a href="/">Browse & Filter All Suppliers</a></li>
                            </ul>
                        </div>
                        <div className="inerFootMnu">
                            <h3>RESEARCH & INSIGHT</h3>
                            <ul>
                                <li><a href="/">Market Intelligence</a></li>
                                <li><a href="/">Procurement Innovation</a></li>
                                <li><a href="/">Community & Events</a></li>
                            </ul>
                        </div>
                        <div className="inerFootMnu">
                            <h3>FOR SUPPLIERS</h3>
                            <ul>
                                <li><a href="/">Register/Claim Profile</a></li>
                                <li><a href="/">Small Business Resources</a></li>
                                <li><a href="/">Events</a></li>
                                <li><a href="/">Subscription Plans</a></li>
                            </ul>
                        </div>
                        <div className="inerFootMnu">
                            <h3>ABOUT</h3>
                            <ul>
                                <li><a href="/">Contact Us</a></li>
                                <li><a href="/">About Us</a></li>
                                <li><a href="/">Join Us</a></li>
                                <li><a href="/">Sign Up</a></li>
                            </ul>
                        </div>
                        <div className="inerFootMnu">
                            <ul>
                                <li><a href="/">Terms of Use</a></li>
                                <li><a href="/">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="copyRightFooter">
                        <p>
                            <span>© 2021 Public Spend Forum</span> 
                            <a href="/">govshop@publicspendforum.net</a> 
                            <span> | 202-821-9099</span>
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
