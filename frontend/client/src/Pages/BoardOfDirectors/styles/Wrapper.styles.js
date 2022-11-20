import styled from 'styled-components'

export const Wrapper = styled.div`
    display:flex;
    gap:80px;
    flex-wrap:wrap;
    align-items:center;
    padding-left:50px;
    
    &img{
        width:179px;
        height:179px;
        object-fit:contain;
        ${'' /* margin-bottom:10px; */}
    }

    div{
        display:flex;
        flex-direction:column;
        gap:15px;
        padding-left:30px;
        align-items:center;
        position:relative;
        margin-right:30px;
    }

    @media(max-width:${({theme})=> theme.tablet}){
       gap:20px;
       padding-left:20px;
      
    }

    @media(max-width:${({theme})=> theme.mobile}){
       gap:50px;
       align-items:center;
       justify-content:center;
      
    }
`


export const Name = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 18px;
    color:#000;


`

export const Title = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 18px;
    color:#0059E8;
`

export const Info = styled.div`
    background:#F7F7F7;
    width:45px;
    height:40px;
    border-radius:50%;
    border:none;
    position:absolute;
    bottom:120px;
    left:70px;
    display:flex;
    align-items:center;
    justify-content:center;
`