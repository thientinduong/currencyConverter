import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight, TextInput } from 'react-native';
import color from 'color';

import styles from './styles';

const InputWithButton = (props) => {
  const { onPress, buttonText, editable = true } = props;
  const containerStyle = [styles.container];
  const underlayColor = color(styles.$buttonBackgroundColorBase).darken(styles.$buttonBackgroundColorModifier);

  if (!editable) {
    containerStyle.push(styles.containerDisabled);
  }

  return (
    <View style={containerStyle}>
      <TouchableHighlight
        underlayColor={underlayColor}
        style={styles.buttonContainer}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>
          {buttonText}
        </Text>
      </TouchableHighlight>
      <View style={styles.border} />
      <TextInput style={styles.input} underlineColorAndroid='transparent' {...props} />
    </View>
  )
}

InputWithButton.propTypes = {
  onPress: PropTypes.func,
  buttonText: PropTypes.string,
  editable: PropTypes.bool,
}

export default InputWithButton;