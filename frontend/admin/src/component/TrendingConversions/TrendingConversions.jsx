import React from "react";
import CardHeader from "../shared/CardComponent/CardHeader";
import {
  StyledTCOption,
  StyledTCOptionCurrency,
  StyledTCOptionMain,
  StyledTCOptions,
  StyledTCWrapper,
} from "./TrendingConversions.styled";
import Divider from "@mui/material/Divider";
import { ReactComponent as TCIcon } from "../../assets/icons/TC.svg";
import { ReactComponent as ArrowRightIcon } from "../../assets/icons/arrow_right.svg";
import Flag__usa from "../../assets/images/flag_usa.png";
import Flag__cny from "../../assets/images/flag_cny.png";
import Flag__ngn from "../../assets/images/flag_ngn.png";
import Flag__gbp from "../../assets/images/flag_gbp.png";
import Flag__eur from "../../assets/images/flag_eur.png";
import ButtonCustom from "../shared/Button/ButtonCustom";

const tcData = [
  {
    from: { currency: "USD", flag: Flag__usa },
    to: { currency: "NGN", flag: Flag__ngn },
  },
  {
    from: { currency: "GBP", flag: Flag__gbp },
    to: { currency: "NGN", flag: Flag__ngn },
  },
  {
    from: { currency: "USD", flag: Flag__usa },
    to: { currency: "CNY", flag: Flag__cny },
  },
  {
    from: { currency: "USD", flag: Flag__usa },
    to: { currency: "EUR", flag: Flag__eur },
  },
];
function TrendingConversions() {
  return (
    <StyledTCWrapper>
      <CardHeader icon={<TCIcon />} title="Trending Conversions" />

      <Divider />

      <StyledTCOptions>
        {tcData.map((item, index) => (
          <StyledTCOption key={index}>
            <StyledTCOptionMain>
              <StyledTCOptionCurrency>
                <div className="flag">
                  <img alt="flag" src={item.from.flag} />
                </div>
                <p>{item.from.currency}</p>
              </StyledTCOptionCurrency>

              <div className="tcIcon">
                <TCIcon />
              </div>

              <StyledTCOptionCurrency>
                <div className="flag">
                  <img alt="flag" src={item.to.flag} />
                </div>
                <p>{item.to.currency}</p>
              </StyledTCOptionCurrency>
            </StyledTCOptionMain>

            <ButtonCustom>View</ButtonCustom>
          </StyledTCOption>
        ))}
      </StyledTCOptions>

      <div style={{ marginTop: "12px" }}>
        <ButtonCustom icon={<ArrowRightIcon />}>Sell all</ButtonCustom>
      </div>
    </StyledTCWrapper>
  );
}

export default TrendingConversions;
