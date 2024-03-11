import {
  Button,
  Text,
  phoneRegExp,
} from '@eslam-elmeniawy/react-native-common-components';
import * as React from 'react';
import {useForm} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import {Keyboard, View} from 'react-native';
import VectorImage from 'react-native-vector-image';
import TextInputController from './TextInputController';
import styles from './style';
import type {FormValues} from './types';
import Space, {DIRECTION} from 'src/components/Space';
import {AppImages} from 'src/enums';

export default React.memo(() => {
  const getLogMessage = (message: string) => `## Register Screen: ${message}`;

  const {t: translate} = useTranslation();

  const {
    control,
    formState: {errors: formErrors},
    handleSubmit,
  } = useForm<FormValues>({
    defaultValues: {
      phone: '',
      password: '',
    },
  });

  const onSubmitPress = async (data: FormValues) => {
    console.log(getLogMessage('data'), data);
    Keyboard.dismiss();
    //const formData = new FormData();
  };

  return (
    <View style={{flex: 1}}>
      <VectorImage
        source={AppImages.LOGINLOGO}
        resizeMode="contain"
        style={styles.logo}
      />
      <Space direction={DIRECTION.TOP} space={24} />
      <Text style={styles.titleText}>Welcome Back</Text>
      <Space direction={DIRECTION.TOP} space={17} />
      <TextInputController
        style={styles.input}
        control={control}
        formErrors={formErrors}
        name="phone"
        keyboardType="name-phone-pad"
        placeholder="Phone Number"
        rules={{
          required: {
            value: true,
            message: translate('phone-empty-error'),
          },
          pattern: {
            value: phoneRegExp,
            message: translate('phone-valid-error'),
          },
        }}
      />
      <Space direction={DIRECTION.TOP} space={33} />
      <TextInputController
        style={styles.input}
        control={control}
        formErrors={formErrors}
        name="password"
        placeholder="Password"
        rules={{
          required: {
            value: true,
            message: translate('password-empty-error'),
          },
        }}
      />
      <Space direction={DIRECTION.TOP} space={4} />
      <Text style={styles.forgetPassword}>Forget Password ?</Text>
      <Space direction={DIRECTION.TOP} space={33} />
      <Button
        text={translate('register')}
        style={styles.button}
        onPress={handleSubmit(onSubmitPress)}
      />
      <Space direction={DIRECTION.TOP} space={83} />
      <Text style={{alignSelf: 'center'}}>
        Don't have an account? <Text style={{color: '#FE9C00'}}>Register</Text>
      </Text>
    </View>
  );
});
