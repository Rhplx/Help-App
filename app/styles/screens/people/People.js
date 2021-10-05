import styled, { css } from "styled-components/native";

export const PeopleContainer = styled.View`
  flex: 1;
  padding: 20px 0;
  background: rgba(224, 244, 246, 1);
  text-align: center;
`;

export const PeopleSubtitle = styled.Text`
  font-family: "Roboto_400Regular";
  padding: 0 16px;
  color: #EF0E73;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
`;

export const PeopleHeader = styled.View`
  width: 100%;
  margin-bottom: 30px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const PeopleImageContainer = styled.View`
  width: 50%;
  margin: 15px 0;
  max-height: 160px;
  align-items: center;
  justify-content: center;
`;

export const PeopleImageContent = styled.View`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 160px;
  max-height: 160px;
  border-radius: 10px;
  z-index: 0;
`;

export const PeopleFavorite = styled.Pressable`
  position: absolute;
  width: 42px;
  padding: 2px;
  background-color: #EF0E73;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  right: 0;
  top: 0;
  z-index: 1;
`;

export const PeopleFavoriteIcon = styled.Image`
  width: 100%;
  resize-mode: contain;
`;

export const PeopleImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  resize-mode: contain;
`;

export const PeopleReviewsContainer = styled.Pressable`
  position: absolute;
  width: 100%;
  align-items: center;
  bottom: -22px;
  z-index: 1;
`;

export const PeopleReviews = styled.View`
  position: relative;
  width: 85%;
  padding: 3px;
  background-color: #4EABA1;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  bottom: -2px;
  z-index: 1;
`;

export const PeopleReviewsText = styled.Text`
  color: #FFFFFF;
  font-family: "Roboto_700Bold";
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  text-transform: uppercase;
`;

export const PeopleReviewsStars = styled.View`
  width: 75%;
  padding: 3px;
  background-color: #245751;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const PeopleReviewsStar = styled.Image`
  width: 18px;
  height: 18px;
  margin: 0 2px;
  resize-mode: contain;
`;

export const PeopleServices = styled.FlatList`
  width: 50%;
  max-height: 160px;
`;
export const PeopleService = styled.Text`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #EF0E73;
  color: #FFFFFF;
  font-family: "Roboto_700Bold";
  font-size: 18px;
  line-height: 21px;
  text-transform: uppercase;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const PeopleDescription = styled.Text`
  padding: 0 16px;
  font-family: "Roboto_400Regular";
  color: #245751;
  font-size: 18px;
  line-height: 21px;
`;

export const PeopleContent = styled.View`
  width: 100%;
  margin: 20px 0;
  padding: 0 16px;
`;

export const PeopleActions = styled.View`
  width: 100%;
  margin-top: 20px;
  flex-direction: row;
`;

export const PeopleButton = styled.Pressable`
  ${({ icon }) => icon ? css`
    width: 45px;
    height: 45px;
    margin-right: 15px;
    background-color: #4EABA1;
  ` : css`
    flex: 1;
    height: 45px;
    background-color: #EF0E73;
  `}
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

export const PeopleButtonText = styled.Text`
  width: 100%;
  font-family: "Roboto_700Bold";
  color: #FFFFFF;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
`;
export const PeopleButtonIcon = styled.Image`
  width: 28px;
  height: 28px;
  resize-mode: contain;
`;