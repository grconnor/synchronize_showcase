import Image from 'next/image';
import React from 'react';

import Slack from '@icons/slack.svg';
import Gmail from '@icons/gmail.svg';
import HeroSynchronize from './HeroSynchronize';

const HeroImages = () => {
  return (
    <>
      <Gmail className="hero-gmail" />
      <Image
        src="https://uploads-ssl.webflow.com/64749604df70334b40f9cb53/647f3e7e7cb92c6f6cde0a39_Arrow%201.svg"
        loading="lazy"
        alt=""
        className="hero-arrow-1"
        width={250}
        height={125}
      />
      <HeroSynchronize />
      <Image
        src="https://uploads-ssl.webflow.com/64749604df70334b40f9cb53/647f3e7e5e02e4034eaa9e9f_Arrow%202.svg"
        loading="lazy"
        alt=""
        className="hero-arrow-2"
        width={250}
        height={125}
      />
      <Slack className="hero-slack" />
    </>
  );
};

export default HeroImages;
