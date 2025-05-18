import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import Layout from '../components/layout/Layout';
import recipes from '../data/recipes';

const RecipeHeader = styled.div`
  margin-bottom: 2rem;
`;

const RecipeImage = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1.5rem;
`;

const RecipeInfo = styled.div`
  margin-bottom: 2rem;
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
`;

const InfoItem = styled.div`
  flex: 1;
  min-width: 120px;
`;

const BackButton = styled(Link)`
  display: inline-block;
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  border-radius: 4px;
  text-decoration: none;
  
  &:hover {
    background-color: ${props => props.theme.colors.primary}dd;
  }
`;

const RecipePage = () => {
  const { id } = useParams();
  const recipe = recipes.find(r => r.id === parseInt(id));
  
  if (!recipe) {
    return (
      <Layout>
        <h2>Recipe not found</h2>
        <BackButton to="/">Back to recipes</BackButton>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <BackButton to="/">Back to recipes</BackButton>
      
      <RecipeHeader>
        <h1>{recipe.title}</h1>
      </RecipeHeader>
      
      <RecipeImage src={recipe.image} alt={recipe.title} />
      
      <RecipeInfo>
        <InfoItem>
          <h3>Cooking Time</h3>
          <p>{recipe.time} minutes</p>
        </InfoItem>
        <InfoItem>
          <h3>Difficulty</h3>
          <p>{recipe.difficulty}</p>
        </InfoItem>
        <InfoItem>
          <h3>Servings</h3>
          <p>{recipe.servings}</p>
        </InfoItem>
      </RecipeInfo>
      
      <div>
        <h2>Ingredients</h2>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient.name}: {ingredient.amount}</li>
          ))}
        </ul>
      </div>
      
      <div style={{ marginTop: '2rem' }}>
        <h2>Instructions</h2>
        <ol>
          {recipe.instructions.map((step, index) => (
            <li key={index} style={{ marginBottom: '1rem' }}>{step}</li>
          ))}
        </ol>
      </div>
    </Layout>
  );
};

export default RecipePage;