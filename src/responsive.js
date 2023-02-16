import { css } from "styled-components";

export const tab=(props)=>
{
    return css`
        @media only screen and (max-width: 1150px){
            ${props};
        }
    `
}