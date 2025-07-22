import React, {useRef, useState} from 'react';
import {Button, View, StyleSheet, Text, ScrollView} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withDecay,
} from 'react-native-reanimated';
import Card from '../../components/card';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
const SIZE = 120;
const BOUNDARY_OFFSET = 50;

export const ProfileScreen = () => {
  const [isDisabled, setIsDisabled] = useState<any>(false);

  const width = useSharedValue<number>(400);
  const height = useSharedValue<number>(100);
  const offset = useSharedValue<number>(0);

  const handlePress = () => {
    height.value = withSpring(height.value + 400);
    setIsDisabled(true);
  };

  const pan = Gesture.Pan()
    .onChange(event => {
      offset.value += event.changeX;
    })
    .onFinalize(event => {
      offset.value = withDecay({
        velocity: event.velocityX,
        rubberBandEffect: true,
        clamp: [
          -(width.value / 2) + SIZE / 2 + BOUNDARY_OFFSET,
          width.value / 2 - SIZE / 2 - BOUNDARY_OFFSET,
        ],
      });
    });

  return (
    <>
      <Button disabled={isDisabled} onPress={handlePress} title="Click me" />
      <View style={styles.container}>
        {/* <GestureDetector gesture={pan}> */}
        <Animated.View style={{...styles.box, width, height}}>
          <View style={{}}>
            <View>{/* <Text>Patient Count</Text> */}</View>
            <ScrollView showsVerticalScrollIndicator={false}>
              <Card title="Patient Name" content="03 Jan 2024 ,11:30 AM" />
              <Card title="Patient Name" content="03 Jan 2024 ,11:30 AM" />
              <Card title="Patient Name" content="03 Jan 2024 ,11:30 AM" />
              <Card title="Patient Name" content="03 Jan 2024 ,11:30 AM" />
              <Card title="Patient Name" content="03 Jan 2024 ,11:30 AM" />
              <Card title="Patient Name" content="03 Jan 2024 ,11:30 AM" />
            </ScrollView>
            {/* <ScrollView style={styles.container}>
              // <Card
              //   title="Card 1"
              //   content="This is the content of the first card."
              // />
              <Card
                title="Card 2"
                content="This card has custom styles."
                style={{
                  backgroundColor: '#f0f8ff',
                  borderWidth: 1,
                  borderColor: '#ddd',
                }}
              />
              <Card title="Card 3" content="Another reusable card." />
            </ScrollView> */}
          </View>
        </Animated.View>
        {/* </GestureDetector> */}
      </View>
      {/* <View>
        <Text>hdhsd</Text>
      </View> */}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#1990FE',
    position: 'relative',
  },

  box: {
    backgroundColor: 'white',
    borderRadius: 20,

    position: 'absolute',
    bottom: -80,
  },
});
