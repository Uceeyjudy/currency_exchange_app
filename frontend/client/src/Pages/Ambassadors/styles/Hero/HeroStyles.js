import styled from "styled-components";

const Wrapper = styled.section`
  /* border: 1px solid black; */
  padding-left: 16px;
  padding-right: 16px;
  @media (max-width: 425px){
    padding-left: 16px;
    padding-right: 16px;
  }

  @media (min-width: 768px){
    padding-left: 46px;
    padding-right: 46px;
  }

  
  header {
    margin-top: 60px;

    h3 {
      text-align: center;
      font-size: 28px;
      margin-bottom: 20px;
      color: #2B2B2B;

      @media(min-width: 1024px){
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 48px;
        line-height: 56px;
      }
    }
    article {
      text-align: center;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
      color: #2B2B2B;
    }

    @media (min-width: 1100px) {
      margin-top: 0;
      margin-left: 5%;
      width: 35vw;

      h3,
      article {
        text-align: left;
      }
    }
  }

  .body {
    /* PICTURE AND TEXT */
    .pic-text {
      margin: 0 auto;
      margin-top: 170px;
      width: 80%;
      max-width: 350px;

      .img {
        height: 300px;
        img {
          width: 100%;
          height: 100%;
        }
      }

      .info {
        background: rgba(0, 41, 107, 0.75);
        padding-bottom: 1.75rem;
        
        p {
          font-size: 18px;
          color: white;
          text-align: center;
          
        }
      }
      @media (min-width: 865px) {
        display: flex;
        max-width: 550px;
        

        .img {
          width: calc(100% - 60%);
          height: inherit;
        }

        .info {
          padding-bottom: none;
          padding: .5rem .5rem;
          width: 60%;
        }
      }

      @media (min-width: 1100px) {
        width: 50vw;
        max-width: none;
        position: absolute;
        right: 5%;
        top: -30px;
        height: 350px;

        .info {
        
          p {
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 22px;
          
          }
        }
      }
      @media (min-width: 1180px) {
        .info {
          
          p {
            font-size: 15px;
          }
        }
      }
    }
    /* END PICTURE AND TEXT */

    /* AMBASSADOR IMAGES */
    .amb-imgs {
      margin-top: 30px;
      padding-top: 100px;
      display: grid;
      gap: 1em;
      grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));

      .indi-img-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 20px;
        h2 {
          margin-bottom: 0px;

          @media (min-width: 725px){
            font-style: normal;
            font-weight: 600;
            font-size: 23px;
            line-height: 28px;
          }
        }
        h4 {
          font-size: 18px;
          font-weight: 200;
        }
      }

      @media (min-width: 1100px) {
        margin-top: 10vw;

        .indi-img-box {
          margin-bottom: 0;
        }
      }
    }
    /* END AMBASSADOR IMAGES */
  }
`;

export default Wrapper;
