import CardHeader from "../CardComponent/CardHeader";
import {
  StyledAlert,
  StyledAlertPreview,
  StyledAlerts,
  StyledWrapper,
} from "./CurrencyNotifications.styled";
import { ReactComponent as NotificationIcon } from "../../../assets/icons/notification_icon.svg";
import { ReactComponent as TrendUpIcon } from "../../../assets/icons/trendup.svg";
import { ReactComponent as TrendDownIcon } from "../../../assets/icons/trenddown.svg";
import { ReactComponent as ArrowRightIcon } from "../../../assets/icons/arrow_right.svg";
import Divider from "@mui/material/Divider";
import { moneyFormatter } from "../FormatCurrency/FormatCurrency";
import ButtonCustom from "../Button/ButtonCustom";

const data = [
  {
    market: "Benin BDC",
    growth: true,
    rate: 887,
    priceUdated: false,
  },
  {
    market: "Lagos BDC",
    growth: true,
    rate: 882,
    priceUdated: true,
  },
  {
    market: "Lagos BDC",
    growth: true,
    rate: 881,
    priceUdated: true,
  },
  {
    market: "Abuja BDC",
    growth: false,
    rate: 890,
    priceUdated: true,
  },
  {
    market: "CBN Official",
    growth: true,
    rate: 483,
    priceUdated: true,
  },
];

function CurrencyNotifications() {
  return (
    <>
      <StyledWrapper>
        <CardHeader
          icon={<NotificationIcon />}
          title="Currency Notifications"
        />

        <Divider />

        <StyledAlerts>
          {data.map((option, index) => (
            <StyledAlert key={index} $trendUp={option.growth}>
              <div className="trend">
                {option.growth ? <TrendUpIcon /> : <TrendDownIcon />}
              </div>

              <StyledAlertPreview>
                <h5>New Price Alert</h5>
                <p>
                  {`${option.market} Rate now `}
                  <span>{moneyFormatter(option.rate)}</span>
                </p>
              </StyledAlertPreview>

              <ButtonCustom disabled={option.priceUdated ? true : false}>
                Update Price
              </ButtonCustom>
            </StyledAlert>
          ))}
        </StyledAlerts>

        <div style={{ marginTop: "8px" }}>
          <ButtonCustom icon={<ArrowRightIcon />}>Sell all</ButtonCustom>
        </div>
      </StyledWrapper>
    </>
  );
}

export default CurrencyNotifications;
