import {View, SafeAreaView, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import SwotTaskList from './SwotTaskList';
import SwotGraph from './SwotGraph';
import {SwortTaskType, SwotType} from '../SwotType/SwotType';

type SwotProps = {
  swotData: SwotType[];
};

const Swot = ({swotData}: SwotProps) => {
  const [allTasks, setAllTask] = useState<SwotType[]>([]);

  useEffect(() => {
    setAllTask(swotData);
  }, []);

  const [swotTasks, setSwotTasks] = useState<SwortTaskType>({
    opportunities: [],
    strength: [],
    threats: [],
    weakness: [],
  });

  const updateTaskList = (selectedTask: SwotType) => {
    setAllTask(prevTasks =>
      prevTasks.filter(task => task.id !== selectedTask.id),
    );
    setSwotTasks(prevSwotTasks => {
      const updatedTasks = {...prevSwotTasks};
      switch (selectedTask.belongsTo) {
        case 'Strengths':
          updatedTasks.strength.push(selectedTask);
          break;
        case 'Weakness':
          updatedTasks.weakness.push(selectedTask);
          break;
        case 'Opportunities':
          updatedTasks.opportunities.push(selectedTask);
          break;
        case 'Threats':
          updatedTasks.threats.push(selectedTask);
          break;
        default:
          // Do nothing if belongsTo doesn't match any SWOT category
          break;
      }
      return updatedTasks;
    });
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        <View style={{padding: 20}}>
          <SwotGraph swotGraphType={swotTasks} />
          <SwotTaskList updateTaskList={updateTaskList} taskList={allTasks} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Swot;
