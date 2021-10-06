import styled, { css } from "styled-components/native";
import { Link } from "@react-navigation/native";

export const CategoriesPeopleContainer = styled.View`
  flex: 1;
  padding: 20px 0 0;
  align-items: center;
  justify-content: space-between;
`;

export const CategoriesPeopleCard = styled.View`
  width: 100%;
  padding: 5px 16px;
  justify-content: center;
  flex-direction: row;
`;

export const CategoriesPeopleCardImage = styled.Image`
  flex: 1;
  width: 150px;
  height: 150px;
  resize-mode: contain;
`;

export const CategoriesPeopleCardContent = styled.View`
  flex: 1;
  justify-content: center;
`;

export const CategoriesPeopleTitle = styled.Text`
  max-height: 80px;
  margin-bottom: 5px;
  color: #245751;
  font-family: "HindMadurai_700Bold";
  font-size: 34px;
  line-height: 34px;
  justify-content: flex-start;
`;

export const CategoriesPeopleText = styled.Text`
  padding-right: 16px;
  color: #EF0E73;
  font-family: "Roboto_700Bold";
  font-size: 18px;
  line-height: 21px;
`;

export const CategoriesPeopleList = styled.FlatList`
  width: 100%;
  padding: 15px 16px;
  margin-bottom: 10px;
`;

export const CatPeopleListCard = styled.View`
  flex: 1;
  padding: 0 16px;
  margin-bottom: 20px;
  flex-direction: row;
`;

export const CatPeopleListCardImage = styled.Image`
  width: 90px;
  max-width: 90px;
  height: 90px;
  resize-mode: contain;
`;

export const CatPeopleListCardContent = styled.View`
  flex: 1;
  padding-left: 10px;
  align-items: center;
  justify-content: center;
`;

export const CatPeopleListCardText = styled.Text`
  ${({ white }) => white ? css`
    color: #FFFFFF;
    font-family: "Roboto_700Bold";
    font-size: 18px;
    text-align: center;
  `: css`
    margin-bottom: 10px;
    color: #245751;
    font-family: "HindMadurai_600SemiBold";
    font-size: 22px;
    line-height: 24px;
    text-align: left;
  `}
`;

export const CatPeopleListCardButton = styled.Pressable`
  width: 100%;
  padding: 7px 14px;
  background-color: #39B4BB;
  border-radius: 10px;
  align-items: center;
`;

export const CategoriesPeopleTerms = styled(Link)`
  margin-bottom: 20px;
  font-family: "Roboto_700Bold";
  color: #245751;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
`;