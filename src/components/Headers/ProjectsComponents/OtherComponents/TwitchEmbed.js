import React, { useEffect, useRef } from 'react';

function TwitchStream(props) {
  const { channel } = props;
  const twitchPlayerRef = useRef(null);

  useEffect(() => {
    const options = {
      width: '100%',
      height: '400',
      channel: channel,
      autoplay: false
    };
    const player = new window.Twitch.Player(twitchPlayerRef.current, options);
    player.setVolume(0.5);
    return () => {
      player.destroy();
    };
  }, [channel]);

  return (
    <div ref={twitchPlayerRef}></div>
  );
}

export default TwitchStream;