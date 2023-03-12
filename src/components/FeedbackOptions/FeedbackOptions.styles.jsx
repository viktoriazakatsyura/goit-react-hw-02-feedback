/* .feedback__text {
  width: 400px;
  font-size: 20px;
  font-weight: bold;
  align-items: center;
}
.feedback__good {
  background-color: green;
  margin-right: 10px;
}
.feedback__neutral {
  background-color: blue;
  margin-right: 10px;
}
.feedback__bad {
  background-color: red;
}
.feedback {
  position: absolute;
  left: 50%;
  transform: translate(-50%);
}
button {
  padding: 5px;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.5s;
}
button:hover {
  background-color: burlywood;
  color: aqua;
} */
/* 
.wrapper {
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 16px;
}

.button {
  width: 100px;
  height: 40px;
  background-color: #332cf2;
  opacity: 0.75;
  border: 0;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  display: block;
  font-size: 22px;
  font-weight: 700;
  line-height: 1.3;
  text-align: center;
  transition: all 0.5s;
}

.button:hover {
  transform: scale(1.1);
  opacity: 1;
}

.button:focus {
  outline: 0 solid transparent;
  opacity: 1;
}

.button.good {
  background-color: green;
}

.button.bad {
  background-color: red;
} */
import styled from '@emotion/styled';

export const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
 margin-right: 10px;
  padding: 10px;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  cursor: pointer;
  outline: none;
  border-radius: 5px;
  background: white;
  
  box-shadow: 1px 2px 2px 0 rgb(0 0 0 / 0.5);
  transition: box-shadow 250ms linear;
  &:hover {
   background-color:rgb(44, 154, 243);
   box-shadow: 2px 5px 2px 0 rgb(0 0 0 / 0.5); 
  }
  `