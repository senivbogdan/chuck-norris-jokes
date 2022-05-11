import React, {useEffect} from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';
import {useActions} from '../hooks/useActions';
import {Chuckdiv, ChuckH1, HeaderDiv, MoreJokesButton,} from './header';
import {store} from '../store';
import {addJokes} from '../store/action-creator/allJoke';

export const BodyDiv = styled.div`
  background: linear-gradient(90deg, #29323C 0%, #485563 100%);
  height: 100%;
`;

export const ArticleDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const JokesContainerDiv = styled.div`
  padding: 12px 16px;
  font-family: Roboto;
  font-size: 16px;
  line-height: 1.25rem;
  width: 240px;
  margin: 16px;
  border-radius: 8px 8px 8px 0;
  color: white;
  background: #ee7b7b;
`;

export const JokesImg = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  margin: 0 0 16px 0
`;

export const WrapperDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const Jokes = () => {
    const {fetchJokes} = useActions();
    const dispatch = useDispatch();
    const allJokes = useSelector((state: any) => state.allJokes.allJokes);
    const {joke, loading} = useSelector((state: any) => state.jokes);

    const getJokes = async () => {
        await fetchJokes();
    };

    useEffect(() => {
        if (!joke || joke?.id === allJokes[allJokes.length - 1]?.id) return;
        dispatch(addJokes(joke));
    }, [joke]);

    store.subscribe(() => {
        localStorage.setItem('allJokes', JSON.stringify(allJokes));
    });

    return (
        <BodyDiv>
            <HeaderDiv>
                <Chuckdiv>
                    <ChuckH1>Chuck Norris jokes</ChuckH1>
                    <MoreJokesButton onClick={getJokes}>MORE</MoreJokesButton>
                </Chuckdiv>
            </HeaderDiv>
            <ArticleDiv>
                {allJokes.map((item: any) => (
                    <WrapperDiv>
                        <JokesImg src="http://www.libertyclick.org/wp-content/uploads/2015/03/Chuck-Norris.jpg" alt=""/>
                        <JokesContainerDiv key={item.id}>
                            {item.value}
                        </JokesContainerDiv>
                    </WrapperDiv>
                ))}
            </ArticleDiv>
            {loading && <span>Loading...</span>}
        </BodyDiv>
    );
};

export default Jokes;
