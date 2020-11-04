import styled, { css, keyframes } from 'styled-components';
import { useState, useEffect, useCallback } from "react";

export function useUserMedia(requestedMedia) {
  const [mediaStream, setMediaStream] = useState(null);

  useEffect(() => {
    async function enableStream() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia(requestedMedia);
        setMediaStream(stream);
      } catch(err) {
        // Removed for brevity
      }
    }

    if (!mediaStream) {
      enableStream();
    } else {
      return function cleanup() {
        mediaStream.getTracks().forEach(track => {
          track.stop();
        });
      }
    }
  }, [mediaStream, requestedMedia]);

  return mediaStream;
}

export function useCardRatio(initialRatio) {
  const [aspectRatio, setAspectRatio] = useState(initialRatio);

  const calculateRatio = useCallback((height, width) => {
    if (height && width) {
      const isLandscape = height <= width;
      const ratio = isLandscape ? width / height : height / width;

      setAspectRatio(ratio);
    }
  }, []);

  return [aspectRatio, calculateRatio];
}

export function useOffsets(vWidth, vHeight, cWidth, cHeight) {
  const [offsets, setOffsets] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (vWidth && vHeight && cWidth && cHeight) {
      const x = vWidth > cWidth
        ? Math.round((vWidth - cWidth) / 2)
        : 0;

      const y = vHeight > cHeight
        ? Math.round((vHeight - cHeight) / 2)
        : 0;

      setOffsets({ x, y });
    }
  }, [vWidth, vHeight, cWidth, cHeight]);

  return offsets;
}

const flashAnimation = keyframes`
  from {
    opacity: 0.75;
  }

  to {
    opacity: 0;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
`;

export const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth && `${maxWidth}px`};
  max-height: ${({ maxHeight }) => maxHeight && `${maxHeight}px`};
`;

export const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
`;

export const Video = styled.video`
  position: absolute;

  &::-webkit-media-controls-play-button {
    display: none !important;
    -webkit-appearance: none;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  bottom: 20px;
  left: 20px;
  box-shadow: 0px 0px 20px 56px rgba(0, 0, 0, 0.6);
  border: 1px solid #ffffff;
  border-radius: 10px;
`;

export const Flash = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
  background-color: #ffffff;

  ${({ flash }) => {
    if (flash) {
      return css`
        animation: ${flashAnimation} 750ms ease-out;
      `;
    }
  }}
`;