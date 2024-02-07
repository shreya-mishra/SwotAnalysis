import {Dispatch, SetStateAction} from 'react';
import {Animated} from 'react-native';

export type SwotDataType = {toAnalyse: string; belongsTo: string}[];
export type FormPropType = {
  textInputValue: string;
  setTextInputValue: Dispatch<SetStateAction<string>>;
  setSelectedDropdownValue: Dispatch<SetStateAction<string>>;
  handleFormSubmit: () => void;
  showForm: boolean;
  handleButtonPress: () => void;
};
export type AnimatedValues = Record<string, Animated.Value>;
