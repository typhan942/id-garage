import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {
  createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem,
} from '@react-navigation/drawer';
import { AntDesign } from '@expo/vector-icons';
import { useDispatch, connect } from 'react-redux';
import PropTypes from 'prop-types';
import BottomTabNavigator from './bottomTabNavigator';
import TopTabNavigator from './topTabNavigator';
import About from '../../components/about-screens/about';
import Contact from '../../components/contact-screens/contact';
import SearchResults from '../../components/search';
import SelectLanguage from '../../components/sidebar/selectLanguage';
// photos
import introduction from '../../assets/images/Introduction.png';
import ContactLogo from '../../assets/images/drawer/Contacter.png';
import PowerLogo from '../../assets/images/drawer/Power.png';
import AccountLogo from '../../assets/images/drawer/Account.png';
import AboutLogo from '../../assets/images/drawer/About.png';
import SearchLogo from '../../assets/images/search/search.png';

// colors
import colors from '../../assets/css/style-colors';

const mapStateToProps = (state) => ({
  ...state,
});

const Drawer = createDrawerNavigator();

const styles = StyleSheet.create({
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  closeBtn: {
    alignItems: 'flex-end',
    margin: 5,
  },
  img: {
    width: 20,
    height: 20,
  },
  drawerItem: {
    marginVertical: 0,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderTopColor: colors.WhiteDark,
  },
  bgImg: {
    width: 130,
    height: 130,
  },
});

const iconHome = () => <AntDesign name="home" size={24} color="black" />;
const logoSearch = () => <Image style={styles.img} source={SearchLogo} />;
const logoContact = () => <Image style={styles.img} source={ContactLogo} />;
const logoLogout = () => <Image style={styles.img} source={PowerLogo} />;
const logoAccount = () => <Image style={styles.img} source={AccountLogo} />;
const logoAbout = () => <Image style={styles.img} source={AboutLogo} />;

// eslint-disable-next-line react/prop-types
function CustomDrawerContent({ props, dispatch, lg }) {
  const logout = async () => {
    await dispatch({ type: 'LOGOUT' });
    await props.navigation.closeDrawer();
  };

  /**
     * @TODO implement logout feature with API
     */

  /**
     */
  const onClose = () => {
    props.navigation.closeDrawer();
  };

  return (
    <DrawerContentScrollView {...props}>
      <TouchableOpacity
        style={styles.closeBtn}
        onPress={onClose}
      >
        <AntDesign name="close" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.header}>
        <Image
          resizeMode="contain"
          style={styles.bgImg}
          source={introduction}
        />
      </View>
      <DrawerItemList style={styles.drawerItem} {...props} />
      <View style={styles.drawerItem}>
        <SelectLanguage />
      </View>
      <DrawerItem
        style={styles.drawerItem}
        labelStyle={{
          fontSize: 14,
          fontFamily: 'GothamBold',
          color: colors.black,
          marginLeft: -10,
        }}
        label={lg.loginGarage.deconnectionButton}
        icon={logoLogout}
        onPress={logout}
      />
    </DrawerContentScrollView>
  );
}

const AppDrawerNavigator = (props) => {
  const { languageReducer } = props;
  const lg = languageReducer.language;
  const dispatch = useDispatch();

  return (
    <Drawer.Navigator
      drawerPosition="right"
      /* eslint-disable-next-line no-shadow */
      drawerContent={(props) => CustomDrawerContent({ props, dispatch, lg })}
      drawerStyle={{
        width: 240,
      }}
      drawerContentOptions={{
        activeTintColor: colors.dark,
        inactiveTintColor: colors.slateGrey,
        itemStyle: styles.drawerItem,
        labelStyle: {
          fontSize: 14,
          fontFamily: 'GothamBold',
          color: colors.black,
          marginLeft: -10,
        },
      }}
    >
      <Drawer.Screen
        options={{ title: lg.menuRight.home, drawerIcon: iconHome }}
        name="home"
        component={BottomTabNavigator}
      />

      <Drawer.Screen
        options={{ title: lg.menuRight.account, drawerIcon: logoAccount }}
        name="mon compte"
        component={TopTabNavigator}
      />

      <Drawer.Screen
        options={{ title: lg.menuRight.about, drawerIcon: logoAbout }}
        name="About"
        component={About}
      />

      <Drawer.Screen
        options={{ title: lg.menuRight.contact, drawerIcon: logoContact }}
        name="contact"
        component={Contact}
      />

      <Drawer.Screen
        options={{ title: lg.searchMobile.title, drawerIcon: logoSearch }}
        name="search"
        component={SearchResults}
      />

    </Drawer.Navigator>
  );
};

CustomDrawerContent.propTypes = {
  lg: PropTypes.objectOf(PropTypes.any).isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

AppDrawerNavigator.propTypes = {
  languageReducer: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps)(AppDrawerNavigator);
