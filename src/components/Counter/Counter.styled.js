import styled from 'styled-components';

export const Title = styled.h2`
 align-items:center;
 text-align: center;
 padding: 24px;
 margin: 20px;
`
export const ListCounter = styled.ul`
list-style: none;
display: inline-flex;
padding:10px;
margin: 0px;
border-radius:5px;
`

export const ItemCounter = styled.li`

margin-right: 15px;
`
export const Btn = styled.button`
width: 100%;
fontSize: 30px;
border: none;
border-radius: 5px;

height:60px;
border: 1px solid rgb(193, 225, 193);

color: rgb(118, 125, 115);
background: rgb(144, 238, 144, 0.3);

padding: 5px 10px;

cursor: pointer;
box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
    &:hover,
    &:focus {
       background: rgb(170, 241, 60, 0.7);
       color: rgb(250, 250, 250);
    }
`

