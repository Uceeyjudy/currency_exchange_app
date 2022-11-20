import Messages from "../shared/MessagesComponent/Messages";
import CurrencyNotifications from "../shared/CurrencyNotifications/CurrencyNotification";
import TrendingConversions from "../TrendingConversions/TrendingConversions";
import { StyledDashboardLayout } from "./dashboardLayoutStyle";

const DashboardLayout = () => {
  return (
    <main>
      <StyledDashboardLayout>
        <div id="messages">
          <Messages />
        </div>

        <div id="notifications">
          <CurrencyNotifications />
        </div>

        <div id="currencies">{/*  */}</div>

        <div id="country">{/*  */}</div>

        <div id="conversions">
          <TrendingConversions />
        </div>
      </StyledDashboardLayout>
    </main>
  );
};

export default DashboardLayout;
