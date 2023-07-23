import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from '../atoms/Icon';
import AvatarProfile from '../atoms/AvatarProfile';
import ProfileTitle from '../atoms/ProfileTitle';
import {AppStrings} from '../../utils/AppStrings';
import ProfileDescription from '../atoms/ProfileDescription';
import PrimaryButton from '../atoms/PrimaryButton';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Icon
        iconName="menu-outline"
        iconSize={30}
        backgrondColor="transparent"
        iconcolor="black"
      />
      <AvatarProfile />
      <ProfileTitle leadingText={AppStrings.profileTitle} />
      <ProfileDescription description={AppStrings.profileDescription} />
      <PrimaryButton buttonTitle="Download Resume" onPressed={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Profile;
