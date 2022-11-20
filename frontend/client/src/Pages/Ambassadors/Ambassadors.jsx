import React from "react";
import ManImg from "../Ambassadors/images/Rectangle 160 2.png";
import Wrapper from "../Ambassadors/styles/Hero/HeroStyles";
import { people } from "../Ambassadors/data";

const Ambassador = () => {
  return (
    <Wrapper>
      {/* HEADER OF PAGE */}
      <header>
        <h3>Meet our brand ambassadors</h3>
        <article>
          At Street Rate App we believe in the spirit of community, without the
          customers who use our app, we would not exist and keep rising. the
          customers are part of the ambassadors of the app as they will use an
          interact with it everyday because it serves their needs as well as
          offers quality service to them. The user is one of the strongest types
          of ambassadors because they spread word of the app to other people who
          are likely in need of the app.
        </article>
      </header>
      {/* =======END HEADER========= */}

      {/* BODY */}
      <div className="body">
        {/* PICTURE AND TEXT */}
        <div className="pic-text">
          <div className="img">
            <img src={ManImg} alt="person-img" />
          </div>

          <div className="info">
            <p>
              Our ambassadors are at the forefront of everything we do, and no
              we don't have nay special procedure of selecting who we consider
              an ambassador. All the people that work to make the app a success,
              the team behind the existence of this app are our esteemed
              ambassadors. the time and our will to see this app work makes
              everyone in the team an ambassador. A team of like minded
              individuals with one goal.
            </p>
            <br />
            <p>
              We also have several ambassadors in the exchange world who are
              spreading information about the app and are also financially
              aware. Through all of these people, the app would grow and attract
              more users.
            </p>
          </div>
        </div>
        {/* ========END PICTURE AND TEXT======= */}

        {/* AMBASSADOR IMAGES */}
        <div className="amb-imgs">
          {people.map((person) => {
            return (
              <div className="indi-img-box" key={person.id}>
                <div className="img">
                  <img src={person.img} alt="person-img" />
                </div>
                <h2>{person.name}</h2>
                <h4>{person.role}</h4>
              </div>
            );
          })}
        </div>
        {/* ========END AMBASSADOR IMAGES======== */}
      </div>
    </Wrapper>
  );
};

export default Ambassador;