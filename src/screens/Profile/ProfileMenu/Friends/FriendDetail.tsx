import React from 'react';
import {Linking, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import colors from '../../../../constants/colors';

const openCompanyWebsite = (url: string) => Linking.openURL(`https://${url}`);
const sendMailToCompany = (email: string) => Linking.openURL(`mailto:${email}`);
const phoneCallToCompany = (phone: string) => Linking.openURL(`tel:${phone}`);

const NameUserName = ({user}: any) => {
  return (
    <View style={friendDetailStyles.cardContainer}>
      <Text style={friendDetailStyles.friendName}>{user.name}</Text>
      <Text style={friendDetailStyles.userInfoText}>{user.username}</Text>
    </View>
  );
};

const ContactDetails = ({user}: any) => {
  return (
    <View style={friendDetailStyles.cardContainer}>
      <Text style={friendDetailStyles.sectionHeader}>Contact Details</Text>
      <TouchableOpacity onPress={() => phoneCallToCompany(user.phone)}>
        <Text style={friendDetailStyles.linkText}>{user.phone}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => sendMailToCompany(user.email)}>
        <Text style={friendDetailStyles.linkText}>{user.email}</Text>
      </TouchableOpacity>
    </View>
  );
};

const CompanyDetails = ({user}: any) => {
  return (
    <View style={friendDetailStyles.cardContainer}>
      <Text style={friendDetailStyles.sectionHeader}>Company Details</Text>
      <Text style={friendDetailStyles.userInfoText}>{user.company.name}</Text>
      <Text style={friendDetailStyles.userInfoText}>
        {user.company.catchPhrase}
      </Text>
      <Text style={friendDetailStyles.userInfoText}>{user.company.bs}</Text>
      <TouchableOpacity onPress={() => openCompanyWebsite(user.website)}>
        <Text style={friendDetailStyles.linkText}>{user.website}</Text>
      </TouchableOpacity>
    </View>
  );
};

const AddressDetails = ({user}: any) => {
  return (
    <View style={friendDetailStyles.cardContainer}>
      <Text style={friendDetailStyles.sectionHeader}>Address Details</Text>
      <Text style={friendDetailStyles.userInfoText}>{user.address.street}</Text>
      <Text style={friendDetailStyles.userInfoText}>{user.address.suite}</Text>
      <Text style={friendDetailStyles.userInfoText}>{user.address.city}</Text>
      <Text style={friendDetailStyles.userInfoText}>
        {user.address.zipcode}
      </Text>
      <Text style={friendDetailStyles.linkText}>Get directions</Text>
    </View>
  );
};

const FriendDetail = (props: any) => {
  const {user} = props.route.params;

  return (
    <View style={friendDetailStyles.rootContainer}>
      <NameUserName user={user} />
      <ContactDetails user={user} />
      <CompanyDetails user={user} />
      <AddressDetails user={user} />
    </View>
  );
};

export default FriendDetail;

const friendDetailStyles = StyleSheet.create({
  linkText: {
    color: 'blue',
    fontSize: 16,
    marginTop: 5,
    textDecorationLine: 'underline',
  },
  userInfoText: {
    fontSize: 15,
    lineHeight: 22,
    fontWeight: '500',
  },
  sectionHeader: {
    fontSize: 17,
    color: colors.black,
    marginBottom: 5,
  },
  cardContainer: {
    padding: 20,
    marginVertical: 10,
    backgroundColor: colors.white,
    borderRadius: 10,
    elevation: 10,
  },
  friendName: {
    fontSize: 26,
    fontWeight: '600',
    color: colors.green,
  },
  rootContainer: {
    padding: 20,
    flex: 1,
  },
});
