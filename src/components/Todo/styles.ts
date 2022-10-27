import styled from "styled-components";

export const TodoLi = styled.li`
  overflow-y: auto;

  .complete {
    text-decoration: line-through;
    opacity: 0.4;
  }

  .list_row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 4px auto;
    color: #fff;
    background: linear-gradient(
      90deg,
      rgba(255, 118, 20, 1) 0%,
      rgba(255, 84, 17, 1) 100%
    );
    padding: 10px;
    border-radius: 5px;
    width: 83%;
  }

  .list_icons {
    display: flex;
    align-items: center;
    font-size: 24px;
    height: 100%;
    cursor: pointer;
    div {
      display: flex;
      align-items: center;
    }
    .delete-icon {
      margin: 0px 5px 0px 5px;
      color: #fff;
      width: 24px;
      height: 24px;
      padding: 3px;
      border-radius: 5px;
      transition: 1s;
      :hover {
        background-color: #fff;
        color: rgba(255, 84, 17, 1);
      }
    }
  }
`;

export const UlTodo = styled.ul`
  overflow-y: auto;
  ::-webkit-scrollbar {
    border: none;
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: black;
    border-radius: 5px;
  }
`;
