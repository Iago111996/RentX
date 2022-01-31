import React, { useState, useRef } from "react";
import { FlatList, ViewToken } from "react-native";
import {
  Container,
  ImageIndexs,
  ImageIndex,
  CarImageWrapper,
  CarImage,
} from "./styles";

interface Props {
  imageUrl: string[];
}

interface ChangeImageProps {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}

export const ImageSlider = ({ imageUrl }: Props) => {
  const [imageIndex, setImageIndex] = useState(0);

  const indexChange = useRef((info: ChangeImageProps) => {
    const index = info.viewableItems[0].index!
    setImageIndex(index);
  });

  return (
    <Container>
      <ImageIndexs>
        {imageUrl.map((_, index) => (
          <ImageIndex key={index} active={index == imageIndex} />
        ))}
      </ImageIndexs>

      <FlatList
        data={imageUrl}
        keyExtractor={(key) => key}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={indexChange.current}
        renderItem={({ item }) => (
          <CarImageWrapper>
            <CarImage source={{ uri: item }} resizeMode="contain" />
          </CarImageWrapper>
        )}
      />
    </Container>
  );
};
