'use client';
import { styled } from 'styled-components';

export const Wrapper = styled.section`
  padding: 1rem 0;
  border-bottom: 0.5px solid #3d3d3d;
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    width: 50px;
    height: 50px;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    justify-content: space-between;
    width: 100%;
  }
`;

export const BurgerMenu = styled.div`
  display: none;
  position: relative;

  @media (max-width: 768px) {
    display: block;
    padding: 0.5rem;

    div {
      position: absolute;
      background: var(--emerald);
      width: '250px';
      height: '300px';
      border-radius: 25px;
      z-index: 1;
      top: 50px;
    }

    img {
      position: relative;
      z-index: 2;
      object-fit: cover;
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 3rem;

  a {
    color: var(--link-color);
    font-size: 1rem;
    font-weight: 400;
    text-decoration: none;
  }

  @media (max-width: 768px) {
    position: absolute;
    top: 60px;
    right: 20px;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    background: #111;
    padding: 1rem 2rem;
    border-radius: 10px;
    visibility: hidden;
    opacity: 0;
    transition: all 0.3s ease;

    &.active {
      visibility: visible;
      opacity: 1;
    }
  }
`;

export const CallToActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  div span {
    color: var(--white);
    font-size: 1rem;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    position: absolute;
    top: 380px;
    right: 50px;
    flex-direction: column;
    gap: 1rem;
    visibility: hidden;
    opacity: 0;
    transition: all 0.3s ease;

    &.active {
      visibility: visible;
      opacity: 1;
    }
  }
`;

