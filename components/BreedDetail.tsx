import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const Container = styled.div`
  padding: 1rem;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
`;

const BreedDetail: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const breed = useSelector((state: RootState) =>
    state.breeds.breeds.find((breed) => breed.id === id)
  );

  if (!breed) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <h1>{breed.name}</h1>
      {breed.image ? (
        <Image src={breed.image.url} alt={breed.name} />
      ) : (
        <p>No image available</p>
      )}
      <p>Origin: {breed.origin}</p>
      <p>Life Span: {breed.life_span}</p>
      <p>{breed.description}</p>
    </Container>
  );
};

export default BreedDetail;