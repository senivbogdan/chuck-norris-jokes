import React, {useEffect} from 'react';
import styled from 'styled-components';
import { useDispatch } from "react-redux";
import { fetchJokes } from "../store/action-creator/jokes";

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
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchJokes())
    }, [])

    return (
        <>
            <ArticleDiv>
                <JokesContainerDiv>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem</JokesContainerDiv>
            </ArticleDiv>
        </>
    );
};

export default Jokes;