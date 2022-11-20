import { MemberCard, MemberName, MemberImage, MemberPosition } from "./styles/LeadMemberCard.style";

const LeadMemberCard = (props) => {
  return (
    <>
      <MemberCard>
        <MemberImage src={props.img} />
        <MemberName>{props.MemberName}</MemberName>
        <MemberPosition>{props.MemberPosition}</MemberPosition>
      </MemberCard>
    </>
  );
};

export default LeadMemberCard;
