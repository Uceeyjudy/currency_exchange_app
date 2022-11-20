import React from "react";
import ExpertImage from "../Pages/Partnerships/assets/images/ExpertImage.png";

// stytles
import { StyledExperts } from "../Pages/Partnerships/styles/Experts.styles";

const Experts = () => {
  return (
    <StyledExperts>
      <div className="expert-profile">
        {/* expert image, name and title */}
        <img src={ExpertImage} alt="expert" />
        <h1>Sotonye Briggs</h1>
        <h3>Strategic Partnerships</h3>
      </div>

      {/* expert description */}
      <div className="expert-details">
        <h1>Street Rates Currency Experts</h1>
        <p>
          With some 15 years' experience in the foreign exchange industry,
          Sotonye works alongside our key strategic partnership solution and
          mass payments clients. With our partnership solutions, we enable
          international banks and retail brands to deliver industry-leading
          services to their clients, further enhancing their service offering
          and strengthening the relationship they have with their clients.
        </p>
      </div>
    </StyledExperts>
  );
};

export default Experts;
