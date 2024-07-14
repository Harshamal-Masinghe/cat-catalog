import React from 'react'; // Importing React
import { useSelector } from 'react-redux'; // Importing useSelector hook from React-Redux
import { RootState } from '../store'; // Importing RootState type from the store
import { useRouter } from 'next/router'; // Importing useRouter from Next.js for routing
import styled from 'styled-components'; // Importing styled-components for styling

// Styled component for the container
const Container = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Styled component for the image
const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
`;

const BreedDetail: React.FC = () => {
  const router = useRouter(); // Using useRouter to access the router
  const { id } = router.query; // Extracting the id parameter from the query string
  const breed = useSelector((state: RootState) =>
    state.breeds.breeds.find((breed) => breed.id === id)
  ); // Selecting the breed with the matching id from the Redux store

  if (!breed) {
    return <div>Loading...</div>; // Displaying a loading message if the breed is not found
  }

  return (
    <Container>
      <h1 style={{ textAlign: 'center' }}>{breed.name}</h1>
      {breed.image ? (
        <Image src={breed.image.url} alt={breed.name} /> // Displaying the breed image if available
      ) : (
        <p>No image available</p> // Displaying a message if the image is not available
      )}
      <p>Origin : {breed.origin}</p>
      <p>Life Span : {breed.life_span}</p>
      <p>Description : {breed.description}</p>
    </Container>
  );
};

export default BreedDetail;
