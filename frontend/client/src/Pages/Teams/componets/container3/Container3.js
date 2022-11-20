import React from "react";
import { Container } from "./styles/Container.style";
import { DepartmentsHeading } from "./styles/DepartmentsHeading.style";
import { DepartmentTiles } from "./styles/DepartmentTiles.style";
import DepartmentTile from "./DepartmentTile";
import engineeringDepartmentIcon from "../../assets/department_icons/engineeringDepartmentIcon.svg";
import marketingDepartmentIcon from "../../assets/department_icons/marketingDepartmentIcon.svg";
import productDepartmentIcon from "../../assets/department_icons/productDepartmentIcon.svg";
import arrow from '../../assets/department_icons/arrow-right.svg'
import { JoinTeam } from "./styles/JoinTeam.style";
import { Link } from 'react-router-dom'


const Container3 = () => {
  return (
    <>
      <Container>
        <DepartmentsHeading>Our Departments</DepartmentsHeading>
        <DepartmentTiles>
          <DepartmentTile
            img={engineeringDepartmentIcon}
            DepartmentName="Engineering"
            DepartmentInfo="We develop products that transforms how you, our users your their needs."
          />
          <DepartmentTile
            img={marketingDepartmentIcon}
            DepartmentName="Marketing"
            DepartmentInfo="We are a powerful team responsible for researching analysing, and defining the market trends and align our product offering to your needs."
          />
          <DepartmentTile
            img={productDepartmentIcon}
            DepartmentName="Product"
            DepartmentInfo="A team of product managers and designers that build StreetRates into a product made just for you."
          />
        </DepartmentTiles>
      </Container>
      <JoinTeam>
        <h1>Interested in joining our team?</h1>
        <Link to={'/careers'}>Visit our careers page <img src={arrow} alt='arrow'/> </Link>
      </JoinTeam>
    </>
  );
};

export default Container3;
