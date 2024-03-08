import {
  Animated,
  FlatList,
  Image,
  StyleSheet,
  View,
  useWindowDimensions,
} from 'react-native';
import {Data} from '../../constants';
import {useTheme} from '../../hooks';
import {useRef, useState} from 'react';
import {Bottom, Button, Text} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {ButtonStylesType, TextType} from '../../../types';
import AsyncStorage from '@react-native-async-storage/async-storage';

type OnboardingStylesType = {
  activeColor: string;
  inactiveColor: string;
  width: number;
};

type ButtonType = {
  children: 'Skip' | 'Continue';
  buttonStyles: ButtonStylesType;
  textStyles: TextType;
};

const actions: ButtonType[] = [
  {
    children: 'Skip',
    buttonStyles: {
      background: 'transparent',
      borderColor: '#A0E86F',
    },
    textStyles: {
      size: 16,
      weight: '700',
      color: '#fff',
      center: true,
    },
  },

  {
    children: 'Continue',
    buttonStyles: {
      background: '#A0E86F',
      borderColor: '#A0E86F',
    },
    textStyles: {
      size: 16,
      weight: '700',
      color: '#212121',
      center: true,
    },
  },
];

export default function Onboarding() {
  const {COLOR} = useTheme();
  const {width} = useWindowDimensions();
  const slidesRef = useRef(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigation = useNavigation();
  //   const navigation = useNavigation<any>();

  const viewableItemsChanged = useRef(({viewableItems}: any) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  const Styles = styles({
    activeColor: COLOR.indicator.main,
    inactiveColor: COLOR.indicator.secondary,
    width,
  });

  const getStartedHandler = async () => {
    await AsyncStorage.setItem('isNew', 'false');
    navigation.navigate('Get Started');
  };

  return (
    <View style={Styles.wrapper}>
      <View style={Styles.innerWrapper}>
        <FlatList
          ref={slidesRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {
              useNativeDriver: false,
            },
          )}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          scrollEventThrottle={32}
          data={Data.onboarding}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View style={[Styles.wrapper, Styles.fullWidth]}>
              <View style={Styles.imageWrapper}>
                <Image source={item.image} style={Styles.image} />
              </View>

              <View style={Styles.main}>
                <View style={Styles.mainTexts}>
                  <View style={Styles.title}>
                    <Text size={32} weight="700" color="#fff" center>
                      {item.title}
                    </Text>
                  </View>

                  <View style={Styles.body}>
                    <Text
                      size={18}
                      weight="400"
                      color="#eee"
                      spacing={0.2}
                      center>
                      {item.description}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          )}
        />

        <Bottom>
          <>
            {currentIndex === Data.onboarding.length - 1 ? (
              <Button
                buttonStyles={{
                  background: '#A0E86F',
                  borderColor: '#A0E86F',
                }}
                textStyles={{
                  size: 16,
                  weight: '700',
                  color: '#212121',
                  center: true,
                }}
                onPress={getStartedHandler}>
                Get Started
              </Button>
            ) : (
              actions.map(action => (
                <Button
                  key={action.children}
                  buttonStyles={action.buttonStyles}
                  textStyles={action.textStyles}
                  onPress={() => {}}>
                  {action.children}
                </Button>
              ))
            )}
          </>
        </Bottom>
      </View>
    </View>
  );
}

const styles = ({activeColor, inactiveColor, width}: OnboardingStylesType) =>
  StyleSheet.create({
    // wrapper: {
    //   alignItems: "center",
    //   // marginTop: 89 + Constants.statusBarHeight,
    //   marginTop: 89,
    // },

    // indicators: {
    //   flexDirection: "row",
    //   gap: 6,
    // },

    // indicator: {
    //   width: 6,
    //   height: 6,
    //   borderRadius: 1000,
    //   backgroundColor: inactiveColor,
    // },

    // indicatorActive: {
    //   width: 32,
    //   backgroundColor: activeColor,
    // },

    // -----------------

    wrapper: {
      flex: 1,
      backgroundColor: '#181A20',
      overflow: 'hidden',
    },

    fullWidth: {
      width,
    },

    imageWrapper: {
      width: '200%',
      marginLeft: '-50%',
      flexGrow: 1,
      overflow: 'hidden',
      position: 'relative',
      backgroundColor: '#A0E86F',
      borderBottomLeftRadius: 400,
      borderBottomRightRadius: 400,
      alignItems: 'center',
    },

    image: {
      position: 'absolute',
      top: 12,
      width: '37.2093%',
      height: undefined,
      aspectRatio: 1 / 2.03175,
      resizeMode: 'contain',
    },

    main: {
      flexShrink: 0,
      width: '100%',
      backgroundColor: '#181A20',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 24,
      paddingHorizontal: 24,
      paddingTop: 24.48,
      paddingBottom: 35,
    },

    mainTexts: {
      alignItems: 'center',
      justifyContent: 'center',
      gap: 12,
    },

    title: {
      maxWidth: 300,
    },

    body: {
      maxWidth: 320,
    },

    innerWrapper: {
      flex: 3,
    },
  });
