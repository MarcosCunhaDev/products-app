import styled from "styled-components/native";

export const Container = styled.View`
    width: '100%';
    gap: 10px;
    border-radius: 10px;
    border-width: 1px;
    border-color: gray;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
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
`

export const ContainerMainTxt = styled.View`
    justify-content:center;
    width: 70%;
    gap: 10;
    padding: 5px;
`

export const ContainerDetails = styled.View`
    justify-content: center;
`

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.background};
  font-size: 16px;
  font-weight: bold;
`;