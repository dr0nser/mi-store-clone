import React from 'react'
import "../styles/Footer.css";

const recycleIcon = <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24" width="48px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z"/></svg>
const shieldIcon = <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24" width="48px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm7 10c0 4.52-2.98 8.69-7 9.93-4.02-1.24-7-5.41-7-9.93V6.3l7-3.11 7 3.11V11zm-11.59.59L6 13l4 4 8-8-1.41-1.42L10 14.17z"/></svg>
const globeIcon = <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24" width="48px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-.61.08-1.21.21-1.78L8.99 15v1c0 1.1.9 2 2 2v1.93C7.06 19.43 4 16.07 4 12zm13.89 5.4c-.26-.81-1-1.4-1.9-1.4h-1v-3c0-.55-.45-1-1-1h-6v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41C17.92 5.77 20 8.65 20 12c0 2.08-.81 3.98-2.11 5.4z"/></svg>
const forwardIcon = <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"/></svg>
const facebookIcon = <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px">    <path d="M12,27V15H8v-4h4V8.852C12,4.785,13.981,3,17.361,3c1.619,0,2.475,0.12,2.88,0.175V7h-2.305C16.501,7,16,7.757,16,9.291V11 h4.205l-0.571,4H16v12H12z"/></svg>
const youtubeIcon = <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px"><path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,14.598V9.402c0-0.385,0.417-0.625,0.75-0.433l4.5,2.598c0.333,0.192,0.333,0.674,0,0.866l-4.5,2.598 C10.417,15.224,10,14.983,10,14.598z"/></svg>
const instagramIcon = <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 32 32" width="32px" height="32px"><path d="M 8 5 C 6.355469 5 5 6.355469 5 8 L 5 24 C 5 25.644531 6.355469 27 8 27 L 24 27 C 25.644531 27 27 25.644531 27 24 L 27 8 C 27 6.355469 25.644531 5 24 5 Z M 21 8 L 24 8 L 24 11 L 21 11 Z M 16 12 C 18.222656 12 20 13.777344 20 16 C 20 18.222656 18.222656 20 16 20 C 13.777344 20 12 18.222656 12 16 C 12 13.777344 13.777344 12 16 12 Z M 7 14 L 10.34375 14 C 10.121094 14.625 10 15.300781 10 16 C 10 19.300781 12.699219 22 16 22 C 19.300781 22 22 19.300781 22 16 C 22 15.300781 21.878906 14.625 21.65625 14 L 25 14 L 25 24 C 25 24.566406 24.566406 25 24 25 L 8 25 C 7.433594 25 7 24.566406 7 24 Z"/></svg>
const twitterIcon = <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px">    <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"/></svg>

const Footer = ({ footer }) => {
    return (
        <div className="footer">
            <div className="preFooter1">
                <div>
                    <div className="footer1-detail">
                        {recycleIcon}
                        <p><span>Hassle-free replacement</span><br/>10-day easy replacement policy on mi.com</p>
                    </div>
                    <div className="footer1-detail">
                        {shieldIcon}
                        <p><span>100% secure payments</span><br/>We support Cards, Wallets, EMI and COD</p>
                    </div>
                    <div className="footer1-detail">
                        {globeIcon}
                        <p><span>Vast service network</span><br/>1000 Mi service-centers across 600</p>
                    </div>
                </div>
            </div>
            <div className="preFooter2">
                <div>
                    <div>
                        <h5>LET'S STAY IN TOUCH</h5>
                        <p>Get updates on sales specials and more</p>
                    </div>
                    <div className="footer-input">
                        <div>
                            <input type="text" placeholder="Enter Email Address" />
                            <button>{forwardIcon}</button>
                        </div>
                    </div>
                    <div>
                        <h5>FOLLOW MI</h5>
                        <p>We want to hear from you!</p>
                    </div>
                    <ul>
                        <li><a href="https://www.facebook.com/XiaomiIndia">{facebookIcon}</a></li>
                        <li><a href="https://www.youtube.com/user/MiIndiaOfficial">{youtubeIcon}</a></li>
                        <li><a href="https://www.instagram.com/xiaomiindia/">{instagramIcon}</a></li>
                        <li><a href="https://twitter.com/XiaomiIndia">{twitterIcon}</a></li>
                    </ul>
                </div>
            </div>
            <div className="footerLinks">
                <div>
                    <div className="footerLinksSection">
                        <p className="footerLinksHeading">SUPPORT</p>
                        {
                            footer.support.map((item, index) => (
                                <a className="footerlink" key={item.url} href={item.url}>{item.name}</a>
                            ))
                        }
                    </div>
                    <div className="footerLinksSection">
                        <p className="footerLinksHeading">SHOP AND LEARN</p>
                        {
                            footer.shopAndLearn.map((item, index) => (
                                <a className="footerlink" key={item.url} href={item.url}>{item.name}</a>
                            ))
                        }
                    </div>
                    <div className="footerLinksSection">
                        <p className="footerLinksHeading">RETAIL STORE</p>
                        {
                            footer.retailStore.map((item, index) => (
                                <a className="footerlink" key={item.url} href={item.url}>{item.name}</a>
                            ))
                        }
                    </div>
                    <div className="footerLinksSection">
                        <p className="footerLinksHeading">ABOUT US</p>
                        {
                            footer.aboutUS.map((item, index) => (
                                <a className="footerlink" key={item.url} href={item.url}>{item.name}</a>
                            ))
                        }
                    </div>
                    <div className="footerLinksSection">
                        <p className="footerLinksHeading">CONTACT US</p>
                        {
                            footer.contactUs.map((item, index) => (
                                <a className="footerlink" key={item.url} href={item.url}>{item.name}</a>
                            ))
                        }
                    </div>
                    <div>
                        <p>Chat with our Virtual AI Bot<br/>(24/7 Live Agent Support)</p>
                        <button>CHAT NOW</button>
                    </div>
                </div>
            </div>
            <div className="footerCopyright">
                <div>
                    <p>Copyright © 2010 - 2021 Xiaomi. All Rights Reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
