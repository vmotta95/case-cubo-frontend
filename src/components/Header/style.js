import styled from "styled-components"

export const ContainerHeader = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
min-height: 20vh;
background-color: #01b8e2;
`
export const FormHeader = styled.form`
display: flex;
flex-wrap: wrap;
gap:20px;
`
export const InputHeader = styled.input`
padding: 20px;
width: 280px;
`

export const ButtonHeader = styled.button `
background-color: #01b8e2;
border:1px solid white;
color: white;
font-weight: bold;
width: 130px;
&:hover {
    cursor: pointer;
    background-color: white;
    color: #01b8e2;
  }
`