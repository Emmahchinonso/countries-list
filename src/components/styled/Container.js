import styled from 'styled-components';

 const Container = styled.div`
  max-width: 95%;
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 1rem;
  margin: 2.3rem auto;

  @media (max-width: 768px){
    flex-direction: column;
    padding: 1.5rem .5rem;
  }
`

export default Container;