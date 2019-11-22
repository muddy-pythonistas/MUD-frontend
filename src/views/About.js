import React, { useEffect } from 'react';
import styled from 'styled-components';
import ethan from '../components/about/assets/ethan.png';
import max from '../components/about/assets/max.png';
import penny from '../components/about/assets/penny.png';

export const About = () => {
  return (
    <AboutContainer>
      <h2>About</h2>
      <p className='about-description'>Python Quest is an multi-user dugeon adventure game that allows players to explore a virtual world, collect items, complete missions, and interact with other players. The team used React on the front end to build a visualization and navigation client interface, and Django on the backend to build the API and database for generating and storing the map. With no prior experience with Django, the team successfully learned and delivered the product in just 4 days. </p>
      <a href='' target='_blank' rel='noopener noreferrer'>Link to Github repo</a>
      <h2>Meet the team</h2>
      <AboutContent>
        <div>
          <img src={ethan} alt='ethan'/>
          <p>Ethan Hickey</p>
          <p>Full-stack web developer</p>
        </div>
        <div>
          <img src={max} alt='max'/>
          <p>Max David</p>
          <p>Full-stack web developer</p>
        </div>
        <div>
          <img src={penny} alt='penny'/>
          <p>Penny Lee</p>
          <p>Full-stack web developer</p>
        </div>
      </AboutContent>
    </AboutContainer>
  )
}


const AboutContainer = styled.div`
  margin-top: 80px;
  width: 80vw;
  display: flex:
  flex-direction: column;
  align-items: center;
  font-family: ${({ theme }) => theme.titleFont};
  color: ${({ theme }) => theme.infoColor};
  text-align: center;

  h2 {
    font-size: ${({ theme }) => theme.hugeFont};
    color: ${({ theme }) => theme.primary2};
    margin: 3rem 0;
  }

  .about-description {
    font-size: ${({ theme }) => theme.mediumFont};
    line-height: 3rem;
    text-align: justify;
    margin-bottom: 2rem;
  }

  a {
    font-size: ${({ theme }) => theme.largeFont};
    color: ${({ theme }) => theme.yellowAccent};
    text-decoration: none;
    margin: 4rem;

    &:hover {
      text-decoration: underline;
    }
  }
`

const AboutContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
  
  @media only screen and (max-width: 800px) {
    flex-direction: column;
  }

  h2 {
    margin: 2rem 0;
  }

  div {
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 0 3rem;

    img {
      width: 100%;
    }

    p {
      font-size: ${({ theme }) => theme.mediumFont};
      padding: 1rem 0;
    }
  }
`