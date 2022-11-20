import styled from "styled-components";

const ArticleWrappper = styled.section`

  .article-container h1 {
    font-weight: 400;
    font-size: 3.125rem;
    line-height: 3.8rem;
    text-align: center;
    color: #0062ff;
  }

  .article-container p {
    font-weight: 400;
    font-size: 1.56rem;
    line-height: 1.875rem;
    text-align: center;
    max-width: 45rem;
    color: #000000;
    margin: 0 auto;
  }

  .article-card {
    margin-top: 119px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 35px;
    margin-left: 67px;
    margin-right: 67px;
    cursor: pointer;
  }

  .card-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 28px;
    background: #e3edfc;
    border-radius: 5px;
    
  }

  .card-intro {
    display: flex;
    align-items: center;
    gap: 12px;
  }


  .card-wrapper h1 {
    font-weight: 400;
    font-size: 1.3rem;
    line-height: 2.6rem;
    text-align: center;
  }

  .card-wrapper p {
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.8rem;
  }

  @media (max-width: 600px) {
    .article-container h1 {
        font-size: 1.3rem;
        line-height: 1.68rem;
        text-align: center;
      }
      .article-container p {
        font-size: 1rem;
        line-height: 1.1rem;
        text-align: center;
        max-width: 15rem;
      }

      .article-card {
        margin-top: 41px;
        grid-template-columns: auto;
        grid-gap: 25px;
        margin-left: 34px;
        margin-right: 34px;
      }

      .card-wrapper {
        padding: 0 8px;
        
      }

      .card-wrapper h1 {
        font-size: 0.9rem;
        line-height: 1rem;
      }
    
      .card-wrapper p {
        font-size: 0.8rem;
        line-height: 1rem;
      }

      .card-wrapper img {
        width: 12% !important;
      }
  }

  // @media (max-width: 1000px){
  //   .article-card {
  //     margin-top: 41px;
  //     grid-template-columns: auto;
  //     grid-gap: 25px;
  //     // margin-left: 34px;
  //     // margin-right: 34px;
  //   }
  // }
`;

export default ArticleWrappper;
