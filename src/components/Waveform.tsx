import { useEffect, useRef, useState } from 'react';
import { Box } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import WaveSurfer from 'wavesurfer.js';
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import Spectrogram from 'wavesurfer.js/dist/plugin/wavesurfer.spectrogram.min.js';

const propTypes = {
  audio: PropTypes.string.isRequired
};

type ComponentProps = PropTypes.InferProps<typeof propTypes>;

const Waveform = ({ audio }: ComponentProps) => {
  const containerRef = useRef();
  const spectroContainer = useRef();
  const waveSurferRef = useRef({
    isPlaying: () => false
  });
  const [isPlaying, toggleIsPlaying] = useState(false);

  useEffect(() => {
    const waveSurfer = WaveSurfer.create({
      container: containerRef.current,
      responsive: true,
      barWidth: 2,
      barHeight: 10,
      cursorWidth: 0,
      plugins: [
        Spectrogram.create({
          container: spectroContainer.current
        })
      ]
    });
    waveSurfer.load(audio);
    waveSurfer.on('ready', () => {
      waveSurferRef.current = waveSurfer;
    });

    return () => {
      waveSurfer.destroy();
    };
  }, [audio]);

  return (
    <WaveSurferWrap>
      <ReactPlayer
        url={audio}
        width="226px"
        height="33px"
        playing={false}
        controls={true}
        onPlay={() => {
          waveSurferRef.current.playPause();
          toggleIsPlaying(waveSurferRef.current.isPlaying());
        }}
        onPause={() => {
          waveSurferRef.current.playPause();
          toggleIsPlaying(waveSurferRef.current.isPlaying());
        }}
      />
      <Box mt={3} ref={containerRef} />

      <Box mt={3} ref={spectroContainer} />
    </WaveSurferWrap>
  );
};

Waveform.propTypes = propTypes;

const WaveSurferWrap = styled.div`
  width: 80%;
`;

export default Waveform;
