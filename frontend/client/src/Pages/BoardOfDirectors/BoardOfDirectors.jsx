import React, { useState } from 'react'
import { Container, DivContainer } from './styles/Container.styles'
import { Info, Name, Title, Wrapper } from './styles/Wrapper.styles'
import infoIcon from './images/infoIcon.svg'
import { Arrow } from './styles/Arrow.styles'
import content from './content'
import Details from './Details'
import {ThemeProvider} from 'styled-components'


const theme = {
    colors: {
      headers: '#ebfbff',
      body:'#fff',
      footer:'#003333',
    },
  
    mobile: '768px',
    tablet: '1200px'
  }
  

const BoardOfDirectors = () => {
  const [showDetails, setShowDetails] = useState(false)
  const [data, setData] = useState({})

  const handleClick = (id)=>{
    const res = content.filter((item)=> item.id === id )
    setData(res[0])
    setShowDetails(true)
  }
  console.log(data);
  return (
    <ThemeProvider theme={theme}>
    <Container>
        <DivContainer>
            <h1>Board of Directors</h1>
            <p>Meet our board of directors 
            that has helped our company supervise and control the management and operation of the company</p>
        </DivContainer>
        <Wrapper>
            {content.map((item)=>(
              <div key={item.id}>
                <img src={item.image} alt=''/>
                <Name>{item.name}</Name>
                <Title>{item.title}</Title>
                <Info>
                <Arrow src={infoIcon} alt=''  onClick={(id)=>handleClick(item.id)}/>
                </Info>
              </div>
            ))}
           
        </Wrapper>
        {showDetails &&<Details  setShowDetails={setShowDetails} data={data}/> }
    </Container>
    </ThemeProvider>
  )
 
}

export default BoardOfDirectors
