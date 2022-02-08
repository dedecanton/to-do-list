import styled from "styled-components";

type ContainerProps = {
    done: boolean;
}

export const Container = styled.div(({done}:ContainerProps) => (
    `
    display: flex;
    background-color: #20212C;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    align-items: center;
    position: relative;

    label{
        color: #CCC;
        text-decoration: ${done ? 'line-through' : 'initial'}
    }

    input{
        width:25px;
        height:25px;
        margin-right: 5px;
    }

    button{
        width: 80px;
        height: 30px;
        border: none;
        border-radius: 5px;
        outline: 0;
        background-color: #FFF;
        color: #17181F;
        font-weight: bold;
        font-size: 15px;
        position: absolute;
        right: 2%;
        text-align: center;
        cursor: pointer;
        transition: all ease .3s;
    }
    
    button:hover{
        transform: scale(1.1);
    }
`
))
