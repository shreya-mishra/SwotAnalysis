import {Dispatch, SetStateAction} from 'react';
import {Animated} from 'react-native';

export type SwotDataType = SwotType[];
export type SwotType = {toAnalyse: string; belongsTo: string; id: number};
export type FormPropType = {
  textInputValue: string;
  setTextInputValue: Dispatch<SetStateAction<string>>;
  setSelectedDropdownValue: Dispatch<SetStateAction<string>>;
  handleFormSubmit: () => void;
  showForm: boolean;
  handleButtonPress: () => void;
};
export type AnimatedValues = Record<string, Animated.Value>;

export type SwortTaskType = {
  strength: SwotType[];
  weakness: SwotType[];
  opportunities: SwotType[];
  threats: SwotType[];
};
