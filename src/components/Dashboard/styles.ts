import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: blue;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: lightblue;

  h3 {
    font-size: 1.5rem;
  }

  button {
    width: 200px;
    border-radius: 15px;
    border: none;
    background-color: blue;
    color: white;
    padding: 2px 10px;
  }
`;
