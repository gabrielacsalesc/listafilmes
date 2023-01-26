import styled from "styled-components";

export const HeaderContainer = styled.div`
  margin: 0;
  padding: 0;
`
export const FilterContainer = styled.form` 
  select {
    float: center;
    border: solid 1.5px #9e9e9e;
    border-radius: 1rem;
    background: none;
    padding: 1rem;
    font-size: 1rem;
    color: #f5f5f5;
    transition: border 150ms cubic-bezier(0.4,0,0.2,1);
    margin: 4rem;
  }

  option {
    border: solid 1.5px #9e9e9e;
    border-radius: 1rem;
    background: #09090A;
    padding: 2rem;
    font-size: 1rem;
    color: #f5f5f5;
    transition: border 150ms cubic-bezier(0.4,0,0.2,1);
  }
`

export const Container = styled.div`
  h1 {
    text-align: center;
  }
`
export const MovieList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  column-gap: 3rem;
  row-gap: 4rem;
`

export const Movie = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 250px;
    border-radius: 1rem;
    margin-bottom: 2rem;
    background: #212121;
    box-shadow:  -20px 20px 60px #1c1c1c,
    20px -20px 60px #262626;
  }

  a{
    transition: all 0.3s;
  }

  a:hover {
    transform: scale(1.1);
  }

  span {
    text-align: center;
    font-weight: bold;
    font-size: 120%;
  }

  label {
    font-weight: bold;
    font-size: 120%;
  }
`


