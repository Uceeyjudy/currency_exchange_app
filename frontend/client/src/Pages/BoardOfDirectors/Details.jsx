import React from 'react'
import { StyledDetails, Column, Close, DetailsModal, Return } from './styles/Details.styles'
import close from './images/close.svg'

const Details = ({setShowDetails, data}) => {

  const handleClick = ()=>{
    setShowDetails(false)
  }
  return (
    <StyledDetails>
    <DetailsModal>
    <div> 
      <Column>
        <img src={data.image} alt='' />
        <Column padding='0 20px'>
        <p className='p-tag'>{data.age}</p>
        <p className='p-tag'>{data.status}</p>
        <p className='p-tag'>{data.residence}</p>
        </Column>
      </Column>
      <Column border='1px solid #000000;' padding='20px'>
        <h2>{data.name}</h2>
        <span>{data.title}</span>
        <p>{data.name} {data.desc}</p>
      </Column>
    <Close onClick={handleClick}>
    <img src={close} alt=''  />
    </Close>
    </div>
    
    </DetailsModal>
   <Return onClick={handleClick}>
   <img src={close} alt=''/>
   </Return>
    </StyledDetails>
  )
}

export default Details
