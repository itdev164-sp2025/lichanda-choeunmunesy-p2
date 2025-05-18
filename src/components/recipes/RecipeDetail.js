import React from 'react';
import styled from 'styled-components';
import { Box, Flex, Text, Heading, Image } from 'rebass';
import { Timer, Group, Restaurant } from '@styled-icons/boxicons-regular';

const DetailContainer = styled(Box)`
  max-width: 900px;
  margin: 0 auto;
`;

const RecipeImage = styled(Image)`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: ${props => props.theme.radii.medium};
  margin-bottom: 2rem;
`;

const InfoItem = styled(Flex)`
  align-items: center;
  margin-right: 2rem;
`;

const IconWrapper = styled(Box)`
  margin-right: 0.5rem;
`;

const StyledTimer = styled(Timer)`
  width: 20px;
  height: 20px;
  color: ${props => props.theme.colors.darkGray};
`;

const StyledDifficulty = styled(Group)`
  width: 20px;
  height: 20px;
  color: ${props => props.theme.colors.darkGray};
`;

const StyledServings = styled(Restaurant)`
  width: 20px;
  height: 20px;
  color: ${props => props.theme.colors.darkGray};
`;

const SectionTitle = styled(Heading)`
  font-size: ${props => props.theme.fontSizes.xlarge};
  margin-top: 2rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid ${props => props.theme.colors.lightGray};
`;

const IngredientItem = styled(Text)`
  padding: 0.5rem 0;
  display: flex;
  justify-content: space-between;
  
  &:not(:last-child) {
    border-bottom: 1px solid ${props => props.theme.colors.lightGray};
  }
`;

const InstructionStep = styled(Box)`
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: ${props => props.theme.colors.lightGray};
  border-radius: ${props => props.theme.radii.medium};
`;

const NutritionFlex = styled(Flex)`
  background-color: ${props => props.theme.colors.lightGray};
  border-radius: ${props => props.theme.radii.medium};
  padding: 1rem;
  margin-top: 1rem;
`;

const NutritionItem = styled(Box)`
  text-align: center;
  padding: 0 1rem;
  
  &:not(:last-child) {
    border-right: 1px solid ${props => props.theme.colors.background};
  }
`;

const Tag = styled(Box)`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes.small};
  padding: 0.25rem 0.75rem;
  border-radius: ${props => props.theme.radii.medium};
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  display: inline-block;
`;

const RecipeDetail = ({ recipe }) => {
  return (
    <DetailContainer>
      <Heading as="h1" fontSize="xxlarge" mb={3}>
        {recipe.title}
      </Heading>
      
      <RecipeImage src={recipe.image} alt={recipe.title} />
      
      <Flex mb={4} flexWrap="wrap">
        <InfoItem mb={[2, 0]}>
          <IconWrapper>
            <StyledTimer />
          </IconWrapper>
          <Text>{recipe.time} mins</Text>
        </InfoItem>
        
        <InfoItem mb={[2, 0]}>
          <IconWrapper>
            <StyledDifficulty />
          </IconWrapper>
          <Text>{recipe.difficulty}</Text>
        </InfoItem>
        
        <InfoItem mb={[2, 0]}>
          <IconWrapper>
            <StyledServings />
          </IconWrapper>
          <Text>{recipe.servings} servings</Text>
        </InfoItem>
      </Flex>
      
      <Box mb={4}>
        {recipe.dietaryTags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
        <Tag>{recipe.category}</Tag>
      </Box>
      
      <SectionTitle as="h2">Ingredients</SectionTitle>
      <Box>
        {recipe.ingredients.map((ingredient, index) => (
          <IngredientItem key={index}>
            <Text>{ingredient.name}</Text>
            <Text fontWeight="bold">{ingredient.amount}</Text>
          </IngredientItem>
        ))}
      </Box>
      
      <SectionTitle as="h2">Instructions</SectionTitle>
      <Box>
        {recipe.instructions.map((step, index) => (
          <InstructionStep key={index}>
            <Text fontWeight="bold" mb={2}>Step {index + 1}</Text>
            <Text>{step}</Text>
          </InstructionStep>
        ))}
      </Box>
      
      <SectionTitle as="h2">Nutrition Information</SectionTitle>
      <NutritionFlex justifyContent="space-around" flexWrap="wrap">
        <NutritionItem mb={[2, 0]}>
          <Text fontWeight="bold" fontSize="large">{recipe.nutritionalInfo.calories}</Text>
          <Text>Calories</Text>
        </NutritionItem>
        
        <NutritionItem mb={[2, 0]}>
          <Text fontWeight="bold" fontSize="large">{recipe.nutritionalInfo.protein}g</Text>
          <Text>Protein</Text>
        </NutritionItem>
        
        <NutritionItem mb={[2, 0]}>
          <Text fontWeight="bold" fontSize="large">{recipe.nutritionalInfo.carbs}g</Text>
          <Text>Carbs</Text>
        </NutritionItem>
        
        <NutritionItem mb={[2, 0]}>
          <Text fontWeight="bold" fontSize="large">{recipe.nutritionalInfo.fat}g</Text>
          <Text>Fat</Text>
        </NutritionItem>
      </NutritionFlex>
    </DetailContainer>
  );
};

export default RecipeDetail;