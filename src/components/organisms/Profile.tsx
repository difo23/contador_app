import React from 'react';
import {View} from 'react-native';
import AvatarProfile from '../atoms/AvatarProfile';
import ProfileTitle from '../atoms/ProfileTitle';
import {AppStrings} from '../../utils/AppStrings';
import ProfileDescription from '../atoms/ProfileDescription';
import PrimaryButton from '../atoms/PrimaryButton';
import AppBar from '../molucules/AppBar';
import {appStyles} from '../../styles/AppStyles';

const Profile = () => {
  return (
    <View>
      <AppBar />
      <View style={appStyles.profile}>
        <AvatarProfile />
        <ProfileTitle leadingText={AppStrings.profileTitle} />
        <ProfileDescription description={AppStrings.profileDescription} />
        <PrimaryButton buttonTitle="Download Resume" onPressed={() => {}} />
      </View>
    </View>
  );
};

export default Profile;
