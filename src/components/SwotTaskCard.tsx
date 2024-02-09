/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef} from 'react';
import {Animated, Text, TouchableOpacity} from 'react-native';
import {SwotType} from '../SwotType/SwotType';

type SwotTaskCardProps = {
  task: SwotType;
  taskListLength: number;
  updateTaskList: (taskInfo: SwotType) => void;
  animateNow: boolean;
};
const SwotTaskCard = ({
  task,
  updateTaskList,
  animateNow,
}: SwotTaskCardProps) => {
  const animatedValue = useRef(new Animated.ValueXY()).current;
  const animatedScale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    animateNow && moveTaskToQuadrant(task.belongsTo);
  }, [animateNow]);

  const moveTaskToQuadrant = (quadrant: string) => {
    let toX = 0;
    let toY = 0;
    if (quadrant === 'Strengths') {
      toX = -80;
      toY = -400;
    }
    if (quadrant === 'Opportunities') {
      toX = -75;
      toY = -160;
    }
    if (quadrant === 'Weakness') {
      toX = 80;
      toY = -400;
    }
    if (quadrant === 'Threats') {
      toX = 80;
      toY = -160;
    }

    Animated.timing(animatedScale, {
      toValue: 0.4,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      updateTaskList(task);
    });
    Animated.timing(animatedValue, {
      toValue: {x: toX, y: toY},
      duration: 500,
      useNativeDriver: true,
    }).start();
  };
  return (
    <Animated.View
      style={[
        {
          transform: [
            {
              translateX: animatedValue.getTranslateTransform()[0].translateX,
            },
            {
              translateY: animatedValue.getTranslateTransform()[1].translateY,
            },
            {
              scale: animatedScale,
            },
          ],
        },
      ]}>
      <TouchableOpacity
        key={task.id}
        onPress={() => moveTaskToQuadrant(task.belongsTo)}
        style={{
          backgroundColor: '#efefef',
          elevation: 3,
          padding: 10,
          marginTop: 20,
          borderWidth: 1,
          borderColor: 'black',
          borderRadius: 10,
        }}>
        <Text style={{color: '#000'}}>
          {task.toAnalyse} {task.belongsTo}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default SwotTaskCard;
