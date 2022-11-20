import styled from "styled-components";
import { Button } from "@mui/material";
import { breakpoints } from "./utils";

export const Wrapper = styled.div`
    font-family: "Inter", sans-serif;
`;

export const Title = styled.h3`
    font-size: 25px;
    text-align: ${(props) => props.position.align};
    margin-top: ${(props) => props.position.marginTop};
    font-weight: 600;
    color: #00296b;
    line-height: 32px;
    letter-spacing: -0.02em;
    ${breakpoints("font-size", "px", [{ 480: 16 }])};
    ${breakpoints("line-height", "px", [{ 480: 24 }])};

    @media (max-width: 768px) {
        color: ${(props) => props.position.sm};
    }
`;

export const Header = styled.h1`
    font-size: 40px;
    text-align: center;
    font-weight: 600;
    color: #00296b;
    line-height: 32px;
    letter-spacing: -0.02em;
    margin-bottom: 40px;
    margin-top: 70px;
    ${breakpoints("font-size", "px", [{ 768: 32 }, { 480: 22 }])};
    ${breakpoints("margin", "", [{ 768: "30px 0" }])};
`;

export const Paragraph = styled.p`
    font-size: 18px;
    text-align: center;
    font-weight: 600;
    color: #0f172a;
    line-height: 32px;
    letter-spacing: -0.02em;
    margin-bottom: 50px;
    ${breakpoints("font-size", "px", [{ 480: 13 }])};
    ${breakpoints("line-height", "px", [{ 480: 20 }])};
`;

export const Section = styled.section`
    background: #f8fafc;
    border-radius: 12px;
    padding: 20px;
    height: 100%;
`;

export const Text = styled.section`
    color: #0f172a;
    text-align: left;
    line-height: 20px;
    font-weight: 400;
    font-size: 16px;
    margin-top: 3px;
    ${breakpoints("font-size", "px", [{ 480: 14 }])};
`;

export const SubSection = styled.section`
    padding-bottom: 20px;
`;

export const SubTitle = styled.section`
    color: #0f172a;
    text-align: left;
    line-height: 22px;
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 10px;
    ${breakpoints("font-size", "px", [{ 480: 14 }])};
`;

export const StyledGrid = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    margin-top: 40px;
    ${breakpoints("display", "", [{ 480: "block" }])};
`;

export const StyledButton = styled(Button)`
    background: #0062ff !important;
    color: #fff;
    height: 45px;
    width: 100px;
    padding: 16px 20px !important;
    font-size: 16px !important;
    text-transform: none !important;
    ${breakpoints("width", "%", [{ 480: "100" }])};
`;

export const ListItemButtonText = styled(Button)`
    text-transform: none !important;
    font-size: 16px !important;
`;
