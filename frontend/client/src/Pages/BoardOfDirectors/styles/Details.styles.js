import styled from 'styled-components'

export const StyledDetails = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 99;
    

`

export const DetailsModal = styled.div`
    background-color:#B0CEFF;;
    display:flex;
    width:70%;
    align-items:center;
    justify-content:center;
    height:80%;
    position:relative;

   

    &>div{
        background-color: #fff;
        width: 80%;
        max-width:max-content;
        display: flex;
        height:75%;
    }
    @media(max-width:${({theme})=> theme.tablet}){
      width:90%
      
    }


    @media(max-width:${({theme})=> theme.mobile}){
       background-color:#fff;
        overflow-y:scroll;
       
    &>div{
        background-color: #fff;
        width: 100%;
        max-width:max-content ;
        display: flex;
        flex-direction:column;
        height:100%;
        align-items:center;
    }
    }
`

export const Column = styled.div`
    display:flex;
    gap:10px;
    align-items:flex-start;
    flex-direction:column;
    background-color:#fff;
    border: ${(props)=> props.border};
    padding: ${(props)=> props.padding};
    

    &>p, &>h2 &>span{
        font-family: 'Plus Jakarta Sans';
        font-style: normal;
       
    }

    &h2{
        font-weight: 600;
        font-size: 28px;
        line-height: 34px;
    }

    &span{
        font-weight: 400;
        font-size: 20px;
        line-height: 28px;
    }
    &>p{
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;

    }
    
    
    @media(max-width:${({theme})=> theme.mobile}){
        align-items:center;
        
        .p-tag{
            display:none
        }

        &>p{
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        width:100%;
        text-align:center;

    }
       
    }
`

export const Close = styled.div`
        position:absolute;
        top:-15px;
        right:-12px;
        cursor:pointer;
        border-radius:50%;
        background:#0F172A;
        padding:10px;
        
        &>img{
            height:20px;
            width:20px;
        }
         
    @media(max-width:${({theme})=> theme.mobile}){
        display:none;
        }
        
`

export const Return = styled.div`
    position:absolute;
    top:0;
    right:0px;
    cursor:pointer;
    display:none;
    cursor:pointer;
    border-radius:50%;
    background:#0F172A;
    padding:10px;
   
       
    @media(max-width:${({theme})=> theme.mobile}){
        display:flex;
        }
`

