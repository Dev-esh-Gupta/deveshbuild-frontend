import React from 'react';
import {BsTwitter, BsInstagram } from 'react-icons/bs';
import {FaFacebookF, FaLinkedinIn} from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
            <BsTwitter />
        </div>
        <div>
            <BsInstagram />
        </div>
        <div>
            <FaFacebookF />
        </div>
        <div>
            <FaLinkedinIn />
        </div>
    </div>
  )
}

export default SocialMedia