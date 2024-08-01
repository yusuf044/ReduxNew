import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store/store';

const ProfileScreen = () => {
  const isSignedIn = useSelector(state => state.userData.isSignedIn);
  const userName = useSelector(state => state.userData.userName);
  const dispatch = useDispatch();
  console.log('isSignedIn', isSignedIn);
  const {value} = useSelector((state: RootState) => state.counter);

  return (
    <View style={styles.cont}>
      <Text>{value}</Text>
      {isSignedIn ? (
        <View>
          <Text style={styles.text}>Hello {userName}</Text>

          {/* <Button title="log out" onPress={() => dispatch(logoutAction())} /> */}
        </View>
      ) : (
        <View>
          <Text style={styles.text}>Please Sign In</Text>
        </View>
      )}
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  cont: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    fontSize: 20,
    color: 'black',
    marginBottom: 10,
  },
});
