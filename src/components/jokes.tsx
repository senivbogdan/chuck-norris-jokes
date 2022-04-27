import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from "react-redux";
import { fetchJokes } from "../store/action-creator/jokes";
import {useActions} from "../hooks/useActions";
import {Chuckdiv, ChuckH1, HeaderDiv, MoreJokesButton} from "./header";
import {store} from "../store";

export const ArticleDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const JokesContainerDiv = styled.div`
  padding: 12px 16px;
  font-family: Roboto;
  font-size: 14px;
  line-height: 1.25rem;
  width: 240px;
  margin: 16px;
  border-radius: 8px;
  background: red;
  
`

const Jokes: React.FC = () => {
    const [jokesValue, setJokesValue] = useState<any>([])
    const {fetchJokes} = useActions()
    const jokes = useSelector((state:any) => state.jokes)

    useEffect(() => {
        fetchJokes()
    }, [])


    const getJokes = () => {
        fetchJokes()
        jokesValue.push(JSON.parse(jokes.joke))

    }

     store.subscribe(() => {
        localStorage.setItem("jokes", JSON.stringify(store.getState()))
    })
    console.log(store.getState())

    // console.log(jokesValue)
    return (
        <>
            <HeaderDiv>
                <Chuckdiv>
                    <ChuckH1>Chuck Norris jokes</ChuckH1>
                    <MoreJokesButton onClick={getJokes}>MORE</MoreJokesButton>
                </Chuckdiv>
            </HeaderDiv>
            <ArticleDiv>
                {jokesValue?.map((item:any) => {
                    return <JokesContainerDiv key={item.id}>{item.value}</JokesContainerDiv>
                })}
            </ArticleDiv>
        </>
    );
};

export default Jokes;