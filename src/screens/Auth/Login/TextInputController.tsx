import {TextInput} from '@eslam-elmeniawy/react-native-common-components';
import * as React from 'react';
import {Controller} from 'react-hook-form';
import type {FormValues} from './types';
import type {Control, FieldErrors, RegisterOptions} from 'react-hook-form';
import type {KeyboardTypeOptions, StyleProp, TextStyle} from 'react-native';

interface InputProps {
  name: string;
  control: Control<FormValues, any>;
  formErrors: FieldErrors<FormValues>;
  rules?: Omit<
    RegisterOptions<FormValues>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions | undefined;
  style?: (StyleProp<TextStyle> & {[key: string]: any}) | undefined;
}

export default React.memo((props: InputProps) => (
  <Controller
    name={props.name}
    control={props.control}
    rules={props.rules}
    render={({field: {onChange, onBlur, value}}) => (
      <TextInput
        style={props.style}
        placeholder={props.placeholder}
        keyboardType={props.keyboardType}
        underlineColor="transparent"
        underlineColorAndroid="transparent"
        activeUnderlineColor="transparent"
        errorProps={{errorMessage: props.formErrors[props.name]?.message}}
        onBlur={onBlur}
        onChange={onChange}
        onChangeText={onChange}
        value={value}
      />
    )}
  />
));
