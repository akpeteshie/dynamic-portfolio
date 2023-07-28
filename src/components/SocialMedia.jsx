import React from 'react'
import { BsLinkedin, BsMailbox2 } from 'react-icons/bs';

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a href={'https://www.linkedin.com/in/selasietse/'}>
        <div>
          <BsLinkedin />
        </div>
      </a>
      <a href={'mailto:selasietse@gmail.com'}>
        <div>
          <BsMailbox2 />
        </div>
      </a>
    </div>
  )
}

export default SocialMedia
