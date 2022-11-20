import { AddCircle, ArrowDown, ArrowUp } from "iconsax-react";
import React from "react";
import styled from "styled-components";
import { CountrySort } from ".";

const Table = () => {
  const Table = styled.div`
    padding: 0px 80px;

    table {
      border-spacing: 0px;
      width: 100%;
      border-radius: 5px;
      table-layout: fixed;
      width: 100%;
      border: 1px solid #e0e0e0;
      thead {
        background-color: #cbd5e1;
        border-radius: 5px;

        th {
          border: 0px;
          padding: 30px 5px;
          text-align: left;
        }
      }

      tbody {
        td {
          border-bottom: 1px solid #e0e0e0;
        }

        .country {
          display: flex;
          align-items: center;
          padding: 40px 30px;
        }
        .priceUp {
          display: flex;
          align-items: center;
          color: #10b981;
        }
        .priceDown {
          display: flex;
          align-items: center;
          color: #ef4444;
        }

        td {
          p {
            margin-bottom: 5px;
          }
        }
      }
    }
  `;

  const Image = styled.img`
    width: 40px;
    height: 24px;
    margin-right: 10px;
  `;

  const Bottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 80px;

    div {
      div {
        display: flex;
        align-items: center;
        color: #0062ff;
        font-weight: 500;
        margin-bottom: 20px;

        span {
          margin-left: 10px;
        }
      }
    }
  `;
  return (
    <>
      <Table>
        <table>
          <thead>
            <tr>
              <th>Currency</th>
              <th>BDC</th>
              <th>Bank</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="country">
                <Image src="https://flagcdn.com/us.svg" alt="US" />
                <div>
                  <p>USD</p>
                  <p>United States Dollar</p>
                </div>
              </td>
              <td>
                <p> &#8358;{700}</p>
                <p className="priceUp">
                  <ArrowUp size="24" color="#10B981" />
                  {`+0.8%`}
                </p>
              </td>
              <td>
                <p> &#8358;{300}</p>
                <p className="priceDown">
                  <ArrowDown size="24" color="#ef4444" />
                  {`+0.39%`}
                </p>
              </td>
            </tr>
            <tr>
              <td className="country">
                <Image src="https://flagcdn.com/us.svg" alt="US" />
                <div>
                  <p>USD</p>
                  <p>United States Dollar</p>
                </div>
              </td>
              <td>
                <p> &#8358;{700}</p>
                <p className="priceUp">
                  <ArrowUp size="24" color="#10B981" />
                  {`+0.8%`}
                </p>
              </td>
              <td>
                <p> &#8358;{300}</p>
                <p className="priceDown">
                  <ArrowDown size="24" color="#ef4444" />
                  {`+0.39%`}
                </p>
              </td>
            </tr>
            <tr>
              <td className="country">
                <Image src="https://flagcdn.com/us.svg" alt="US" />
                <div>
                  <p>USD</p>
                  <p>United States Dollar</p>
                </div>
              </td>
              <td>
                <p> &#8358;{700}</p>
                <p className="priceUp">
                  <ArrowUp size="24" color="#10B981" />
                  {`+0.8%`}
                </p>
              </td>
              <td>
                <p> &#8358;{300}</p>
                <p className="priceDown">
                  <ArrowDown size="24" color="#ef4444" />
                  {`+0.39%`}
                </p>
              </td>
            </tr>
            <tr>
              <td className="country">
                <Image src="https://flagcdn.com/us.svg" alt="US" />
                <div>
                  <p>USD</p>
                  <p>United States Dollar</p>
                </div>
              </td>
              <td>
                <p> &#8358;{700}</p>
                <p className="priceUp">
                  <ArrowUp size="24" color="#10B981" />
                  {`+0.8%`}
                </p>
              </td>
              <td>
                <p> &#8358;{300}</p>
                <p className="priceDown">
                  <ArrowDown size="24" color="#ef4444" />
                  {`+0.39%`}
                </p>
              </td>
            </tr>
            <tr>
              <td className="country">
                <Image src="https://flagcdn.com/us.svg" alt="US" />
                <div>
                  <p>USD</p>
                  <p>United States Dollar</p>
                </div>
              </td>
              <td>
                <p> &#8358;{700}</p>
                <p className="priceUp">
                  <ArrowUp size="24" color="#10B981" />
                  {`+0.8%`}
                </p>
              </td>
              <td>
                <p> &#8358;{300}</p>
                <p className="priceDown">
                  <ArrowDown size="24" color="#ef4444" />
                  {`+0.39%`}
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </Table>
      <Bottom>
        <div>
          <div>
            <AddCircle size={32} variant="Bold" color="#0062ff" />
            <span>Add Currency</span>
          </div>
          <CountrySort />
        </div>
        <p>Last updated Nov 17, 2022, 15:55 UTC</p>
      </Bottom>
    </>
  );
};

export default Table;
