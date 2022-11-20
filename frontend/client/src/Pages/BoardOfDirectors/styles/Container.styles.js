import styled from 'styled-components'

export const Container = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    flex-direction:column;
    gap:50px;
    background-color: #F5F5F5;
    justify-content:center;
    padding: 50px 0;
   
`

export const DivContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:10px;
    margin:30px 0;
    width:70%;
    
    p{
        display:none;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 28px;
        text-align:center;
    }
    h1{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 48px;
        line-height: 56px;
        color:#102DB5;
    }

    @media(max-width:${({theme})=> theme.tablet}){
        p{
            display:flex;
        }
      
    }

    @media(max-width:${({theme})=> theme.mobile}){
        text-align:center;
        width:90%;
      
      h1{
        font-size:23px;
      }

      p{
        font-size:16px;
      }
    }
`