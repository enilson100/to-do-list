import styled from "styled-components";

export const DivList = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  .div__todo-list {
    display: flex;
    flex-direction: column;
    justify-content: start;
    width: 90%;
    height: 400px;
    background: #161a2b;
    text-align: center;
    border-radius: 10px;
    padding-bottom: 32px;

    @media (min-width: 600px) {
      min-width: 450px;
    }
  }

  h1 {
    margin: 32px 0;
    color: #fff;
    font-size: 24px;
  }
`;
