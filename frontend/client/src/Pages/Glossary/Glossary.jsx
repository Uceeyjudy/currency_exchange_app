import React from "react";
import {
  Search,
  Parent,
  Items,
  Box,
  Alphabet,
  Header,
  ImageLeft,
  LeftTop,
  LeftMiddle,
  LeftBottom,
  ImageRight,
  RightTop,
  RightMiddle,
  RightBottom,
  Head,
} from "./GlossaryElement";

function Glossary() {
  const boxes = [
    {
      name: "A",
      items: ["Account", "Asset", "ABX Index", "Aa3"],
    },

    {
      name: "B",
      items: ["Account", "Barter", "Budget", "Backwardation"],
    },

    {
      name: "C",
      items: [
        "Consumption",

        "Cost of capital",
        "Consumer Surplus",
        "Cost Benefit Analysis",
      ],
    },

    {
      name: "D",
      items: ["Deviation", "Deposit Insurance", "Deregulation", "Dept"],
    },

    {
      name: "E",
      items: ["Account", "Asset", "ABX", "Aa3"],
    },

    {
      name: "F",
      items: ["Factor", "FDI", "Fair Trade", "Financial Center"],
    },

    {
      name: "G",
      items: ["Gold Standard", "GDP", "GNP", "GOP"],
    },

    {
      name: "H",
      items: ["Hot Money", "HSI", "Hard Currency", "Hard inquiry"],
    },
    {
      name: "I",
      items: ["Income", "Inflation", "Interest", "inventory"],
    },
    {
      name: "J",
      items: ["JV", "Jumbo CD", "Junk Bond", "Jit"],
    },
    {
      name: "K",
      items: ["KPI", "Kernel", "Key Currency", "Key Ring"],
    },
    {
      name: "L",
      items: ["Liquidity", "Lock-in", "Long Run", "Luxuries"],
    },
    {
      name: "M",
      items: ["MF", "Materials", "Market Risk", "Mortgage"],
    },
    {
      name: "N",
      items: ["Net Income", "Net Sale", "Net Worth", "NPA"],
    },
    {
      name: "O",
      items: ["Object Cost", "OEI", "OEM", "OAC"],
    },
    {
      name: "P",
      items: ["Premium", "Preferred Stock", "Policy Terms", "Profit"],
    },
    {
      name: "Q",
      items: ["QDRO", "Quote", "Quotation", "Qubes"],
    },
    {
      name: "R",
      items: ["Ratio", "RBI", "ROI", "Repo"],
    },
    {
      name: "S",
      items: ["Shares", "Sharp Ration", "Solvancy", "Sharesholder"],
    },
    {
      name: "T",
      items: ["Trust", "Turns", "Tick", "TAFR"],
    },

    { name: "U" },
    { name: "V" },
    { name: "W" },
    { name: "X" },
    { name: "Y" },
    { name: "Z" },
  ];

  return (
    <>
      <Header>
        <Head>
          <h1>Glossary</h1>
          <h4>what are you interested in?</h4>
        </Head>
        <Search>
          <div>
            <img src="/assets/png/search.png" alt="" />
          </div>{" "}
          <input type="text" />
        </Search>

        <ImageLeft>
          <LeftTop>
            <img src="/assets/png/2 1.png" alt="" />
          </LeftTop>
          <LeftMiddle>
            <img src="/assets/png/3 1.png" alt="" />
          </LeftMiddle>
          <LeftBottom>
            <img src="/assets/png/4 1.png" alt="" />
          </LeftBottom>
        </ImageLeft>

        <ImageRight>
          <RightTop>
            <img src="/assets/png/5 1.png" alt="" />
          </RightTop>
          <RightMiddle>
            <img src="/assets/png/7 1.png" alt="" />
          </RightMiddle>
          <RightBottom>
            <img src="/assets/png/8 1.png" alt="" />
          </RightBottom>
        </ImageRight>
      </Header>
      <Alphabet>
        {boxes.map((b) =>
          b?.items && b?.items?.length ? <h4>{b.name}</h4> : <h3>{b.name}</h3>
        )}
      </Alphabet>
      <Parent>
        {boxes.map((b) =>
          b?.items && b?.items?.length ? (
            <Box>
              <h4>{b.name}</h4>
              <Items>
                {b.items.map((item) => {
                  return <span>{item}</span>;
                })}
              </Items>
            </Box>
          ) : null
        )}
      </Parent>
    </>
  );
}

export default Glossary;
