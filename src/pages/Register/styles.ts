import styled from 'styled-components';

const StyledRegisterNewUser = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 30px;

  a {
    width: 18.125rem;
    height: 3.125rem;

    img {
      width: 18.125rem;
      height: 3.125rem;
    }
  }

  .RegisterNewUser {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 840px) {
    justify-content: flex-start;
    padding: 30px 10px;
  }
`;

export default StyledRegisterNewUser;
