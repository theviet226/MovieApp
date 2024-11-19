import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';

interface PopularityCardProps {
  popularity: number;
}

const PopularityCard: React.FC<PopularityCardProps> = ({ popularity }) => {
    const circleColor = popularity > 80 ? 'green' : 'yellow';
  return (
    <View style={styles.container}>
      <ProgressCircle
        percent={popularity}
        radius={20}
        borderWidth={3}
        color={circleColor}
        shadowColor="#d3d3d3"
        bgColor="#000"
      >
        <Text
          style={[
            styles.percentageText,
            { color: popularity > 80 ? 'green' : 'yellow' }, 
          ]}
        >
          {popularity}%
        </Text>
      </ProgressCircle>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 5,
  },
  percentageText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'red',
  },

});

export default PopularityCard;
