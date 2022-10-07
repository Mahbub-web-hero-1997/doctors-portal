import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='mt-5'>
            <footer  class="footer p-10 bg-white text-accent">
                <div data-aos="fade-right">
                    <span class="footer-title">Services</span>
                    <Link to='#' class="link link-hover">Branding</Link>
                    <Link to='#' class="link link-hover">Design</Link>
                    <Link to='#' class="link link-hover">Marketing</Link>
                    <Link to='#' class="link link-hover">Advertisement</Link>
                </div>
                <div data-aos="fade-down">
                    <span class="footer-title">Company</span>
                    <Link to='#' class="link link-hover">About us</Link>
                    <Link to='#' class="link link-hover">Contact</Link>
                    <Link to='#' class="link link-hover">Jobs</Link>
                    <Link to='#' class="link link-hover">Press kit</Link>
                </div>
                <div data-aos="fade-left">
                    <span >Legal</span>
                    <Link to='#' class="link link-hover">Terms of use</Link>
                    <Link to='#' class="link link-hover">Privacy policy</Link>
                    <Link to='#' class="link link-hover">Cookie policy</Link>
                </div>
            </footer>
            &copy; Mahbub-2022
        </div>
    );
};

export default Footer;