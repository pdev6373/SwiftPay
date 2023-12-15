import {StyleSheet, ScrollView, View, Image, Pressable} from 'react-native';
import {Bottom, Button, Input, PageHeader} from '../../../components';
import {sizeResponsive} from '../../../utils';
const profilePics = require('../../../../assets/images/profile-picture.png');
const edit = require('../../../../assets/images/edit.png');
// import profilePics from '../../../../assets/images/profile-picture.png';

export default function PersonalInfo() {
  return (
    <View style={styles.wrapper}>
      <PageHeader>Personal Info</PageHeader>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}>
        <View style={styles.profilePicsWrapper}>
          <Image
            source={profilePics}
            style={{
              width: sizeResponsive(120),
              height: sizeResponsive(120),
            }}
          />
          <Pressable style={styles.editButton}>
            <Image
              source={edit}
              style={{
                width: sizeResponsive(30),
                height: sizeResponsive(30),
              }}
            />
          </Pressable>
        </View>

        <View style={styles.inputWrapper}>
          <Input label="Full Name" placeholder="Andrew Ainsley" />
          <Input label="Email" placeholder="andrew.ainsley@gmail.com" />
          <Input label="Phone Number" placeholder="+1 111 467 378 399" />
          <Input label="Date of Birth" placeholder="12/27/1995" />
          <Input label="Gender" placeholder="Male" />
          <Input label="Gender" placeholder="Male" />
          <Input label="Gender" placeholder="Male" />
          <Input label="Gender" placeholder="Male" />
        </View>
      </ScrollView>

      <Bottom>
        <Button
          buttonStyles={{
            background: '#A0E86F',
            borderColor: '#A0E86F',
          }}
          textStyles={{
            color: '#212121',
            size: 16,
            weight: '700',
            center: true,
          }}>
          Save
        </Button>
      </Bottom>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#181A20',
    gap: sizeResponsive(12),
  },

  contentContainerStyle: {
    paddingHorizontal: sizeResponsive(24),
    paddingBottom: sizeResponsive(24),
    gap: sizeResponsive(24),
  },

  profilePicsWrapper: {
    alignItems: 'center',
  },

  inputWrapper: {
    gap: sizeResponsive(24),
  },

  editButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});
