import React from 'react'
import './Home.css'

function Home() {
    return (
        <>
            <section className="bannerWithPlans">
                <div className="innerBann">
                    <div className="bannDtl">
                        <div className="banLogoImg">
                            <svg viewBox="0 0 60 60" className="icon subscription-plans-hero__main-logo"><g fill="#ffde00"><circle cx="5.286" cy="51.643" r="1.5"></circle><circle cx="5.286" cy="13.122" r="1.5"></circle><circle cx="5.286" cy="9.271" r="1.5"></circle><circle cx="5.286" cy="55.494" r="1.5"></circle><circle cx="9.138" cy="51.643" r="1.5"></circle><circle cx="9.138" cy="43.938" r="1.5"></circle><circle cx="9.138" cy="36.234" r="1.5"></circle><circle cx="9.138" cy="28.53" r="1.5"></circle><circle cx="9.138" cy="20.826" r="1.5"></circle><circle cx="9.138" cy="40.086" r="1.5"></circle><circle cx="9.138" cy="32.382" r="1.5"></circle><circle cx="9.138" cy="24.678" r="1.5"></circle><circle cx="9.138" cy="13.122" r="1.5"></circle><circle cx="9.138" cy="9.271" r="1.5"></circle><circle cx="9.138" cy="55.494" r="1.5"></circle><circle cx="12.99" cy="51.643" r="1.5"></circle><circle cx="12.99" cy="43.938" r="1.5"></circle><circle cx="12.99" cy="36.234" r="1.5"></circle><circle cx="12.99" cy="28.53" r="1.5"></circle><circle cx="12.99" cy="20.826" r="1.5"></circle><circle cx="12.99" cy="40.086" r="1.5"></circle><circle cx="12.99" cy="32.382" r="1.5"></circle><circle cx="12.99" cy="24.678" r="1.5"></circle><circle cx="12.99" cy="13.122" r="1.5"></circle><circle cx="12.99" cy="9.271" r="1.5"></circle><circle cx="12.99" cy="55.494" r="1.5"></circle><circle cx="16.842" cy="51.643" r="1.5"></circle><circle cx="16.842" cy="13.122" r="1.5"></circle><circle cx="16.842" cy="9.271" r="1.5"></circle><circle cx="16.842" cy="5.418" r="1.5"></circle><circle cx="16.842" cy="55.494" r="1.5"></circle><circle cx="20.694" cy="51.643" r="1.5"></circle><circle cx="20.694" cy="13.122" r="1.5"></circle><circle cx="20.694" cy="9.271" r="1.5"></circle><circle cx="20.694" cy="5.418" r="1.5"></circle><circle cx="20.694" cy="55.494" r="1.5"></circle><circle cx="24.546" cy="51.643" r="1.5"></circle><circle cx="24.546" cy="13.122" r="1.5"></circle><circle cx="24.546" cy="9.271" r="1.5"></circle><circle cx="24.546" cy="5.418" r="1.5"></circle><circle cx="24.546" cy="55.494" r="1.5"></circle><circle cx="28.398" cy="51.643" r="1.5"></circle><circle cx="28.398" cy="43.938" r="1.5"></circle><circle cx="28.398" cy="36.234" r="1.5"></circle><circle cx="28.398" cy="28.53" r="1.5"></circle><circle cx="28.398" cy="20.826" r="1.5"></circle><circle cx="28.398" cy="40.086" r="1.5"></circle><circle cx="28.398" cy="32.382" r="1.5"></circle><circle cx="28.398" cy="24.678" r="1.5"></circle><circle cx="28.398" cy="13.122" r="1.5"></circle><circle cx="28.398" cy="9.271" r="1.5"></circle><circle cx="28.398" cy="5.418" r="1.5"></circle><circle cx="28.398" cy="55.494" r="1.5"></circle><circle cx="32.25" cy="51.643" r="1.5"></circle><circle cx="32.25" cy="43.938" r="1.5"></circle><circle cx="32.25" cy="36.234" r="1.5"></circle><circle cx="32.25" cy="28.53" r="1.5"></circle><circle cx="32.25" cy="20.826" r="1.5"></circle><circle cx="32.25" cy="40.086" r="1.5"></circle><circle cx="32.25" cy="32.382" r="1.5"></circle><circle cx="32.25" cy="24.678" r="1.5"></circle><circle cx="32.25" cy="13.122" r="1.5"></circle><circle cx="32.25" cy="9.271" r="1.5"></circle><circle cx="32.25" cy="5.418" r="1.5"></circle><circle cx="32.25" cy="55.494" r="1.5"></circle><circle cx="36.102" cy="51.643" r="1.5"></circle><circle cx="36.102" cy="13.122" r="1.5"></circle><circle cx="36.102" cy="9.271" r="1.5"></circle><circle cx="36.102" cy="5.418" r="1.5"></circle><circle cx="36.102" cy="55.494" r="1.5"></circle><circle cx="39.954" cy="51.643" r="1.5"></circle><circle cx="39.954" cy="13.122" r="1.5"></circle><circle cx="39.954" cy="9.271" r="1.5"></circle><circle cx="39.954" cy="5.418" r="1.5"></circle><circle cx="39.954" cy="55.494" r="1.5"></circle><circle cx="43.806" cy="51.643" r="1.5"></circle><circle cx="43.806" cy="13.122" r="1.5"></circle><circle cx="43.806" cy="9.271" r="1.5"></circle><circle cx="43.806" cy="5.418" r="1.5"></circle><circle cx="43.806" cy="55.494" r="1.5"></circle><circle cx="47.658" cy="51.643" r="1.5"></circle><circle cx="47.658" cy="43.938" r="1.5"></circle><circle cx="47.658" cy="36.234" r="1.5"></circle><circle cx="47.658" cy="28.53" r="1.5"></circle><circle cx="47.658" cy="20.826" r="1.5"></circle><circle cx="47.658" cy="40.086" r="1.5"></circle><circle cx="47.658" cy="32.382" r="1.5"></circle><circle cx="47.658" cy="24.678" r="1.5"></circle><circle cx="47.658" cy="13.122" r="1.5"></circle><circle cx="47.658" cy="9.271" r="1.5"></circle><circle cx="47.658" cy="55.494" r="1.5"></circle><circle cx="51.51" cy="51.643" r="1.5"></circle><circle cx="51.51" cy="43.938" r="1.5"></circle><circle cx="51.51" cy="36.234" r="1.5"></circle><circle cx="51.51" cy="28.53" r="1.5"></circle><circle cx="51.51" cy="20.826" r="1.5"></circle><circle cx="51.51" cy="40.086" r="1.5"></circle><circle cx="51.51" cy="32.382" r="1.5"></circle><circle cx="51.51" cy="24.678" r="1.5"></circle><circle cx="51.51" cy="13.122" r="1.5"></circle><circle cx="51.51" cy="9.271" r="1.5"></circle><circle cx="51.51" cy="55.494" r="1.5"></circle><circle cx="55.362" cy="51.643" r="1.5"></circle><circle cx="55.362" cy="13.122" r="1.5"></circle><circle cx="55.362" cy="9.271" r="1.5"></circle><circle cx="55.362" cy="55.494" r="1.5"></circle></g></svg>
                        </div>
                        <h2>WHEN IT COMES TO WINNING GOVERNMENT BUSINESS, THERE’S NO SUBSTITUTE TO BEING FOUND EARLY. LET GOVSHOP HELP</h2>
                        <p>"Finding qualified suppliers is great… and GovShop is HUGE!"</p>
                        <span>Federal Agency Buyer</span>
                    </div>
                </div>
                <div className="mainPlanBox">
                    <div className="innerPlans">
                        <div className="planList">
                            <h2 className="planTitle">FEATURES</h2>
                            <div className="planOffer mainPlanBtn">                                
                                <div className="feturePlan">
                                    <button className="activPlan">ANNUAL</button>
                                    <button>MONTHLY</button>
                                </div>
                            </div>                            
                        </div>
                        <div className="planList">
                            <h2 className="planTitle">FREE</h2>
                            <div className="planOffer">
                                <h3 className="titleFree">FREE</h3>
                                <button className="planBtn">CLAIM FOR FREE</button>
                            </div>
                        </div>
                        <div className="planList">
                            <h2 className="planTitle">STARTER</h2>
                            <div className="planOffer">
                                <h3 className="titleWithPrice"><span>$</span>250/Year</h3>
                                <p className="offerBuy">Purchase Aunnal at 20% Discount</p>
                                <button className="planBtn">GET STARTED</button>
                            </div>
                        </div>
                        <div className="planList">
                            <h2 className="planTitle">ACCELERATOR</h2>
                            <div className="planOffer">
                                <h3 className="titleWithPrice"><span>$</span>1428/Year</h3>
                                <p className="offerBuy">Purchase Aunnal at 20% Discount</p>
                                <button className="planBtn">GET STARTED</button>
                            </div>
                        </div>
                        <div className="planList">
                            <h2 className="planTitle">GROWTH</h2>
                            <div className="planOffer">
                                <h3 className="titleGrowth txtColor">CUSTOM</h3>
                                <button className="planBtn">APPLY TO JOIN</button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="headOfAllOffer">
                        <h2>Brand Exposure and Lead Generation</h2>
                    </div>

                    <div className="mainPlanView">
                        <div className="innerPlans">
                            <div className="planList">
                                <h3 className="planDtlTitle">Branded Profile on GovShop</h3>
                            </div>
                            <div className="planList checkIcon">
                                <img src={window.location.origin + '/icons/check.svg'} alt="" />
                            </div>
                            <div className="planList checkIcon">
                                <img src={window.location.origin + '/icons/check.svg'} alt="" />
                            </div>
                            <div className="planList checkIcon">
                                <img src={window.location.origin + '/icons/check.svg'} alt="" />
                            </div>
                            <div className="planList checkIcon">
                                <img src={window.location.origin + '/icons/check.svg'} alt="" />
                            </div>
                        </div>
                        
                        <div className="innerPlans">
                            <div className="planList">
                                <h3 className="planDtlTitle">"GovMarket Certified by PSF" Badge</h3>
                            </div>
                            <div className="planList closeIcon">
                                <img src={window.location.origin + '/icons/close.svg'} alt="" />
                            </div>
                            <div className="planList checkIcon">
                                <h4>Verified Badge</h4>
                            </div>
                            <div className="planList checkIcon">
                                <h4>Verified Badge</h4>
                            </div>
                            <div className="planList checkIcon">
                                <h4>GovMarket Certified Badge</h4>
                            </div>
                        </div>
                        <div className="innerPlans">
                            <div className="planList">
                                <h3 className="planDtlTitle">Tech and Innovation Showcase</h3>
                            </div>
                            <div className="planList checkIcon">
                                <img src={window.location.origin + '/icons/check.svg'} alt="" />
                            </div>
                            <div className="planList checkIcon">
                                <img src={window.location.origin + '/icons/check.svg'} alt="" />
                            </div>
                            <div className="planList checkIcon">
                                <img src={window.location.origin + '/icons/check.svg'} alt="" />
                            </div>
                            <div className="planList checkIcon">
                                <h4>With Marketing Video</h4>
                            </div>
                        </div>
                        <div className="innerPlans">
                            <div className="planList">
                                <h3 className="planDtlTitle">Exclusive Buyer/Supplier Events</h3>
                            </div>
                            <div className="planList closeIcon">
                                <img src={window.location.origin + '/icons/close.svg'} alt="" />
                            </div>
                            <div className="planList closeIcon">
                                <img src={window.location.origin + '/icons/close.svg'} alt="" />
                            </div>
                            <div className="planList checkIcon">
                                <img src={window.location.origin + '/icons/check.svg'} alt="" />
                            </div>
                            <div className="planList checkIcon">
                                <h4>VIP</h4>
                            </div>
                        </div>
                        <div className="innerPlans">
                            <div className="planList">
                                <h3 className="planDtlTitle">GovCon Club User Profile</h3>
                            </div>
                            <div className="planList closeIcon">
                                <img src={window.location.origin + '/icons/close.svg'} alt="" />
                            </div>
                            <div className="planList checkIcon">
                                <img src={window.location.origin + '/icons/check.svg'} alt="" />
                            </div>
                            <div className="planList checkIcon">
                                <img src={window.location.origin + '/icons/check.svg'} alt="" />
                            </div>
                            <div className="planList checkIcon">
                                <img src={window.location.origin + '/icons/check.svg'} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="headOfAllOffer">
                        <h2>Market Intelligence and Opportunity Matching</h2>
                    </div>

                    <div className="mainPlanView">
                        <div className="innerPlans">
                            <div className="planList">
                                <h3 className="planDtlTitle">Opportunity Search</h3>
                            </div>
                            <div className="planList checkIcon">
                                <h4>Top 10</h4>
                            </div>
                            <div className="planList checkIcon">
                                <h4>Top 10</h4>
                            </div>
                            <div className="planList checkIcon">
                                <h4>Unlimited</h4>
                            </div>
                            <div className="planList checkIcon">
                                <h4>Unlimited</h4>
                            </div>
                        </div>
                        
                        <div className="innerPlans starBetaPlan">
                            <div className="planList">
                                <h3 className="planDtlTitle titleWithStarNdBeta"><img src={window.location.origin + '/icons/star.svg'} alt="" /> AI + Analyst Matched Opportunities <span>beta</span></h3>
                            </div>
                            <div className="planList closeIcon">
                                <img src={window.location.origin + '/icons/close.svg'} alt="" />
                            </div>
                            <div className="planList closeIcon">
                                <img src={window.location.origin + '/icons/close.svg'} alt="" />
                            </div>
                            <div className="planList checkIcon">
                                <h4>Unlimited</h4>
                            </div>
                            <div className="planList checkIcon">
                                <h4>Unlimited</h4>
                            </div>
                        </div>

                        <div className="innerPlans">
                            <div className="planList">
                                <h3 className="planDtlTitle">Activity Notifications</h3>
                            </div>
                            <div className="planList closeIcon">
                                <img src={window.location.origin + '/icons/close.svg'} alt="" />
                            </div>
                            <div className="planList closeIcon">
                                <img src={window.location.origin + '/icons/close.svg'} alt="" />
                            </div>
                            <div className="planList checkIcon">
                                <img src={window.location.origin + '/icons/check.svg'} alt="" />
                            </div>
                            <div className="planList checkIcon">
                                <img src={window.location.origin + '/icons/check.svg'} alt="" />
                            </div>
                        </div>

                        <div className="innerPlans">
                            <div className="planList">
                                <h3 className="planDtlTitle">Small Business Resource Center</h3>
                            </div>
                            <div className="planList closeIcon">
                                <img src={window.location.origin + '/icons/close.svg'} alt="" />
                            </div>
                            <div className="planList checkIcon">
                                <img src={window.location.origin + '/icons/check.svg'} alt="" />
                            </div>
                            <div className="planList checkIcon">
                                <img src={window.location.origin + '/icons/check.svg'} alt="" />
                            </div>
                            <div className="planList checkIcon">
                                <img src={window.location.origin + '/icons/check.svg'} alt="" />
                            </div>
                        </div>
                        <div className="innerPlans">
                            <div className="planList">
                                <h3 className="planDtlTitle">Market Intelligence Module</h3>
                            </div>
                            <div className="planList closeIcon">
                                <img src={window.location.origin + '/icons/close.svg'} alt="" />
                            </div>
                            <div className="planList closeIcon">
                                <img src={window.location.origin + '/icons/close.svg'} alt="" />
                            </div>
                            <div className="planList checkIcon">
                                <img src={window.location.origin + '/icons/check.svg'} alt="" />
                            </div>
                            <div className="planList checkIcon">
                                <img src={window.location.origin + '/icons/check.svg'} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="headOfAllOffer">
                        <h2>Strategy, Marketing and Sales Coaching</h2>
                    </div>

                    <div className="mainPlanView">
                        <div className="innerPlans">
                            <div className="planList">
                                <h3 className="planDtlTitle">Members Only Strategy MasterMind</h3>
                            </div>
                            <div className="planList closeIcon">
                                <img src={window.location.origin + '/icons/close.svg'} alt="" />
                            </div>
                            <div className="planList checkIcon">
                                <img src={window.location.origin + '/icons/check.svg'} alt="" />
                            </div>
                            <div className="planList checkIcon">
                                <img src={window.location.origin + '/icons/check.svg'} alt="" />
                            </div>
                            <div className="planList checkIcon">
                                <h4>VIP</h4>
                            </div>
                        </div>
                        
                        <div className="innerPlans">
                            <div className="planList">
                                <h3 className="planDtlTitle">Private Community and Workgroups</h3>
                            </div>
                            <div className="planList closeIcon">
                                <img src={window.location.origin + '/icons/close.svg'} alt="" />
                            </div>
                            <div className="planList checkIcon">
                                <img src={window.location.origin + '/icons/check.svg'} alt="" />
                            </div>
                            <div className="planList checkIcon">
                                <img src={window.location.origin + '/icons/check.svg'} alt="" />
                            </div>
                            <div className="planList checkIcon">
                                <img src={window.location.origin + '/icons/check.svg'} alt="" />
                            </div>
                        </div>
                        <div className="innerPlans">
                            <div className="planList">
                                <h3 className="planDtlTitle">Growth Strategy Content Library</h3>
                            </div>
                            <div className="planList closeIcon">
                                <img src={window.location.origin + '/icons/close.svg'} alt="" />
                            </div>
                            <div className="planList checkIcon">
                                <img src={window.location.origin + '/icons/check.svg'} alt="" />
                            </div>
                            <div className="planList checkIcon">
                                <img src={window.location.origin + '/icons/check.svg'} alt="" />
                            </div>
                            <div className="planList checkIcon">
                                <img src={window.location.origin + '/icons/check.svg'} alt="" />
                            </div>
                        </div>
                        <div className="innerPlans">
                            <div className="planList">
                                <h3 className="planDtlTitle">Weekly GovMarket Growth Master Classes</h3>
                            </div>
                            <div className="planList closeIcon">
                                <img src={window.location.origin + '/icons/close.svg'} alt="" />
                            </div>
                            <div className="planList closeIcon">
                                <img src={window.location.origin + '/icons/close.svg'} alt="" />
                            </div>
                            <div className="planList closeIcon">
                                <img src={window.location.origin + '/icons/close.svg'} alt="" />
                            </div>
                            <div className="planList checkIcon">
                                <img src={window.location.origin + '/icons/check.svg'} alt="" />
                            </div>
                        </div>
                        <div className="innerPlans">
                            <div className="planList">
                                <h3 className="planDtlTitle">1x1 Advisory (max 4hrs/mo)</h3>
                            </div>
                            <div className="planList closeIcon">
                                <img src={window.location.origin + '/icons/close.svg'} alt="" />
                            </div>
                            <div className="planList closeIcon">
                                <img src={window.location.origin + '/icons/close.svg'} alt="" />
                            </div>
                            <div className="planList closeIcon">
                                <img src={window.location.origin + '/icons/close.svg'} alt="" />
                            </div>
                            <div className="planList checkIcon">
                                <img src={window.location.origin + '/icons/check.svg'} alt="" />
                            </div>
                        </div>

                        <div className="innerPlans">
                            <div className="planList">
                                <h3 className="planDtlTitle">Market Planning Data and Coaching</h3>
                            </div>
                            <div className="planList closeIcon">
                                <img src={window.location.origin + '/icons/close.svg'} alt="" />
                            </div>
                            <div className="planList closeIcon">
                                <img src={window.location.origin + '/icons/close.svg'} alt="" />
                            </div>
                            <div className="planList closeIcon">
                                <img src={window.location.origin + '/icons/close.svg'} alt="" />
                            </div>
                            <div className="planList checkIcon">
                                <img src={window.location.origin + '/icons/check.svg'} alt="" />
                            </div>
                        </div>
                        <div className="innerPlans">
                            <div className="planList">
                                <h3 className="planDtlTitle">Proposal Bid Review</h3>
                            </div>
                            <div className="planList closeIcon">
                                <img src={window.location.origin + '/icons/close.svg'} alt="" />
                            </div>
                            <div className="planList closeIcon">
                                <img src={window.location.origin + '/icons/close.svg'} alt="" />
                            </div>
                            <div className="planList closeIcon">
                                <img src={window.location.origin + '/icons/close.svg'} alt="" />
                            </div>
                            <div className="planList checkIcon">
                                <h4>A la carte - $1000/month?</h4>
                            </div>
                        </div>
                        <div className="innerPlans">
                            <div className="planList">
                                <h3 className="planDtlTitle">GovCon Club Education Committees</h3>
                            </div>
                            <div className="planList closeIcon">
                                <img src={window.location.origin + '/icons/close.svg'} alt="" />
                            </div>
                            <div className="planList checkIcon">
                                <img src={window.location.origin + '/icons/check.svg'} alt="" />
                            </div>
                            <div className="planList checkIcon">
                                <img src={window.location.origin + '/icons/check.svg'} alt="" />
                            </div>
                            <div className="planList checkIcon">
                                <img src={window.location.origin + '/icons/check.svg'} alt="" />
                            </div>
                        </div>
                        <div className="innerPlans">
                            <div className="planList">
                                <h3 className="planDtlTitle">Weekly DYKGovCon Education Webinars</h3>
                            </div>
                            <div className="planList closeIcon">
                                <img src={window.location.origin + '/icons/close.svg'} alt="" />
                            </div>
                            <div className="planList checkIcon">
                                <img src={window.location.origin + '/icons/check.svg'} alt="" />
                            </div>
                            <div className="planList checkIcon">
                                <img src={window.location.origin + '/icons/check.svg'} alt="" />
                            </div>
                            <div className="planList checkIcon">
                                <img src={window.location.origin + '/icons/check.svg'} alt="" />
                            </div>
                        </div>
                        <div className="innerPlans">
                            <div className="planList">
                                <h3 className="planDtlTitle">Members Only Office Hours Meetings</h3>
                            </div>
                            <div className="planList closeIcon">
                                <img src={window.location.origin + '/icons/close.svg'} alt="" />
                            </div>
                            <div className="planList checkIcon">
                                <img src={window.location.origin + '/icons/check.svg'} alt="" />
                            </div>
                            <div className="planList checkIcon">
                                <img src={window.location.origin + '/icons/check.svg'} alt="" />
                            </div>
                            <div className="planList checkIcon">
                                <img src={window.location.origin + '/icons/check.svg'} alt="" />
                            </div>
                        </div>
                        <div className="innerPlans">
                            <div className="planList">
                                <h3 className="planDtlTitle"> </h3>
                            </div>
                            <div className="planList closeIcon">
                                <button className="planBtn">CLAIM FOR FREE</button>
                            </div>
                            <div className="planList checkIcon btnExtraSize">
                                <button className="planBtn">GET STARTED</button>
                            </div>
                            <div className="planList checkIcon">
                                <button className="planBtn">GET STARTED</button>
                            </div>
                            <div className="planList checkIcon">
                                <button className="planBtn">APPLY TO JOIN</button>
                            </div>
                        </div>
                        
                    </div>

                </div>
            </section>

            <section className="howCanStandBox">
                <div className="inerStandBox">
                    <h2>How can you stand out in the complex government market?</h2>
                    <p>Suppliers realize the opportunity available in the government market is huge, $2 trillion huge in the U.S. alone. But how can you stand out and get noticed by buyers for your specific capabilities? The answer lies in building a profile that captures essential details about your company and engaging with the right government buyers.</p>
                </div>
            </section>

            <section className="govShop__VisibilityNdRelation">
                <div className="innerGovShop__Relation">
                    <h2>GovShop gives you an efficient way to increase visibility and relationships</h2>
                    <div className="listOf__GovRelation">
                        <div className="inerGovRelList">
                            <h3>
                                <svg viewBox="0 0 35 35" className="icon"><path d="M31.7 0C33 0 34 1.1 34 2.3c0 1.3-1.1 2.3-2.3 2.3-1.3 0-2.3-1.1-2.3-2.3 0-1.2 1-2.3 2.3-2.3zM20 5.9c1.3 0 2.3 1.1 2.3 2.3s-1.1 2.3-2.3 2.3c-1.3 0-2.3-1.1-2.3-2.3s1-2.3 2.3-2.3zm5.8 0c1.3 0 2.3 1.1 2.3 2.3s-1.1 2.3-2.3 2.3c-1.3 0-2.3-1.1-2.3-2.3s1-2.3 2.3-2.3zM20 11.7c1.3 0 2.3 1.1 2.3 2.3 0 1.3-1.1 2.3-2.3 2.3-1.3 0-2.3-1.1-2.3-2.3-.1-1.2 1-2.3 2.3-2.3zm5.8 0c1.3 0 2.3 1.1 2.3 2.3 0 1.3-1.1 2.3-2.3 2.3-1.3 0-2.3-1.1-2.3-2.3 0-1.2 1-2.3 2.3-2.3zm5.9 0c1.3 0 2.3 1.1 2.3 2.3 0 1.3-1.1 2.3-2.3 2.3-1.3 0-2.3-1.1-2.3-2.3 0-1.2 1-2.3 2.3-2.3zM2.3 17.6c1.3 0 2.3 1.1 2.3 2.3s-1.1 2.3-2.3 2.3C1 22.2 0 21.1 0 19.9s1.1-2.3 2.3-2.3zm5.9 0c1.3 0 2.4 1.1 2.4 2.3s-1.1 2.3-2.4 2.3c-1.3 0-2.3-1.1-2.3-2.3s1-2.3 2.3-2.3zm5.9 0c1.3 0 2.3 1.1 2.3 2.3s-1.1 2.3-2.3 2.3c-1.3 0-2.3-1.1-2.3-2.3s1-2.3 2.3-2.3zm-5.9 5.9c1.3 0 2.4 1.1 2.4 2.4 0 1.3-1.1 2.3-2.4 2.3-1.3 0-2.3-1.1-2.3-2.3 0-1.4 1-2.4 2.3-2.4zm5.9 0c1.3 0 2.3 1.1 2.3 2.4 0 1.3-1.1 2.3-2.3 2.3-1.3 0-2.3-1.1-2.3-2.3-.1-1.4 1-2.4 2.3-2.4zM2.3 29.4c1.3 0 2.3 1.1 2.3 2.3C4.6 33 3.5 34 2.3 34 1 34 0 32.9 0 31.7c0-1.3 1.1-2.3 2.3-2.3zm11.8 0c1.3 0 2.3 1.1 2.3 2.3 0 1.3-1.1 2.3-2.3 2.3-1.3 0-2.3-1.1-2.3-2.3-.1-1.3 1-2.3 2.3-2.3zM20 0c1.3 0 2.3 1.1 2.3 2.3 0 1.3-1.1 2.3-2.3 2.3-1.3 0-2.3-1.1-2.3-2.3-.1-1.2 1-2.3 2.3-2.3z" fill="#40a4f1"></path></svg>
                            </h3>
                            <p>By becoming part of GovShop, you become part of our global ecosystem that’s bringing buyers and suppliers together</p>
                        </div>
                        <div className="inerGovRelList">
                            <h3>
                                <svg viewBox="0 0 35 35" className="icon"><path d="M31.7 0C33 0 34 1.1 34 2.3c0 1.3-1.1 2.3-2.3 2.3-1.3 0-2.3-1.1-2.3-2.3 0-1.2 1-2.3 2.3-2.3zm-5.9 5.9c1.3 0 2.3 1.1 2.3 2.3 0 1.3-1.1 2.3-2.3 2.3-1.3 0-2.3-1.1-2.3-2.3 0-1.3 1-2.3 2.3-2.3zm5.9 0C33 5.9 34 7 34 8.2c0 1.3-1.1 2.3-2.3 2.3-1.3 0-2.3-1.1-2.3-2.3 0-1.3 1-2.3 2.3-2.3zm-17.6 5.8c1.3 0 2.3 1.1 2.3 2.3s-1.1 2.3-2.3 2.3c-1.3 0-2.3-1.1-2.3-2.3s1-2.3 2.3-2.3zm5.9 0c1.3 0 2.3 1.1 2.3 2.3s-1.1 2.3-2.3 2.3c-1.3 0-2.3-1.1-2.3-2.3s1-2.3 2.3-2.3zm5.8 0c1.3 0 2.3 1.1 2.3 2.3s-1.1 2.3-2.3 2.3c-1.3 0-2.3-1.1-2.3-2.3s1-2.3 2.3-2.3zm5.9 0c1.3 0 2.3 1.1 2.3 2.3s-1.1 2.3-2.3 2.3c-1.3 0-2.3-1.1-2.3-2.3s1-2.3 2.3-2.3zm-17.6 5.9c1.3 0 2.3 1.1 2.3 2.3 0 1.3-1.1 2.3-2.3 2.3-1.3 0-2.3-1.1-2.3-2.3-.1-1.2 1-2.3 2.3-2.3zm5.9 0c1.3 0 2.3 1.1 2.3 2.3 0 1.3-1.1 2.3-2.3 2.3-1.3 0-2.3-1.1-2.3-2.3-.1-1.2 1-2.3 2.3-2.3zm5.8 0c1.3 0 2.3 1.1 2.3 2.3 0 1.3-1.1 2.3-2.3 2.3-1.3 0-2.3-1.1-2.3-2.3 0-1.2 1-2.3 2.3-2.3zm5.9 0c1.3 0 2.3 1.1 2.3 2.3 0 1.3-1.1 2.3-2.3 2.3-1.3 0-2.3-1.1-2.3-2.3 0-1.2 1-2.3 2.3-2.3zM2.3 23.5c1.3 0 2.3 1.1 2.3 2.3 0 1.3-1.1 2.3-2.3 2.3S0 27 0 25.8c0-1.3 1.1-2.3 2.3-2.3zm5.9 0c1.3 0 2.4 1.1 2.4 2.3 0 1.3-1.1 2.3-2.4 2.3-1.3 0-2.3-1.1-2.3-2.3 0-1.3 1-2.3 2.3-2.3zm5.9 0c1.3 0 2.3 1.1 2.3 2.3 0 1.3-1.1 2.3-2.3 2.3-1.3 0-2.3-1.1-2.3-2.3-.1-1.3 1-2.3 2.3-2.3zm5.9 0c1.3 0 2.3 1.1 2.3 2.3 0 1.3-1.1 2.3-2.3 2.3-1.3 0-2.3-1.1-2.3-2.3-.1-1.3 1-2.3 2.3-2.3zm5.8 0c1.3 0 2.3 1.1 2.3 2.3 0 1.3-1.1 2.3-2.3 2.3-1.3 0-2.3-1.1-2.3-2.3 0-1.3 1-2.3 2.3-2.3zm5.9 0c1.3 0 2.3 1.1 2.3 2.3 0 1.3-1.1 2.3-2.3 2.3-1.3 0-2.3-1.1-2.3-2.3 0-1.3 1-2.3 2.3-2.3zM2.3 29.4c1.3 0 2.3 1.1 2.3 2.4 0 1.3-1.1 2.3-2.3 2.3S0 33 0 31.7c0-1.3 1.1-2.3 2.3-2.3zm5.9 0c1.3 0 2.4 1.1 2.4 2.4 0 1.3-1.1 2.3-2.4 2.3-1.3 0-2.3-1.1-2.3-2.3 0-1.4 1-2.4 2.3-2.4zm5.9 0c1.3 0 2.3 1.1 2.3 2.4 0 1.3-1.1 2.3-2.3 2.3-1.3 0-2.3-1.1-2.3-2.3-.1-1.4 1-2.4 2.3-2.4zm5.9 0c1.3 0 2.3 1.1 2.3 2.4 0 1.3-1.1 2.3-2.3 2.3-1.3 0-2.3-1.1-2.3-2.3-.1-1.4 1-2.4 2.3-2.4zm5.8 0c1.3 0 2.3 1.1 2.3 2.4 0 1.3-1.1 2.3-2.3 2.3-1.3 0-2.3-1.1-2.3-2.3 0-1.4 1-2.4 2.3-2.4zm5.9 0c1.3 0 2.3 1.1 2.3 2.4 0 1.3-1.1 2.3-2.3 2.3-1.3 0-2.3-1.1-2.3-2.3 0-1.4 1-2.4 2.3-2.4zM25.8 0c1.3 0 2.3 1.1 2.3 2.3 0 1.3-1.1 2.3-2.3 2.3-1.3 0-2.3-1.1-2.3-2.3 0-1.2 1-2.3 2.3-2.3z" fill="#40a4f1"></path></svg>
                            </h3>
                            <p>A complete GovShop profile increases your visibility and ability to be found earlier</p>
                        </div>
                        <div className="inerGovRelList">
                            <h3>
                                <svg viewBox="0 0 41 31" className="icon"><path d="M7.3 5.2c1.1 0 2.1.9 2.1 2.1 0 1.1-.9 2.1-2.1 2.1-1.1 0-2.1-.9-2.1-2.1 0-1.2.9-2.1 2.1-2.1zm20.7 0c1.1 0 2.1.9 2.1 2.1 0 1.1-.9 2.1-2.1 2.1-1.1 0-2.1-.9-2.1-2.1 0-1.2.9-2.1 2.1-2.1zm5.2 0c1.1 0 2.1.9 2.1 2.1 0 1.1-.9 2.1-2.1 2.1-1.1 0-2.1-.9-2.1-2.1 0-1.2.9-2.1 2.1-2.1zm5.1 0c1.1 0 2.1.9 2.1 2.1 0 1.1-.9 2.1-2.1 2.1-1.1 0-2.1-.9-2.1-2.1.1-1.2 1-2.1 2.1-2.1zM2.1 10.4c1.1 0 2.1.9 2.1 2.1 0 1.1-.9 2.1-2.1 2.1-1.1 0-2.1-.9-2.1-2.1 0-1.2.9-2.1 2.1-2.1zm5.2 0c1.1 0 2.1.9 2.1 2.1 0 1.1-.9 2.1-2.1 2.1-1.1 0-2.1-.9-2.1-2.1 0-1.2.9-2.1 2.1-2.1zm5.1 0c1.1 0 2.1.9 2.1 2.1 0 1.1-.9 2.1-2.1 2.1s-2.1-.9-2.1-2.1c.1-1.2 1-2.1 2.1-2.1zm10.4 0c1.1 0 2.1.9 2.1 2.1 0 1.1-.9 2.1-2.1 2.1s-2.1-.9-2.1-2.1c0-1.2 1-2.1 2.1-2.1zm5.2 0c1.1 0 2.1.9 2.1 2.1 0 1.1-.9 2.1-2.1 2.1-1.1 0-2.1-.9-2.1-2.1 0-1.2.9-2.1 2.1-2.1zm5.2 0c1.1 0 2.1.9 2.1 2.1 0 1.1-.9 2.1-2.1 2.1-1.1 0-2.1-.9-2.1-2.1 0-1.2.9-2.1 2.1-2.1zM7.3 15.5c1.1 0 2.1.9 2.1 2.1 0 1.1-.9 2.1-2.1 2.1-1.1 0-2.1-.9-2.1-2.1 0-1.1.9-2.1 2.1-2.1zm5.1 0c1.1 0 2.1.9 2.1 2.1 0 1.1-.9 2.1-2.1 2.1s-2.1-.9-2.1-2.1c.1-1.1 1-2.1 2.1-2.1zm5.2 0c1.1 0 2.1.9 2.1 2.1 0 1.1-.9 2.1-2.1 2.1-1.1 0-2.1-.9-2.1-2.1 0-1.1 1-2.1 2.1-2.1zm5.2 0c1.1 0 2.1.9 2.1 2.1 0 1.1-.9 2.1-2.1 2.1s-2.1-.9-2.1-2.1c0-1.1 1-2.1 2.1-2.1zm5.2 0c1.1 0 2.1.9 2.1 2.1 0 1.1-.9 2.1-2.1 2.1-1.1 0-2.1-.9-2.1-2.1 0-1.1.9-2.1 2.1-2.1zm-15.6 5.2c1.1 0 2.1.9 2.1 2.1 0 1.1-.9 2.1-2.1 2.1s-2.1-.9-2.1-2.1c.1-1.1 1-2.1 2.1-2.1zm5.2 0c1.1 0 2.1.9 2.1 2.1 0 1.1-.9 2.1-2.1 2.1-1.1 0-2.1-.9-2.1-2.1 0-1.1 1-2.1 2.1-2.1zm5.2 0c1.1 0 2.1.9 2.1 2.1 0 1.1-.9 2.1-2.1 2.1s-2.1-.9-2.1-2.1c0-1.1 1-2.1 2.1-2.1zm-5.2 5.2c1.1 0 2.1.9 2.1 2.1 0 1.1-.9 2.1-2.1 2.1-1.1 0-2.1-.9-2.1-2.1 0-1.2 1-2.1 2.1-2.1zM33.2 0c1.1 0 2.1.9 2.1 2.1 0 1.1-.9 2.1-2.1 2.1-1.1 0-2.1-.9-2.1-2.1C31.1.9 32 0 33.2 0z" fill="#40a4f1"></path></svg>
                            </h3>
                            <p>Efficient way to build awareness and connect with many agencies through one channel</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="govShop__VisibilityNdRelation">
                <div className="innerGovShop__Relation">
                    <h2>Suppliers like you are joining and enhancing their profiles</h2>
                    <div className="brandImageBox">
                        <img src={window.location.origin + '/images/global.png'} alt="" />
                        <img src={window.location.origin + '/images/blue-path.png'} alt="" />
                        <img src={window.location.origin + '/images/Storm-Sensor.png'} alt="" />
                        <img src={window.location.origin + '/images/Falcon.png'} alt="" />
                        <img src={window.location.origin + '/images/PWT-Texas.png'} alt="" />
                        <img src={window.location.origin + '/images/Black-Viper-Technolgoies.png'} alt="" />
                        <img src={window.location.origin + '/images/creative-veteran.png'} alt="" />
                        <img src={window.location.origin + '/images/ivalua.png'} alt="" />
                    </div>
                </div>
            </section>

            <section className="govShop__VisibilityNdRelation">
                <div className="innerGovShop__Relation">
                    <h2>Government Buyers from state, local, federal, <br />agencies are joining every day as well</h2>
                    <div className="brandImageBox GobBuyerImg">
                        <img src={window.location.origin + '/images/brands/united-states-federal-aviation-administration.png'} alt="" />
                        <img src={window.location.origin + '/images/brands/PA-Dept-of-General-Services.png'} alt="" />
                        <img src={window.location.origin + '/images/brands/VA.png'} alt="" />
                        <img src={window.location.origin + '/images/brands/JLab.png'} alt="" />
                        <img src={window.location.origin + '/images/brands/US-Army.png'} alt="" />
                        <img src={window.location.origin + '/images/brands/Cooperative-Purchasing-Connection.png'} alt="" />
                        <img src={window.location.origin + '/images/brands/north-texas-health-care-system.png'} alt="" />
                        <img src={window.location.origin + '/images/brands/Captain-James-Lovell-Federal-Health-Care-Center.png'} alt="" />
                        <img src={window.location.origin + '/images/brands/CBP.png'} alt="" />
                        <img src={window.location.origin + '/images/brands/Army-Medical-Command.png'} alt="" />
                        <img src={window.location.origin + '/images/brands/leesburg.png'} alt="" />
                        <img src={window.location.origin + '/images/brands/first-choice.png'} alt="" />
                        <img src={window.location.origin + '/images/brands/crcog.png'} alt="" />
                        <img src={window.location.origin + '/images/brands/West-Texas-VA.png'} alt="" />
                        <img src={window.location.origin + '/images/brands/naid.png'} alt="" />
                        <img src={window.location.origin + '/images/brands/VA-Portland-Health-Care-System.png'} alt="" />
                        <img src={window.location.origin + '/images/brands/City-of-Harrisonburg.png'} alt="" />
                        <img src={window.location.origin + '/images/brands/City-of-West-Allis.png'} alt="" />
                        <img src={window.location.origin + '/images/brands/USAF-50th-Contracting-Squadron.png'} alt="" />
                        <img src={window.location.origin + '/images/brands/State-of-Ohio.png'} alt="" />
                        <img src={window.location.origin + '/images/brands/AFICA.png'} alt="" />
                        <img src={window.location.origin + '/images/brands/rhcatlantic.png'} alt="" />
                        <img src={window.location.origin + '/images/brands/Judicial-Virgin-Islands.png'} alt="" />
                    </div>
                </div>
            </section>
            <section className="publicSector__business" style={{backgroundImage:`url(${window.location.origin + '/images/subscription-plans-join-bg.png'})`}}>
                <div className="inerPSB__box">
                    <h2>Start growing your public sector business</h2>
                    <p>Our global ecosystem of buyers and suppliers is growing by the day. Thousands of users have trusted us and joined our community across the world. By joining, you become part of the bigger community and can have a bigger impact across the public sector</p>
                    <a className="planBtn" href="/">JOIN GOVSHOP</a>
                </div>
            </section>
            <section className="feedBackOf__ContUs" style={{backgroundImage:`url(${window.location.origin + '/images/map01.png'}), url(${window.location.origin + '/images/map02.png'})`}}>
                <div className="inerFeed__box">
                    <h2>Have feedback, questions or concerns? <br />We’d love to hear from you</h2>
                    <a className="contBtnOf__Feedback" href="/">CONTACT US</a>
                </div>
            </section>
        </>
    )
}

export default Home
