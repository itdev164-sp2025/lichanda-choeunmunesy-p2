import React, { useState } from 'react';
import styled from 'styled-components';
import Layout from '../components/layout/Layout';
import recipes from '../data/recipes';

const CategoryContainer = styled.div`
  margin-bottom: 2rem;
`;

const CategoryTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.primary};
  padding-bottom: 0.5rem;
  border-bottom: 1px solid ${props => props.theme.colors.lightGray};
`;

const RecipeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
`;

const RecipeCard = styled.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
`;

const RecipeImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const RecipeInfo = styled.div`
  padding: 1rem;
`;

const RecipeTitle = styled.h3`
  margin-top: 0;
  font-size: 1.25rem;
`;

const CategoryButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
`;

const CategoryButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${props => props.active ? props.theme.colors.primary : props.theme.colors.lightGray};
  color: ${props => props.active ? 'white' : props.theme.colors.text};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background-color: ${props => props.active ? props.theme.colors.primary : props.theme.colors.accent};
  }
`;

const CategoriesPage = () => {
  // Get unique categories
  const categories = [...new Set(recipes.map(recipe => recipe.category))];
  
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Filter recipes based on active category
  const filteredRecipes = activeCategory === 'all' 
    ? recipes 
    : recipes.filter(recipe => recipe.category === activeCategory);
  
  // Group recipes by category when showing all
  const recipesByCategory = categories.reduce((acc, category) => {
    acc[category] = recipes.filter(recipe => recipe.category === category);
    return acc;
  }, {});
  
  return (
    <Layout>
      <h1>Recipe Categories</h1>
      <p>Browse our recipes by category to find exactly what you're looking for.</p>
      
      <CategoryButtons>
        <CategoryButton 
          active={activeCategory === 'all'} 
          onClick={() => setActiveCategory('all')}
        >
          All Categories
        </CategoryButton>
        
        {categories.map(category => (
          <CategoryButton 
            key={category} 
            active={activeCategory === category}
            onClick={() => setActiveCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </CategoryButton>
        ))}
      </CategoryButtons>
      
      {activeCategory === 'all' ? (
        // Display recipes grouped by category
        categories.map(category => (
          <CategoryContainer key={category}>
            <CategoryTitle>{category.charAt(0).toUpperCase() + category.slice(1)}</CategoryTitle>
            <RecipeGrid>
              {recipesByCategory[category].map(recipe => (
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
          </CategoryContainer>
        ))
      ) : (
        // Display recipes in the selected category
        <RecipeGrid>
          {filteredRecipes.map(recipe => (
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
      )}
    </Layout>
  );
};

export default CategoriesPage;