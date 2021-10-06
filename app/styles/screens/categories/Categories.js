import styled from "styled-components/native";
import { Link } from "@react-navigation/native";

export const CategoriesContainer = styled.View`
  flex: 1;
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
  color: #EF0E73;
  font-family: "Roboto_700Bold";
  font-size: 18px;
  line-height: 21px;
  text-align: center;
`;

export const CategoriesList = styled.FlatList`
  width: 100%;
  max-height: 75%;
  padding: 15px 16px;
  margin-bottom: 10px;
`;

export const CategoriesCard = styled.Pressable`
  flex: 1;
  max-width: 50%;
  margin-bottom: 25px;
  align-items: center;
  text-align: center;
`;

export const CategoriesCardContent = styled.View`
  width: 100%;
  align-items: center;
`;

export const CategoriesCardImage = styled.Image`
  width: 145px;
  height: 145px;
  margin-bottom: 10px;
  resize-mode: contain;
`;
export const CategoriesCardText = styled.Text`
  max-width: 150px;
  padding: 0 10px;
  color: #245751;
  font-family: "Roboto_700Bold";
  font-size: 16px;
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
  margin-bottom: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const CategoriesButton = styled.Pressable`
  ${button}
`;

export const CategoriesButtonLink = styled(Link)`
  ${button}
`;

export const CategoriesButtonText = styled.Text`
  width: 100%;
  color: #FFFFFF;
  font-family: "Roboto_700Bold";
  font-size: 18px;
  line-height: 21px;
  text-align: center;
`;