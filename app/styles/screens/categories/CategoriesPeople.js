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
  /* flex: 1; */
  width: 150px;
  height: 150px;
  resize-mode: contain;
  margin: 0 20px;
  border-radius: 26px;
`;

export const CategoriesPeopleCardContent = styled.View`
  flex: 1;
  justify-content: flex-start;
`;

export const CategoriesPeopleTitle = styled.Text`
  margin-bottom: 5px;
  color: #245751;
  font-family: "HindMadurai_700Bold";
  font-size: 24px;
  line-height: 29px;
  justify-content: flex-start;
  margin-top: 8px;
`;

export const CategoriesPeopleText = styled.Text`
  padding-right: 16px;
  color: #ef0e73;
  font-family: "Roboto_700Bold";
  font-size: 18px;
  line-height: 21px;
  margin: 20px 0;
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
  border-radius: 8px;
`;

export const CatPeopleListCardContent = styled.View`
  flex: 1;
  padding-left: 10px;
  align-items: center;
  justify-content: center;
`;

export const CatPeopleListCardText = styled.Text`
  ${({ white }) =>
    white
      ? css`
          color: #ffffff;
          font-family: "Roboto_700Bold";
          font-size: 18px;
          text-align: center;
        `
      : css`
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
  background-color: #39b4bb;
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
