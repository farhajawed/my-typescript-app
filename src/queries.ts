import { gql } from '@apollo/client';

export const FETCH_ARTISTS = gql`
  query FetchArtists {
    fetchArtists {
      id
      firstName
      lastName
      email
      fullName
    }
  }
`;
