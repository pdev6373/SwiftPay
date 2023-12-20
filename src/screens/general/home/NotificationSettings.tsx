import {StyleSheet, View, ScrollView} from 'react-native';
import {PageHeader, Switch, Text, Timeline} from '../../../components';
import {useState} from 'react';
import {sizeResponsive} from '../../../utils';

type NotificationSettingsTitleType = 'General' | 'App & System';

type NotificationSettingsSettingsType = {
  name: string;
  active: boolean;
};

type NotificationSettingsType = {
  title: NotificationSettingsTitleType;
  settings: NotificationSettingsSettingsType[];
};

export default function NotificationSettings() {
  const [notificationSettings, setNotificationSettings] = useState<
    NotificationSettingsType[]
  >([
    {
      title: 'General',
      settings: [
        {
          name: 'Transaction status updates',
          active: true,
        },
        {
          name: 'Fraud or suspicious activity alerts',
          active: false,
        },
        {
          name: 'Payment request notifications',
          active: true,
        },
        {
          name: 'Card activity notifications',
          active: false,
        },
        {
          name: 'Customer support notifications:',
          active: false,
        },
        {
          name: 'Account balance alerts',
          active: true,
        },
        {
          name: 'Security alerts',
          active: true,
        },
        {
          name: 'Daily or weekly summary',
          active: false,
        },
      ],
    },
    {
      title: 'App & System',
      settings: [
        {
          name: 'App updates & enhancements',
          active: false,
        },
        {
          name: 'Promotional offers & updates',
          active: true,
        },
        {
          name: 'Participate in a survey',
          active: false,
        },
      ],
    },
  ]);

  const toggleHandler = (title: NotificationSettingsTitleType, name: string) =>
    setNotificationSettings(prev =>
      prev.map(settings =>
        settings.title === title
          ? {
              title: settings.title,
              settings: settings.settings.map(settings =>
                settings.name === name
                  ? {...settings, active: !settings.active}
                  : settings,
              ),
            }
          : settings,
      ),
    );

  return (
    <View style={styles.wrapper}>
      <PageHeader>Notification</PageHeader>

      <ScrollView
        contentContainerStyle={styles.main}
        showsVerticalScrollIndicator={false}>
        {notificationSettings.map(allSettings => (
          <View style={styles.settingsWrapper} key={allSettings.title}>
            <Timeline date={allSettings.title} />

            <View style={styles.settingsWrapper}>
              {allSettings.settings.map(settings => (
                <View style={styles.settings} key={settings.name}>
                  <View style={styles.wrapper}>
                    <Text color="#fff" size={20} weight="600">
                      {settings.name}
                    </Text>
                  </View>
                  <Switch
                    active={settings.active}
                    setActive={() =>
                      toggleHandler(allSettings.title, settings.name)
                    }
                  />
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
    gap: sizeResponsive(28),
  },

  settingsWrapper: {
    gap: sizeResponsive(28),
  },

  settings: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: sizeResponsive(16),
  },
});
