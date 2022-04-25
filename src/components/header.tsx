import React from 'react';
import styled from 'styled-components';

export const HeaderDiv = styled.div`
  display: flex;
  background: greenyellow;
  justify-content: flex-end;
`

export const Chuckdiv = styled.div`
    width: 55%;
    display: flex;
    justify-content: space-between;
`

export const ChuckH1 = styled.h2`
    
`

export const MoreJokesButton = styled.button`
  margin: 10px 20px 10px 10px;
  padding: 15px;
  background: antiquewhite;
  border: 1px solid #dec1a2;
  border-radius: 7px;
  font-size: 16px;

  :active {
    outline: none;
    border: 1px solid #e0a467;
    background: #c49663;
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