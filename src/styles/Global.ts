import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
}

body {
  background: linear-gradient(
    90deg,
    rgba(48, 16, 255, 1) 0%,
    rgba(100, 115, 255, 1) 100%
  );
}
body::-webkit-scrollbar {
    border: none;
    width: 8px;
}
  body::-webkit-scrollbar-thumb {
    background-color: black;
    border-radius: 5px;
}


`;
