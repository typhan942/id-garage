import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {
  View, Text, Image, TouchableOpacity, StyleSheet, ScrollView,
} from 'react-native';
import { Header } from 'react-native-elements';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CommandPlanning from '../../components/command-screens/planning-tab/commandPlanning';
import CommandMessage from '../../components/command-screens/message-tab/commandMessage';
import CommandCustomer from '../../components/command-screens/customer-tab/commandCustomer';
import CommandCar from '../../components/command-screens/car-tab/commandCar';
import CommandPremium from '../../components/command-screens/equipment-tab/commandEquipment';
import colors from '../../assets/css/style-colors';
import logo from '../../assets/images/src_assets_images_logo1.png';
import Command from '../../components/command-screens';
import cog from '../../assets/images/header/Cog.png';
import planningGreen from '../../assets/images/command/Planning-green.png';
import planning from '../../assets/images/command/Planning.png';
import userGreen from '../../assets/images/command/greenUser.png';
import user from '../../assets/images/command/user.png';
import carGreen from '../../assets/images/command/greenCar.png';
import car from '../../assets/images/command/car.png';
import messageGreen from '../../assets/images/command/greenMessage.png';
import message from '../../assets/images/command/message.png';

const Tab = createMaterialTopTabNavigator();

const mapStateToProps = ({ languageReducer }) => ({
  lg: languageReducer.language,
});

const TopTabNavigatorCommand = (props) => {
  const {
    navigation, lg,
  } = props;

  const styles = StyleSheet.create({
    img: {
      width: 25,
      height: 25,
    },
    icon: {
      width: 20,
      height: 20,
    },
    icon2: {
      width: 26,
      height: 20,
    },
    horizon: {
      flexDirection: 'row',
      backgroundColor: colors.white,
      marginTop: 10,
      marginBottom: 10,
      marginLeft: 16,
    },
    logo: {
      height: 35,
      width: 35,
      resizeMode: 'contain',
    },
    radius: {
      backgroundColor: colors.white,
      borderRadius: 8,
      padding: 5,
      borderWidth: 1,
      borderColor: colors.veryLightBlue,
    },
    vertical: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      marginLeft: 15,
    },
    number: {
      fontSize: 18,
      color: colors.dark,
      fontFamily: 'GothamBold',
    },
    command: {
      flexDirection: 'column',
    },
    wrapHeader: {
      flex: 1,
      backgroundColor: colors.white,
    },
    wrapNavigator: {
      height: 235,
    },
  });

  const [commands, onChangeCommand] = React.useState({});

  function command(dataForCommand) {
    onChangeCommand(dataForCommand);
  }

  return (
    <View style={styles.wrapHeader}>
      <Header
        containerStyle={{
          height: 80,
          paddingBottom: 15,
          justifyContent: 'center',
          alignItems: 'center',
          headerForceInset: { top: 'never', bottom: 'never' },
        }}
        backgroundColor="white"
        leftComponent={(
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
)}
        centerComponent={{ text: 'Commande', style: { color: 'black', fontFamily: 'GothamBold', fontSize: 18 } }}
        rightComponent={(
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image
              style={styles.img}
              source={cog}
            />
          </TouchableOpacity>
)}
      />
      <View style={styles.horizon}>
        <View style={styles.radius}>
          <Image style={styles.logo} source={logo} />
        </View>
        <View style={styles.vertical}>
          <Text style={styles.number}>
            N°
            {' '}
            {commands.order}
          </Text>
        </View>
      </View>
      <ScrollView>
        <View style={styles.wrapNavigator}>
          <Tab.Navigator
            tabBarPosition="top"
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused }) => {
                if (commands.rdv === 'perso') {
                  if (route.name === lg.navigationCommand.planning) {
                    return focused
                      ? <Image style={styles.icon} source={planningGreen} />
                      : <Image style={styles.icon} source={planning} />;
                  } if (route.name === lg.navigationCommand.customer) {
                    return focused
                      ? <Image style={styles.icon} source={userGreen} />
                      : <Image style={styles.icon} source={user} />;
                  } if (route.name === lg.navigationCommand.car) {
                    return focused
                      ? <Image style={styles.icon2} source={carGreen} />
                      : <Image style={styles.icon2} source={car} />;
                  }
                } else {
                  if (route.name === lg.navigationCommand.planning) {
                    return focused
                      ? <Image style={styles.icon} source={planningGreen} />
                      : <Image style={styles.icon} source={planning} />;
                  } if (route.name === lg.navigationCommand.message) {
                    return focused
                      ? <Image style={styles.icon} source={messageGreen} />
                      : <Image style={styles.icon} source={message} />;
                  } if (route.name === lg.navigationCommand.customer) {
                    return focused
                      ? <Image style={styles.icon} source={userGreen} />
                      : <Image style={styles.icon} source={user} />;
                  } if (route.name === lg.navigationCommand.car) {
                    return focused
                      ? <Image style={styles.icon2} source={carGreen} />
                      : <Image style={styles.icon2} source={car} />;
                  } if (route.name === lg.navigationCommand.equipment) {
                    // no icon from model
                    return focused
                      ? <FontAwesome name="diamond" size={20} color={colors.mediumGreen} />
                      : <FontAwesome name="diamond" size={20} color={colors.slateGrey} />;
                  }
                }
                return true;
              },
            })}
            tabBarOptions={{
              scrollEnabled: true,
              labelStyle: {
                fontSize: 13,
                fontFamily: 'GothamMedium',
                lineHeight: 22,
                textTransform: 'none',
              },
              indicatorStyle: {
                backgroundColor: colors.mediumGreen,
              },
              activeTintColor: colors.mediumGreen,
              inactiveTintColor: colors.slateGrey,
              showIcon: true,
              tabStyle: {
                flexDirection: 'row',
              },
            }}
          >
            { commands.rdv === 'perso' ? (
              <>
                <Tab.Screen name={lg.navigationCommand.planning} component={CommandPlanning} />
                <Tab.Screen name={lg.navigationCommand.customer} component={CommandCustomer} />
                <Tab.Screen name={lg.navigationCommand.car} component={CommandCar} />
              </>
            )
              : (
                <>
                  <Tab.Screen name={lg.navigationCommand.planning} component={CommandPlanning} />
                  <Tab.Screen name={lg.navigationCommand.message} component={CommandMessage} />
                  <Tab.Screen name={lg.navigationCommand.customer} component={CommandCustomer} />
                  <Tab.Screen name={lg.navigationCommand.car} component={CommandCar} />
                  <Tab.Screen name={lg.navigationCommand.equipment} component={CommandPremium} />
                </>
              )}

          </Tab.Navigator>
        </View>

        <View style={styles.command}>
          <Command
            navigation={navigation}
            command={command}
          />
        </View>
      </ScrollView>

    </View>
  );
};

TopTabNavigatorCommand.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  lg: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps)(TopTabNavigatorCommand);
