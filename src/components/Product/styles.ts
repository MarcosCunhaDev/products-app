import { Theme } from '@theme/theme';
import styled from "styled-components/native";


export const Container = styled.View`
    width: '100%';
    border-radius: 10px;
    border-width: 1px;
    border-color: gray;
    flex-direction: row;
    display: flex;
`;

export const ContainerImg = styled.View`
    overflow: hidden;
    width: 120px;
    height: 120px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
`

export const ContainerTxt = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
`

export const ContainerMainTxt = styled.View`
    justify-content:center;
    width: 70%;
    gap: 8px;
    padding: 5px;
    padding-top: 8px;

`

export const ContainerDetails = styled.View`
    align-items: flex-end;
    justify-content: center;
    flex-direction: row;
    padding-bottom: 10px;
    /* border-width: 1px; */
    width: 30%;
`

export const ButtonText = styled.Text<{ theme: Theme }>`
  color: ${({ theme }) => theme.colors.background};
  font-size: 16px;
  font-weight: bold;
`;