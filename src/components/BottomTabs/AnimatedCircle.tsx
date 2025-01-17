import {StyleSheet} from 'react-native';
import React, {FC} from 'react';
import Animated, {useAnimatedStyle, SharedValue} from 'react-native-reanimated';

type CircleProps = {
  circleX: SharedValue<number>;
};

const circleContainerSize = 50;

const AnimatedCircle: FC<CircleProps> = ({circleX}) => {
  const circleContainerStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: circleX.value - circleContainerSize / 2}],
    };
  }, []);
  return <Animated.View style={[circleContainerStyle, styles.container]} />;
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: -circleContainerSize / 1.1,
    width: circleContainerSize,
    borderRadius: circleContainerSize,
    height: circleContainerSize,
    backgroundColor: '#0ea5e9',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AnimatedCircle;
