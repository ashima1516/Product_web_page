import React from 'react';
import styled from 'styled-components';

export const About = () => {
  return (
<>
<AboutContainer>
    <AboutHeader>About Us</AboutHeader>
    <AboutContent>
        <AboutHeader>Inspiration and Inception</AboutHeader>
      <p>
      In the heart of Bangalore’s tech hub, Devtown was founded with a vision to revolutionize education through technology.
We embarked on this journey with a profound belief in the power of knowledge and a commitment to making learning accessible, engaging, and transformative.Our curriculum is meticulously crafted to be at the forefront of technological advancements, offering a wide array of courses in programming, web development, machine learning, artificial intelligence, and more.
      </p>
      <p>
      Devtown is driven by a singular mission: to democratize education and create a world where learning knows no boundaries.
We strive to provide high-quality, affordable, and innovative educational solutions that cater to diverse learning needs, ensuring that every student has the opportunity to unlock their full potential.
Our teaching methodology ensures that students not only grasp complex concepts but also apply them in real-world scenarios, equipping them with the skills needed in today’s fast-paced world.
      </p>
    </AboutContent>
  </AboutContainer>
</>
  )
}
const AboutContainer=styled.div`
max-width:800px;
margin: 0 auto;
padding: 20px;
background:#f5f5f7;
`
const AboutHeader=styled.h1`
background:#ff9900;
font-size: 2rem;
  text-align: center;
  margin-bottom: 20px;
`
const AboutContent=styled.div`
font-size: 1.2rem;

p {
  margin-bottom: 20px;
}

@media (max-width: 768px) {
  font-size: 1rem;
}

`