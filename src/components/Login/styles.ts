import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: lightblue;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    input {
      background-color: white;
      border: 2px solid blue;
      border-radius: 15px;
      padding: 2px 10px;
      width: 200px;
    }
    button {
      width: 200px;
      border-radius: 15px;
      border: none;
      background-color: blue;
      color: white;
      padding: 2px 10px;
    }
  }
`;
