import React from 'react';
import {
  LayoutChangeEvent,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDecay,
} from 'react-native-reanimated';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import Card from '../../components/card';

export const Billing = () => {
  const offsetY = useSharedValue<number>(0);
  const height = useSharedValue<number>(0);
  const isScrolling = useSharedValue<boolean>(false);

  const SIZE = 420;
  const BOUNDARY_OFFSET = -200;

  const onLayout = (event: LayoutChangeEvent) => {
    height.value = event.nativeEvent.layout.height;
  };

  const pan = Gesture.Pan()
    .onBegin(() => {
      if (!isScrolling.value) {
        // Allow gesture only if ScrollView is not scrolling
        isScrolling.value = false;
      }
    })
    .onChange(event => {
      if (!isScrolling.value) {
        offsetY.value += event.changeY; // Update offsetY for vertical drag
      }
    })
    .onFinalize(event => {
      if (!isScrolling.value) {
        offsetY.value = withDecay({
          velocity: event.velocityY,
          rubberBandEffect: true,
          clamp: [
            -(height.value / 2) + SIZE / 2 + BOUNDARY_OFFSET,
            height.value / 2 - SIZE / 2 - BOUNDARY_OFFSET,
          ],
        });
      }
    });

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{translateY: offsetY.value}], // Apply translateY instead of translateX
  }));

  return (
    <GestureHandlerRootView style={styles.container}>
      <View onLayout={onLayout} style={styles.wrapper}>
        <GestureDetector gesture={pan}>
          <Animated.View style={[styles.box, animatedStyles]}>
            <View style={{marginTop: 20}}>
              <ScrollView
                showsVerticalScrollIndicator={false}
                onScrollBeginDrag={() => {
                  isScrolling.value = true; // Disable parent gesture when scrolling starts
                }}
                onScrollEndDrag={() => {
                  isScrolling.value = false; // Re-enable parent gesture after scrolling ends
                }}
                scrollEventThrottle={1}>
                <Card title="Patient Name" content="03 Jan 2024, 11:30 AM" />
                <Card title="Patient Name" content="03 Jan 2024, 11:30 AM" />
                <Card title="Patient Name" content="03 Jan 2024, 11:30 AM" />
                <Card title="Patient Name" content="03 Jan 2024, 11:30 AM" />
                <Card title="Patient Name" content="03 Jan 2024, 11:30 AM" />
                <Card title="Patient Name" content="03 Jan 2024, 11:30 AM" />
                <Card title="Patient Name" content="03 Jan 2024, 11:30 AM" />
                <Card title="Patient Name" content="03 Jan 2024, 11:30 AM" />
                <Card title="Patient Name" content="03 Jan 2024, 11:30 AM" />
                <Card title="Patient Name" content="03 Jan 2024, 11:30 AM" />
                <Card title="Patient Name" content="03 Jan 2024, 11:30 AM" />
                <Card title="Patient Name" content="03 Jan 2024, 11:30 AM" />
              </ScrollView>
            </View>
          </Animated.View>
        </GestureDetector>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  wrapper: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    height: 420,
    width: 420,
    backgroundColor: '#b58df1',
    borderRadius: 20,
    marginBottom: -880,
    overflow: 'hidden', // Ensure the ScrollView stays contained
  },
});
