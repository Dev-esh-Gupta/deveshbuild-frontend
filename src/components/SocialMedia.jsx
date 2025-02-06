import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import {FaFacebookF, FaLinkedinIn, FaGithub} from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
            <a href="https://github.com/Dev-esh-Gupta" target="_blank" rel="nooperner noreferrer">
            <FaGithub />
            </a>
        </div>
        <div>
        <a href="https://www.instagram.com/dev_3740/" target="_blank" rel="nooperner noreferrer">
            <BsInstagram />
            </a>
        </div>
        <div>
        <a href="https://www.facebook.com/devesh.gupta.5602" target="_blank" rel="nooperner noreferrer">
            <FaFacebookF />
            </a>
        </div>
        <div>
        <a href="https://www.linkedin.com/in/dev-esh-gupta/" target="_blank" rel="nooperner noreferrer">
            <FaLinkedinIn />
            </a>
        </div>
    </div>
  )
}

export default SocialMedia