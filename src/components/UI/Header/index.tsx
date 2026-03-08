'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Wrapper,
  Inner,
  LogoContainer,
  Nav,
  CallToActions,
  BurgerMenu,
} from './styles';
import raft_logo from '../../../../public/svgs/margilanhokimligi.jpg';
import ic_bars from '../../../../public/svgs/ic_bars.svg';
import { GetStartedButton } from '@/components';
import AnimatedLink from '@/components/Common/AnimatedLink';
import { links, menu } from './constants';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper>
      <Inner>
        <LogoContainer>
          <Image
            src={raft_logo}
            alt="Marg‘ilon hokimligi logo"
            width={50}
            height={50}
            priority
          />
          <BurgerMenu onClick={() => setIsOpen(!isOpen)}>
            <motion.div
              variants={menu}
              animate={isOpen ? 'open' : 'closed'}
              initial="closed"
            />
            <Image src={ic_bars} alt="menu bars" width={24} height={24} />
          </BurgerMenu>
        </LogoContainer>

        <Nav className={isOpen ? 'active' : ''}>
          {links.map((link, i) => (
            <AnimatedLink key={i} title={link.linkTo} />
          ))}
        </Nav>

        <CallToActions className={isOpen ? 'active' : ''}>
          <AnimatedLink title="Login" />
          <GetStartedButton padding="0.5rem 0.75rem" />
        </CallToActions>
      </Inner>
    </Wrapper>
  );
};

export default Header;