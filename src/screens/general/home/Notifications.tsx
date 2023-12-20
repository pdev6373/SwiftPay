import {ScrollView, StyleSheet, View, Image, Pressable} from 'react-native';
import {PageHeader, Text, Timeline} from '../../../components';
import Settings from '../../../../assets/images/settings.svg';
import {HomeType, NotificationsType} from '../../../../types';
import More from '../../../../assets/images/more.svg';
import Cancel from '../../../../assets/images/cancel.svg';
import Check from '../../../../assets/images/check.svg';
import {sizeResponsive} from '../../../utils';
const security = require('../../../../assets//images/security.png');
const sender = require('../../../../assets//images/sender.png');
const card = require('../../../../assets//images/card.png');
const bag = require('../../../../assets//images/bag.png');
const ticket = require('../../../../assets//images/ticket.png');
const info = require('../../../../assets//images/info.png');

const notifications: NotificationsType[] = [
  {
    id: 1,
    date: 'Today',
    notifications: [
      {
        id: 1,
        icon: info,
        title: 'New Updates Available!',
        body: 'Update the SwiftPay app and enjoy new features for a better financial experience.',
        time: '09:41 AM',
        action: 'update',
        isRead: false,
      },
      {
        id: 2,
        icon: security,
        title: 'Enable 2-Factor Authentication',
        body: 'Use two-factor authentication for extra security on your account.',
        time: '09:10 AM',
        action: 'security',
        isRead: false,
      },
      {
        id: 3,
        icon: sender,
        title: 'Ronald Richards requested $250.00',
        body: '',
        time: '08:15 AM',
        action: 'request',
        isRead: false,
      },
    ],
  },
  {
    id: 2,
    date: 'Yesterday',
    notifications: [
      {
        id: 1,
        icon: card,
        title: 'Multiple Payments Support Update!',
        body: 'Now you can add multiple cards. Go to Account → Payment methods to add another payment.',
        time: '09:41 AM',
        action: 'security',
        isRead: true,
      },
      {
        id: 2,
        icon: bag,
        title: 'Christmas and New Year Promotions!',
        body: 'Shop at your favorite merchants with a minimum purchase of $100 to get extra cashback up to 20%.',
        time: '09:10 AM',
        action: 'promotion',
        isRead: true,
      },
    ],
  },
  {
    id: 3,
    date: 'Dec 22, 2023',
    notifications: [
      {
        id: 1,
        icon: ticket,
        title: 'End Year Special Offers!',
        body: 'Shop at your favorite merchants with a minimum purchase of $100 to get extra cashback up to 20%.',
        time: '13:41 PM',
        action: 'offers',
        isRead: false,
      },
    ],
  },
];

export default function Notifications({navigation}: HomeType) {
  return (
    <View style={styles.wrapper}>
      <PageHeader
        endIcon={({width, height}) => (
          <Settings width={width} height={height} />
        )}
        onEndIconPress={() => navigation.navigate('NotificationSettings')}>
        Notification
      </PageHeader>

      <ScrollView
        contentContainerStyle={styles.main}
        showsVerticalScrollIndicator={false}>
        {notifications.map(notification => (
          <View key={notification.id} style={styles.notifications}>
            <Timeline date={notification.date} />
            <View style={styles.notifications}>
              {notification.notifications.map(notification => (
                <View key={notification.id} style={styles.notification}>
                  <View style={styles.notificationMain}>
                    <View
                      style={[
                        styles.notificationImageWrapper,
                        notification.action === 'request' &&
                          styles.notificationImageWrapperNoDisplay,
                      ]}>
                      <Image
                        source={notification.icon}
                        style={[
                          styles.notificationImage,
                          notification.action === 'request' &&
                            styles.notificationImageFull,
                        ]}
                      />
                    </View>

                    <View style={styles.textWrapper}>
                      <Text color="#fff" size={18} weight="600">
                        {notification.title}
                      </Text>
                      {notification.body ? (
                        <Text
                          color="#f5f5f5"
                          size={14}
                          weight="500"
                          spacing={0.2}>
                          {notification.body}
                        </Text>
                      ) : (
                        <></>
                      )}
                      <Text color="#eee" size={12} weight="500" spacing={0.2}>
                        {notification.time}
                      </Text>
                    </View>
                  </View>

                  <View style={styles.action}>
                    {notification.action === 'request' ? (
                      <View style={styles.requestActions}>
                        <Pressable style={styles.cancelRequest}>
                          <Cancel
                            width={sizeResponsive(24)}
                            height={sizeResponsive(24)}
                          />
                        </Pressable>

                        <Pressable style={styles.checkRequest}>
                          <Check
                            width={sizeResponsive(24)}
                            height={sizeResponsive(24)}
                          />
                        </Pressable>
                      </View>
                    ) : notification.isRead ? (
                      <></>
                    ) : (
                      <View style={styles.notificationStatus} />
                    )}
                    <More
                      width={sizeResponsive(28)}
                      height={sizeResponsive(28)}
                    />
                  </View>
                </View>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },

  main: {
    padding: sizeResponsive(24),
    paddingVertical: sizeResponsive(12),
    gap: sizeResponsive(24),
  },

  notifications: {
    gap: sizeResponsive(24),
  },

  notification: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: sizeResponsive(16),
  },

  notificationMain: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: sizeResponsive(16),
    flex: 1,
  },

  notificationImageWrapper: {
    padding: sizeResponsive(16),
    borderRadius: sizeResponsive(60),
    borderWidth: 1,
    borderColor: '#35383F',
  },

  notificationImageWrapperNoDisplay: {
    padding: 0,
    borderRadius: 0,
    borderWidth: 0,
    borderColor: 'rgba(255, 255, 255, 0)',
  },

  notificationImage: {
    width: sizeResponsive(28),
    height: sizeResponsive(28),
  },

  notificationImageFull: {
    width: sizeResponsive(60),
    height: sizeResponsive(60),
  },

  action: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: sizeResponsive(16),
  },

  notificationStatus: {
    width: sizeResponsive(12),
    height: sizeResponsive(12),
    borderRadius: sizeResponsive(12),
    backgroundColor: '#A0E86F',
  },

  textWrapper: {
    flex: 1,
    gap: sizeResponsive(6),
  },

  requestActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: sizeResponsive(16),
  },

  cancelRequest: {
    backgroundColor: '#F75555',
    borderRadius: sizeResponsive(24),
    borderWidth: 1,
    borderColor: '#F75555',
  },

  checkRequest: {
    backgroundColor: '#A0E86F',
    borderRadius: sizeResponsive(24),
    borderWidth: 1,
    borderColor: '#EEEEEE',
  },
});
