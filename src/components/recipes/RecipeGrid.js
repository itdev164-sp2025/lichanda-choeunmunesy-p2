import React from 'react';
import { Box } from 'rebass';
import styled from 'styled-components';
import RecipeCard from './RecipeCard';

const Grid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  width: 100%;
`;

const RecipeGrid = ({ recipes }) => {
  return (
    <Grid>
      {recipes.map(recipe => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </Grid>
  );
};

export default RecipeGrid;