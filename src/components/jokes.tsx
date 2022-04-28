import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from "react-redux";
import { fetchJokes } from "../store/action-creator/jokes";
import {useActions} from "../hooks/useActions";
import {Chuckdiv, ChuckH1, HeaderDiv, MoreJokesButton} from "./header";
import {store} from "../store";
import { addJokes } from "../store/action-creator/allJoke";

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
  color: white;
  background: #ee7b7b;

`

const Jokes: React.FC = () => {
    const {fetchJokes} = useActions()
    const dispatch = useDispatch()
    const allJokes = useSelector((state:any) => state.allJokes.allJokes)
    const {joke, loading} = useSelector((state:any) => state.jokes)

    const getJokes = async () => {
        await fetchJokes()
    }

    useEffect(() => {
        if (!joke || joke?.id == allJokes[allJokes.length - 1]?.id) return
        dispatch(addJokes(joke))
    }, [joke])

     store.subscribe(() => {
        localStorage.setItem("allJokes", JSON.stringify(allJokes))
    })

    console.log(allJokes, joke)

    return (
        <>
            <HeaderDiv>
                <Chuckdiv>
                    <ChuckH1>Chuck Norris jokes</ChuckH1>
                    <MoreJokesButton onClick={getJokes}>MORE</MoreJokesButton>
                </Chuckdiv>
            </HeaderDiv>
            <ArticleDiv>
                {allJokes.map((item:any) => {
                    return <JokesContainerDiv key={item.id}>{item.value}</JokesContainerDiv>
                })}
            </ArticleDiv>
            { loading && <span>Loading...</span>}
        </>
    );
};

export default Jokes;