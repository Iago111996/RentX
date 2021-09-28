import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButtonProps } from 'react-native-gesture-handler';
import GasolineSvg from '../../assets/gasoline.svg';

import {
  Brand,
  Container,
  Details,
  Name,
  About,
  Rent,
  Period,
  Price,
  Type,
  CardImage
} from './styles';

interface Data {
  brand: string;
  name: string;
  rent: {
    period: string;
    price: number;
  },
  thumbnail: string;
}

interface Props extends RectButtonProps {
 data: Data;
}

export const CardCar = ({ 
  data,
  ...rest
}: Props) => {
  return(
    <Container {...rest}>
      <Details>
        <Brand>{ data.brand }</Brand>
        <Name>{ data.name }</Name>
      
        <About>
          <Rent>
            <Period>{ data.rent.period }</Period>
            <Price>{`R$ ${data.rent.price}`}</Price>
          </Rent>

          <Type>
            <GasolineSvg 
              width={RFValue(17)}
              height={RFValue(22)}
            />
          </Type>
        </About>
      </Details>

      <CardImage 
        source={{ uri: data.thumbnail}}
        resizeMode="contain"
       />
    </Container>
  );
}