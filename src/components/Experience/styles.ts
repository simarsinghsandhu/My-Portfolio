import styled from "styled-components";

export const Container = styled.section`
  margin-top: 15rem;

  h1 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 10rem;
  }

  .text {
    color: #fff;
    font-size: 16px;
  }

  h3 {
    color: var(--green);
    font-size: 18px;
  }

  p {
    letter-spacing: 0.12rem;
    margin-bottom: 2rem;
    a {
      color: #ffff;
      border-bottom: 1px solid var(--green);
      transition: color 0.25s;
      &:hover {
        color: var(--green);
      }
    }
  }

  @media (max-width: 960px) {
    .projects {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 740px) {
    .projects {
      grid-template-columns: 1fr;
    }
  }
`;
