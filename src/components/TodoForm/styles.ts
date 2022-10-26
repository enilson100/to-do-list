import styled from "styled-components";

export const Form = styled.form`
  margin-bottom: 32px;

  .input_todo-form {
    padding: 14px 32px 14px 16px;
    border-radius: 4px 0 0 4px;
    border: 2px solid #5d0cff;
    outline: none;
    width: 70%;
    background: transparent;
    color: #fff;
  }

  .input_todo-form::placeholder {
    color: #e2e2e2;
  }

  .button_todo-form {
    padding: 16px;
    border: none;
    border-radius: 0 4px 4px 0;
    cursor: pointer;
    outline: none;
    background: linear-gradient(
      90deg,
      rgba(93, 12, 255, 1) 0%,
      rgba(155, 0, 250, 1) 100%
    );
    color: #fff;
    text-transform: capitalize;
  }
`;
