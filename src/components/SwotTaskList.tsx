/* eslint-disable react-hooks/exhaustive-deps */
import {View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {TaskType} from './component/type';
import SwotTaskCard from './SwotTaskCard';

type SwotTaskListProps = {
  taskList: TaskType[];
  updateTaskList: (task: TaskType) => void;
};
const SwotTaskList = ({taskList, updateTaskList}: SwotTaskListProps) => {
  const [selectedAnimationTask, setSelectedAnimationTask] = useState<number>(0);
  let intervalId: any = useRef(null);
  useEffect(() => {
    intervalId.current = setInterval(() => {
      if (taskList.length > 0) {
        console.log('taskList.length', selectedAnimationTask);
        setSelectedAnimationTask(prev => prev + 1);
      } else {
        clearInterval(intervalId);
      }
    }, 1000);

    return () => clearInterval(intervalId.current);
  }, [taskList.length, selectedAnimationTask]);

  return (
    <View>
      {taskList.map((task, index) => (
        <SwotTaskCard
          updateTaskList={updateTaskList}
          task={task}
          animateNow={index === selectedAnimationTask}
          key={task.id}
          taskListLength={taskList.length}
        />
      ))}
    </View>
  );
};

export default SwotTaskList;
