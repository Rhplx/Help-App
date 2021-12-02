import styled from "styled-components/native";
import { Link } from "@react-navigation/native";

export const CategoriesContainer = styled.View`
  flex: 1;
  width: 100%;
  padding: 20px 0 0;
  align-items: center;
  justify-content: center;
`;

export const CategoriesTitle = styled.Text`
  color: #245751;
  font-family: "HindMadurai_700Bold";
  font-size: 34px;
  line-height: 47px;
  text-align: center;
`;

export const CategoriesSubtitle = styled.Text`
  margin-bottom: 15px;
  color: #ef0e73;
  font-family: "Roboto_700Bold";
  font-size: 18px;
  line-height: 21px;
  text-align: center;
`;

export const CategoriesList = styled.FlatList`
  flex: 1;
  width: 100%;
  padding: 15px 16px;
  margin-bottom: 10px;
`;
export const CategoriesContent = styled.ScrollView`
  flex: 1;
  width: 100%;
`;

export const CategoriesCard = styled.Pressable`
  flex: 1;
  max-width: 33%;
  margin-bottom: 25px;
  align-items: center;
  text-align: center;
`;

export const CategoriesCardContent = styled.View`
  width: 100%;
  align-items: center;
`;

export const CategoriesCardImage = styled.Image`
  width: 80px;
  height: 80px;
  margin-bottom: 10px;
  resize-mode: contain;
  border-radius: 15px;
`;
export const CategoriesCardText = styled.Text`
  max-width: 100px;
  padding: 0;
  color: #245751;
  font-family: "Roboto_400Regular";
  font-size: 14px;
  line-height: 16px;
  text-align: center;
`;

const button = `
  width: 45%;
  padding: 8px;
  background-color: #39B4BB;
  border-radius: 10px;
  text-align: center;
`;

export const CategoriesActions = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 10px;
`;

export const CategoriesButton = styled.Pressable`
  ${button}
`;

export const CategoriesButtonLink = styled(Link)`
  ${button}
`;

export const CategoriesButtonText = styled.Text`
  width: 100%;
  color: #ffffff;
  font-family: "Roboto_700Bold";
  font-size: 18px;
  line-height: 21px;
  text-align: center;
`;
