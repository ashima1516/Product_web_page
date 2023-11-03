import React from 'react';
import styled from 'styled-components';

export const Contact = () => {
  return (
  <>
   <ContactContainer>
      <ContactHeader>Contact Us</ContactHeader>
      <ContactContent>
        <ContactInfo>
          <h2>Contact Information</h2>
          <p>Email: devtown@gmail.com</p>
          <p>Phone: +123 456 789</p>
          <p>Address: 123 Street, NewYorkCity</p>
        </ContactInfo>
        <ContactForm>
          <h2>Contact Form</h2>
          <form>
            <InputField type="text" placeholder="Your Name" />
            <InputField type="email" placeholder="Your Email" />
            <TextareaField rows="4" placeholder="Your Message"></TextareaField>
            <SubmitButton type="submit">Submit</SubmitButton>
          </form>
        </ContactForm>
      </ContactContent>
    </ContactContainer>
  
  </>
  )
}

const ContactContainer=styled.div`
background:#f5f5f7;
min-height:500px;
max-width:800px;
margin:0 auto;
padding:20px;
`
const ContactHeader = styled.h1`
background:#ff9900;
  font-size: 2rem;
  text-align: center;
  margin-bottom: 20px;
`;
const ContactContent=styled.div`
display:flex;
 justify-content:space-between;
@media (max-width: 768px) {
    flex-direction: column;
  }
`
const ContactInfo = styled.div`
flex: 1;
  padding: 10px;

  h2 {
    font-size: 1.5rem;
  }

  p {
    font-size: 1.2rem;
  }
`
const ContactForm = styled.div`
flex: 1;
  padding: 10px;

  h2 {
    font-size: 1.5rem;
  }

  form {
    display: flex;
    flex-direction: column;
  }
`
const InputField = styled.input`
padding: 10px;
  margin: 5px 0;
  font-size: 1rem;
`;
const TextareaField = styled.textarea`
padding: 10px;
margin: 5px 0;
font-size: 1rem;
`
const SubmitButton = styled.button`
background: #007bff;
color: #fff;
border: none;
padding: 10px;
font-size: 1rem;
cursor: pointer;

&:hover {
  background: #0056b3;
}

`;