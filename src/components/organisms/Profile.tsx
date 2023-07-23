import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from '../atoms/Icon';
import AvatarProfile from '../atoms/AvatarProfile';
import ProfileTitle from '../atoms/ProfileTitle';
import {AppStrings} from '../../utils/AppStrings';
import ProfileDescription from '../atoms/ProfileDescription';
import PrimaryButton from '../atoms/PrimaryButton';
import Posts from '../molucules/Posts';
import Footer from '../molucules/Footer';

const Profile = () => {
  return (
    <View>
      <Icon iconName="menu-outline" iconSize={30} iconcolor="black" />
      <AvatarProfile />
      <ProfileTitle leadingText={AppStrings.profileTitle} />
      <ProfileDescription description={AppStrings.profileDescription} />
      <PrimaryButton buttonTitle="Download Resume" onPressed={() => {}} />
      <Posts />
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    justifyContent: 'flex-end',
  },
});

export default Profile;
