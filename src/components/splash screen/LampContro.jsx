import React, { useState } from "react";
import styled from "styled-components";

const LampWrapper = styled.div`
  /* Add your CSS styles for lamp here */
  position: absolute;
  left: 0; /* Position the lamp on the left */
  top: 0; /* Adjust the top position as needed */
`;

const WallLightShadow = styled.div`
  /* Add your CSS styles for lamp shadow here */
  position: absolute;
  left: 0; /* Position the shadow on the left */
  top: 0; /* Adjust the top position as needed */
`;


const LampControl = () => {
  const [lightLevel, setLightLevel] = useState(0);

  const handleLightChange = (e) => {
    setLightLevel(e.target.value);
  };

  return (
    <div>
      <form>
        {/* Your lamp structure from HTML */}
        <LampWrapper>
          {/* Lamp elements */}
        </LampWrapper>
        <WallLightShadow>
          {/* Wall light shadow elements */}
        </WallLightShadow>
        <input
          type="range"
          id="slider"
          value={lightLevel}
          min="0"
          max="10"
          onChange={handleLightChange}
        />
      </form>
    </div>
  );
};

export default LampControl;
