import { Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window');

const metrics = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  fullWidth: '100%',
  fullHeight: '100%'
};

export default metrics;