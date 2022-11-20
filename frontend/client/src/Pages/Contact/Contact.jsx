import {
    Container,
    HeroSection,
    Flex,
  } from "../../components/styles/Contact.styled";
  import ContactForm from "./ContactForm";
  import ContactInfo from "./ContactInfo";
  
  const Contact = () => {
    return (
      <>
        <Container>
          <HeroSection>
            <h1>Contact us</h1>
          </HeroSection>
          <Flex>
            <ContactForm />
            <ContactInfo />
          </Flex>
        </Container>
      </>
    );
  };
  
  export default Contact;