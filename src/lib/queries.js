import { gql } from '@apollo/client';

export const GET_POSTS = gql`
  query {
    progettis {
      id
      nome
      info
      cover {
        id
        url
      }
      galleria(first: 100) {
        url
      }
    }
  }
`;

export const GET_POSTSHome = gql`
  query {
    homePages {
      id
      cover {
        url
      }
    }
  }
`;


export const GET_POSTSEduc = gql`
  query {
  educationals {
    id
    titolo
    copertina{
      id
      url
    }
      retro{
      id
      url
    }
    info
    
    
  }
  }
  `;


export const GET_POSTS2 = gql`
  query {
    progettis {
      id
      nome
      info
      cover {
        id
        url
      }
      galleria(first: 3) {
        url
      }
    }
  }
`;
