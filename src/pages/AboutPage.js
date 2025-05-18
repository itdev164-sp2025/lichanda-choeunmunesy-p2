import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout/Layout';

const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const AboutSection = styled.section`
  margin-bottom: 2rem;
`;

const TeamMember = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background-color: ${props => props.theme.colors.lightGray};
  border-radius: 8px;
`;

const Avatar = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.primary};
  margin-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 1.5rem;
`;

const AboutPage = () => {
  return (
    <Layout>
      <AboutContainer>
        <h1>About Tasty Recipes</h1>
        
        <AboutSection>
          <h2>Our Story</h2>
          <p>
            Tasty Recipes was founded in 2025 with a simple mission: to help people discover 
            delicious, homemade recipes that bring joy to their kitchen and dining table.
          </p>
          <p>
            We believe that cooking should be accessible to everyone, regardless of skill level 
            or experience. That's why we focus on providing clear, easy-to-follow recipes with 
            ingredients that are readily available.
          </p>
        </AboutSection>
        
        <AboutSection>
          <h2>Our Approach</h2>
          <p>
            Every recipe on our site is carefully tested and perfected before being shared with 
            our community. We consider not just flavor, but also nutritional value, preparation time, 
            and dietary restrictions.
          </p>
          <p>
            We're committed to helping you find recipes that fit your lifestyle, whether you're 
            looking for quick weeknight dinners, special occasion dishes, or nutritious meals 
            that accommodate specific dietary needs.
          </p>
        </AboutSection>
        
        <AboutSection>
          <h2>Meet Our Team</h2>
          
          <TeamMember>
            <Avatar>LC</Avatar>
            <div>
              <h3>Lichanda C.</h3>
              <p>Founder & Head Chef</p>
              <p>Jane has been cooking professionally for over 15 years and loves creating recipes that bring families together.</p>
            </div>
          </TeamMember>
          
          <TeamMember>
            <Avatar>LR</Avatar>
            <div>
              <h3>Luna R.</h3>
              <p>Nutrition Specialist</p>
              <p>With a background in nutritional science, John ensures all our recipes are balanced and wholesome.</p>
            </div>
          </TeamMember>
          
          <TeamMember>
            <Avatar>AK</Avatar>
            <div>
              <h3>Ace K.</h3>
              <p>Food Photographer</p>
              <p>Alex has an eye for capturing the beauty of food, making every dish look as delicious as it tastes.</p>
            </div>
          </TeamMember>
        </AboutSection>
        
        <AboutSection>
          <h2>Contact Us</h2>
          <p>
            Have questions, suggestions, or a recipe you'd like to share? We'd love to hear from you!
          </p>
          <p>
            Email: <a href="mailto:hello@tastyrecipes.com">hello@tastyrecipes.com</a>
          </p>
          <p>
            Follow us on social media: @tastyrecipes
          </p>
        </AboutSection>
      </AboutContainer>
    </Layout>
  );
};

export default AboutPage;