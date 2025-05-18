import React from 'react';
import styled from 'styled-components';
import { Flex, Box, Text } from 'rebass';

const FilterContainer = styled(Flex)`
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const FilterButton = styled(Box)`
  padding: 0.5rem 1rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  border-radius: ${props => props.theme.radii.medium};
  background-color: ${props => props.active ? props.theme.colors.primary : props.theme.colors.lightGray};
  color: ${props => props.active ? props.theme.colors.white : props.theme.colors.text};
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.active ? props.theme.colors.primary : props.theme.colors.accent};
    color: ${props => props.active ? props.theme.colors.white : props.theme.colors.text};
  }
`;

const FilterBar = ({ categories, activeCategory, setActiveCategory, dietaryFilters, activeDietaryFilters, setActiveDietaryFilters }) => {
  const toggleCategory = (category) => {
    setActiveCategory(category === activeCategory ? 'all' : category);
  };
  
  const toggleDietaryFilter = (filter) => {
    if (activeDietaryFilters.includes(filter)) {
      setActiveDietaryFilters(activeDietaryFilters.filter(f => f !== filter));
    } else {
      setActiveDietaryFilters([...activeDietaryFilters, filter]);
    }
  };
  
  return (
    <Box>
      <Text fontSize="large" fontWeight="bold" mb={2}>Categories</Text>
      <FilterContainer mb={3}>
        <FilterButton 
          active={activeCategory === 'all'} 
          onClick={() => toggleCategory('all')}
        >
          All
        </FilterButton>
        {categories.map(category => (
          <FilterButton 
            key={category} 
            active={activeCategory === category}
            onClick={() => toggleCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </FilterButton>
        ))}
      </FilterContainer>
      
      <Text fontSize="large" fontWeight="bold" mb={2}>Dietary Preferences</Text>
      <FilterContainer>
        {dietaryFilters.map(filter => (
          <FilterButton 
            key={filter} 
            active={activeDietaryFilters.includes(filter)}
            onClick={() => toggleDietaryFilter(filter)}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </FilterButton>
        ))}
      </FilterContainer>
    </Box>
  );
};

export default FilterBar;