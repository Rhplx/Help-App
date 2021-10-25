import styled from "styled-components/native";
import { Link } from "@react-navigation/native";

export const SubCategoriesContainer = styled.View`
  flex: 1;
  padding: 20px 0 0;
  align-items: center;
  justify-content: space-between;
`;

export const SubCatCard = styled.View`
  width: 100%;
  padding: 5px 16px;
  justify-content: center;
  flex-direction: row;
`;

export const SubCatCardImage = styled.Image`
  flex: 1;
  width: 150px;
  height: 150px;
  resize-mode: contain;
`;

export const SubCatCardContent = styled.View`
  flex: 1;
  justify-content: center;
`;

export const SubCategoriesTitle = styled.Text`
  margin-bottom: 5px;
  color: #245751;
  font-family: "HindMadurai_700Bold";
  font-size: 24px;
  line-height: 29px;
  justify-content: flex-start;
`;

export const SubCategoriesText = styled.Text`
  padding-right: 16px;
  color: #ef0e73;
  font-family: "Roboto_700Bold";
  font-size: 18px;
  line-height: 21px;
`;

export const SubCategoriesList = styled.FlatList`
  width: 100%;
  max-height: 65%;
  padding: 15px 16px;
  margin-bottom: 10px;
`;

export const SubCategoriesListLink = styled.Pressable`
  width: 100%;
  max-width: 300px;
  margin: 0 auto 20px;
  padding: 14px;
  background-color: #39b4bb;
  border-radius: 10px;
  align-items: center;
`;

export const SubCategoriesListText = styled.Text`
  font-family: "Roboto_700Bold";
  color: #ffffff;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
`;

export const SubCategoriesLink = styled(Link)`
  width: 100%;
  max-width: 300px;
  margin: 0 auto 10px;
  padding: 14px;
  background-color: #39b4bb;
  font-family: "Roboto_700Bold";
  color: #ffffff;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  border-radius: 10px;
`;
