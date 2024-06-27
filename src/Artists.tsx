import React from 'react';
import { useFetchArtistsQuery } from './generated/graphql';

const Artists: React.FC = () => {
  const { data, loading, error } = useFetchArtistsQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Artists</h1>
      <ul>
        {data?.fetchArtists.map((artist) => (
          <li key={artist.id}>
            {artist.id} {artist.fullName} ({artist.email})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Artists;
