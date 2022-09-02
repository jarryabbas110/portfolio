import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {FiDribbble} from 'react-icons/fi';
import {FaFacebookF} from 'react-icons/fa';
import {RiBehanceFill} from 'react-icons/ri';
import {GrInstagram} from 'react-icons/gr';

const Socials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com" target="_blank"><FaGithub /></a>
        <a href="https://dribbble.com" target="_blank"><FaFacebookF /></a>
        <a href="https://dribbble.com" target="_blank"><RiBehanceFill /></a>
        <a href="https://dribbble.com" target="_blank"><GrInstagram /></a>
    </div>
  )
}

export default Socials