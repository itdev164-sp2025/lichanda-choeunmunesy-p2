import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout/Layout';
import recipes from '../data/recipes';

const RecipeCard = styled.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  margin-bottom: 1.5rem;
`;

const RecipeImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const RecipeInfo = styled.div`
  padding: 1rem;
`;

const RecipeTitle = styled.h2`
  margin-top: 0;
  font-size: 1.25rem;
`;

const RecipeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

const HomePage = () => {
  return (
    <Layout>
      <h1>Delicious Recipes</h1>
      <p>Find your next favorite meal with our collection of tasty recipes.</p>
      
      <RecipeGrid>
        {recipes.map(recipe => (
          <RecipeCard key={recipe.id}>
            <RecipeImage src={recipe.image} alt={recipe.title} />
            <RecipeInfo>
              <RecipeTitle>{recipe.title}</RecipeTitle>
              <p>Time: {recipe.time} minutes</p>
              <p>Difficulty: {recipe.difficulty}</p>
              <a href={`/recipe/${recipe.id}`}>View Recipe</a>
            </RecipeInfo>
          </RecipeCard>
        ))}
      </RecipeGrid>
    </Layout>
  );
};

export default HomePage;