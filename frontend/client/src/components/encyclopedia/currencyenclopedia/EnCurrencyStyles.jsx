 import styled from "styled-components";
                                                     
      export const CurrencyContainer = styled.div`
        box-sizing: border-content;
        background: #00296b;
        width: 100%;
        height: 514px;
        align-items: center;
        display: flex;
        justify-content: space-between;

        @media screen and (max-width: 750px) {
      
          height: 798px;
          padding: 1em;
          display: flex;
          flex-direction: column;
          justify-content: left;
        }
      `;     
      
          export const Container = styled.div`
            box-sizing: border-content;
            padding-left: 200px;

            @media screen and (min-width: 350px) and (max-width: 550px) {
              padding-left: 10px;

              height: 498px;
             
            }
          `;     
       
      export const Header = styled.h2`
        font-family: "Inter";
        font-style: normal;
        font-weight: 700;
        font-size: 36px;
        line-height: 40px;
        align-items: center;

        color: #ffffff;

        @media screen and (min-width: 350px) and (max-width: 550px) {
          width:70%;
         
        }
      `;                                                     
                                                         
      export const Content = styled.p`
        width: 100%;
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 28px;
        color: #ffffff;

        @media screen and (min-width: 350px) and (max-width: 550px) {
          width: 80%;
          height: 58px;
          
        }
      `;     
    
       export const Select = styled.select`
         background: #ffffff;
         border-radius: 4px;
         height: 56px;
         width:40%;
        margin-top:69px;

         @media screen and (min-width: 350px) (max-width: 550px) {
        
           padding: 1em;
         }
       `;     
    
   
       export const Option = styled.option`
         font-family: "Inter";
         font-style: normal;
         font-weight: 600;
         font-size: 14px;
         line-height: 20px;
         align-items: center;
         letter-spacing: 0.001em;
         @media screen and (min-width: 350px) (max-width: 550px) {
           padding: 1em;
         }
       `;     
                                                           
            export const ImageWrapper = styled.div`
              width: 60%;
              @media screen and (min-width: 350px) and (max-width: 550px) {
                padding-right: 15em;
                margin-left: 0px;
                align-item: left;
                width: 90%;
              }
            `;     
                                                                  
                                                            
                                                             
                                                              
                                                               
                                                                
                                                                 
                                                      