import React, { useEffect, useState } from 'react'; // Importing necessary React functions and hooks
import { useSelector, useDispatch } from 'react-redux'; // Importing hooks from React-Redux for state management
import { RootState, AppDispatch } from '../store'; // Importing RootState and AppDispatch types from the store
import { fetchBreeds } from '../store/breedSlice'; // Importing the fetchBreeds action from breedSlice
import Link from 'next/link'; // Importing Link component from Next.js for navigation
import styled from 'styled-components'; // Importing styled-components for styling

// Styled component for the container
const Container = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Styled component for the list
const List = styled.ul`
  list-style: none;
  padding: 0rem;
  width: 80%;
`;

// Styled component for each list item
const ListItem = styled.li`
  margin: 0.5rem 0;
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #d9d9d9;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

// Styled component for the search input
const SearchInput = styled.input`
  padding: 0.8rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 50%;
`;

const BreedList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>(); // Creating a dispatch function using AppDispatch type
  const breeds = useSelector((state: RootState) => state.breeds.breeds); // Selecting breeds from the Redux store
  const status = useSelector((state: RootState) => state.breeds.status); // Selecting the status of the breeds fetching
  const [searchTerm, setSearchTerm] = useState(''); // Setting up local state for the search term

  // Fetching breeds if the status is 'idle'
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchBreeds());
    }
  }, [status, dispatch]);

  // Filtering breeds based on the search term
  const filteredBreeds = breeds.filter(breed =>
    breed.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <h1 style={{ textAlign: 'center' }}>Cat Catalog</h1>
      <SearchInput
        type="text"
        placeholder="Search breeds"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} // Updating search term on input change
      />
      <List>
        {filteredBreeds.map((breed) => (
          <Link key={breed.id} href={`/breed/${breed.id}`}>
            <ListItem>{breed.name}</ListItem>
          </Link>
        ))}
      </List>
    </Container>
  );
};

export default BreedList;
