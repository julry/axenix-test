import React, { useEffect, useRef, useState } from 'react';
import styled from "styled-components";
import { preloadImage } from "./utils/preloadImage";
import { ProgressProvider } from './context/ProgressContext';
import { useProgressInit } from './hooks/useProgressInit';

const Wrapper = styled.div`
  ${({ styles }) => styles};
  background-size: cover;
  position: relative;
  overflow: hidden;
`;

const ComponentWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: auto;
  white-space: pre-line;
`;

export function App() {
  const [height, setHeight] = useState('100vh');
  const progress = useProgressInit();
  const { screen, updateProgress } = progress;

  const Component = screen?.component || (() => null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    updateProgress('wrapperRef', wrapperRef);
  }, []);

  useEffect(() => {
    const preloadImages = screen?.preloadImages;
    const clears = preloadImages && preloadImages.map(img => preloadImage(img));
    return () => clears && clears.forEach(clear => clear());
  }, [screen]);


  useEffect(() => {
    function handleResize() {
      const viewportHeight = document.documentElement.clientHeight;
      setHeight(viewportHeight + 'px');
    }
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <ProgressProvider value={progress}>
      <Wrapper styles={{ height }}>
          <ComponentWrapper ref={wrapperRef}>
              <Component />
          </ComponentWrapper>
      </Wrapper>
    </ProgressProvider>
  );
}
