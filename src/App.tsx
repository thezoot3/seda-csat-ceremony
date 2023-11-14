import React, { useState } from 'react';

const FlashlightController = () => {
  const [isFlashlightOn, setIsFlashlightOn] = useState(false);

  const toggleFlashlight = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
      const track = stream.getVideoTracks()[0];
      await track.applyConstraints({
        //@ts-ignore
        advanced: [{ torch: !isFlashlightOn }]
      });
      setIsFlashlightOn(!isFlashlightOn);
    } catch (error) {
      console.error('Error accessing camera or controlling flashlight:', error);
    }
  };

  return (
    <div>
      <button onClick={toggleFlashlight}>
        {isFlashlightOn ? 'Turn Off Flashlight' : 'Turn On Flashlight'}
      </button>
    </div>
  );
};

export default FlashlightController;
