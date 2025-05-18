import React from 'react';
import styled from 'styled-components';
import { Box, Image, Text, Flex } from 'rebass';
import { Link } from 'react-router-dom';
import { Timer } from '@styled-icons/boxicons-regular';

const Card = styled(Box)`
  border-radius: ${props => props.theme.radii.medium};
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.small};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.shadows.medium};
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
`;

const RecipeImage = styled(Image)`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const RecipeTitle = styled(Text)`
  font-weight: 600;
  font-size: ${props => props.theme.fontSizes.large};
  margin: 0.5rem 0;
  color: ${props => props.theme.colors.text};
`;

const TimerIcon = styled(Timer)`
  width: 18px;
  height: 18px;
  color: ${props => props.theme.colors.darkGray};
  margin-right: 0.25rem;
`;

const Tag = styled(Box)`
  background-color: ${props => props.theme.colors.lightGray};
  color: ${props => props.theme.colors.darkGray};
  font-size: ${props => props.theme.fontSizes.small};
  padding: 0.25rem 0.5rem;
  border-radius: ${props => props.theme.radii.small};
  margin-right: 0.5rem;
`;

const RecipeCard = ({ recipe }) => {
  return (
    <StyledLink to={`/recipe/${recipe.id}`}>
      <Card>
        <RecipeImage src={recipe.image} alt={recipe.title} />
        <Box p={3}>
          <RecipeTitle>{recipe.title}</RecipeTitle>
          
          <Flex alignItems="center" mb={2}>
            <TimerIcon />
            <Text fontSize="small" color="darkGray">{recipe.time} mins</Text>
          </Flex>
          
          <Flex mt={2}>
            <Tag>{recipe.difficulty}</Tag>
            {recipe.dietaryTags.slice(0, 2).map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </Flex>
        </Box>
      </Card>
    </StyledLink>
  );
};

export default RecipeCard;