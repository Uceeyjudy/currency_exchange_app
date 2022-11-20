import React from "react";
import {
  StyledMessage,
  StyledMessagePreview,
  StyledMessages,
  StyledMessagesWrapper,
} from "./Messages.styled";
import { ReactComponent as MssgIcon } from "../../../assets/icons/message.svg";
import { ReactComponent as UnreadIcon } from "../../../assets/icons/unread.svg";
import CardHeader from "../CardComponent/CardHeader";
import Divider from "@mui/material/Divider";
import Person1 from "../../../assets/images/person1.png";
import Person2 from "../../../assets/images/person2.png";
import Person3 from "../../../assets/images/person3.png";
import AvatarLoader from "../AvatarLoader/AvatarLoader";

const MessagesData = [
  {
    sender: "Kristin Watson",
    message: "Hello, can youcheck the Latest API Update",
    pfp_url: Person1,
    isRead: false,
  },
  {
    sender: "Courtney Henry",
    message: "Seen, thanks",
    pfp_url: Person2,
    isRead: true,
  },
  {
    sender: "Bessie Cooper",
    message: "Alright, very well noted",
    pfp_url: Person3,
    isRead: false,
  },
];

function Messages() {
  return (
    <StyledMessagesWrapper>
      <CardHeader title="Messages" icon={<MssgIcon />} />

      <Divider />

      <StyledMessages>
        {MessagesData.map((option, index) => (
          <StyledMessage key={index}>
            <AvatarLoader image={option.pfp_url} alt={option.sender} />
            <StyledMessagePreview>
              <h5>{option.sender}</h5>
              <p>{option.message}</p>
            </StyledMessagePreview>

            {!option.isRead ? (
              <div className="unread">
                <UnreadIcon />
              </div>
            ) : undefined}
          </StyledMessage>
        ))}
      </StyledMessages>
    </StyledMessagesWrapper>
  );
}

export default Messages;
