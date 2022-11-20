import React from "react";
import groupIcon from "./assets/svg/GroupIcon.svg";
import ReferralPartnersType from "./ReferralPartnersType";

// styles
import {
  PartnersHeader,
  PartnersDescription,
} from "./styles/ReferralPartners.styles";

const ReferralPartners = () => {
  return (
    <section>
      {/* header */}
      <PartnersHeader>
        <img src={groupIcon} alt="group icon" />
        <h1>Referral Partners</h1>
      </PartnersHeader>

      {/* partners section description */}
      <PartnersDescription>
        Considering how important your clients are to your business, it's
        essential you choose the right international payments partner. We're
        proud that hundreds of businesses including banks, financial
        institutions, retailers, estate agents and financial advisors recommend
        Street Rates.
      </PartnersDescription>

      {/* introducers and affliate */}
      <ReferralPartnersType />
    </section>
  );
};

export default ReferralPartners;
