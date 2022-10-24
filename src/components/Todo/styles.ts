import styled from "styled-components";

export const TodoLi = styled.li`
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

    padding: 16px;
    border-radius: 5px;
    width: 90%;
  }

  .list_icons {
    display: flex;
    align-items: center;
    font-size: 24px;
    cursor: pointer;
  }

  .delete-icon {
    margin-right: 5px;
    color: #fff;
  }
`;
