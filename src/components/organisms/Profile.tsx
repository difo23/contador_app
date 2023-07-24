import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import AvatarProfile from '../atoms/AvatarProfile';
import ProfileTitle from '../atoms/ProfileTitle';
import {AppStrings} from '../../utils/AppStrings';
import ProfileDescription from '../atoms/ProfileDescription';
import PrimaryButton from '../atoms/PrimaryButton';
import Posts from '../molucules/Posts';
import Footer from '../molucules/Footer';
import AppBar from '../molucules/AppBar';
import {appStyles} from '../../styles/AppStyles';

const Profile = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <AppBar />
        <View style={appStyles.profile}>
          <AvatarProfile />
          <ProfileTitle leadingText={AppStrings.profileTitle} />
          <ProfileDescription description={AppStrings.profileDescription} />
          <PrimaryButton buttonTitle="Download Resume" onPressed={() => {}} />
        </View>
        <Posts />
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
