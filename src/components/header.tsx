import React from "react";
import styled from "styled-components";

export const HeaderDiv = styled.div`
  display: flex;
  background: linear-gradient(90deg, #29323C 0%, #487aad 100%);
  justify-content: flex-end;
  color: #e7c1c1;
`

export const Chuckdiv = styled.div`
  width: 56%;
  display: flex;
  justify-content: space-between;
`

export const ChuckH1 = styled.h2`
  display: flex;
  align-items: center;
`

export const MoreJokesButton = styled.button`
  margin: 10px 20px 10px 10px;
  padding: 15px;
  background: linear-gradient(90deg, #617183 0%, #487aad 100%);
  border: 1px solid #29323C;
  border-radius: 7px;
  font-size: 16px;
  color: #e7c1c1;
  :active {
    outline: none;
    background: linear-gradient(90deg, #29323C 0%, #112e4b 100%);
    border: 1px solid #29323C;
    color: white;
  }

  :focus {
    outline: none;
  }
`


    
const Header = () => {
    return (
        <HeaderDiv>
            <Chuckdiv>
               <ChuckH1>Chuck Norris jokes</ChuckH1>
                    <MoreJokesButton>MORE</MoreJokesButton>
            </Chuckdiv>
        </HeaderDiv>
    );
};

export default Header;