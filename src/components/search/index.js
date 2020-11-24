import React, { useState } from 'react';
import {
  StyleSheet, Text, View, Image, FlatList, TouchableOpacity, Dimensions, TextInput,
} from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';
import PropTypes from 'prop-types';
import { AntDesign } from '@expo/vector-icons';
import Devis from '../planning/components/oneTicket';
import colors from '../../assets/css/style-colors';
import cog from '../../assets/images/cog/cog.png';

// rEDUX:

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = () => ({
});

const SearchResults = (props) => {
  // cONSTANTS:

  const {
    navigation, calendarReducer, languageReducer,
  } = props;
  const lg = languageReducer.language;
  const { allData } = calendarReducer;
  // sTATES:

  const [searchForValue, setText] = useState(null);

  // sTYLES:
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      backgroundColor: colors.white,
    },
    row: {
      width: Dimensions.get('window').width,
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
    },
    tickets: {
      flex: 5,
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      backgroundColor: colors.paleGrey,
      borderTopWidth: 0.5,
      borderTopColor: colors.perso,
    },
    header: {
      flex: 1,
      width: Dimensions.get('window').width,
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 10,
      backgroundColor: colors.white,
      paddingLeft: 10,
      paddingRight: 10,
      marginBottom: -10,
    },
    inputBox: {
      flex: 1,
      width: Dimensions.get('window').width,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: 10,
      height: 42,
      borderRadius: 8,
      backgroundColor: colors.paleGrey,
      marginTop: 5,
    },
    dateBox: {
      padding: 10,
    },
    dateText: {
      color: colors.lightGreyBlue,
      fontFamily: 'GothamMedium',
      fontSize: 11,
    },
    headerText: {
      fontSize: 18,
      color: colors.dark,
      fontFamily: 'GothamBold',
    },
    text: {
      fontSize: 16,
      color: colors.dark,
    },
    mg10: {
      margin: 10,
    },
    inputSearch: {
      fontFamily: 'GothamBook',
      fontSize: 14,
    },
  });

  // fUNCTIONS:

  const results = (value) => {
    if (value) {
      const res = [];
      const obj = allData;
      for (let i = 0; i < obj.length; i++) {
        for (let j = 0; j < 6; j++) {
          for (let k = 0; k < obj[i].data[j].tickets.length; k++) {
            const { name, order, quotes } = obj[i].data[j].tickets[k];
            const devises = [];
            for (let d = 0; d < quotes.length; d++) {
              devises.push(quotes[d].number);
            }
            if (name.toLowerCase().indexOf(value.toLowerCase()) >= 0
                || order.indexOf(value) >= 0
                || devises.includes(value)) {
              obj[i].data[j].tickets2show = [];
              obj[i].data[j].day = [];
              obj[i].data[j].dayNumber = [];
              obj[i].data[j].tickets2show.push(obj[i].data[j].tickets[k]);
              obj[i].data[j].dayNumber.push(j);
              obj[i].data[j].day.push(moment().week(i).day(j + 1).format('D MMMM'));
              res.push(obj[i].data[j]);
            }
          }
        }
      }
      return res;
    }
    return null;
  };

  const outcome = results(searchForValue);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerText}>
            {outcome && outcome.length !== 0 ? `${outcome.length} ${lg.searchMobile.result}` : lg.searchMobile.title }
          </Text>
          <TouchableOpacity style={styles.mg10} onPress={() => navigation.openDrawer()}>
            <Image size={30} source={cog} />
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <View style={styles.inputBox}>
            <TextInput
              style={[styles.inputSearch,
                { color: outcome && outcome.length === 0 ? colors.lightGreyBlue : colors.dark }]}
              value={searchForValue}
              onChangeText={(value) => setText(value)}
              placeholder={lg.searchMobile.placeholder}
            />
          </View>
        </View>
      </View>
      <View style={styles.tickets}>
        {outcome && outcome.length !== 0 ? (
          <FlatList
            contentContainerStyle={{
              flexDirection: 'column',
              width: Dimensions.get('window').width,
            }}
            data={outcome && outcome.length !== 0 ? outcome.sort((a, b) => (a > b ? -1 : 1)) : []}
            renderItem={({ item, index }) => (
              <View>
                {item.tickets2show.length === 0 ? null : (
                  <View style={styles.dateBox}>
                    <Text style={styles.dateText}>
                      {`${lg.planning.weekdaysFull[item.dayNumber]}, ${item.day}`}
                    </Text>
                  </View>
                )}
                {item.tickets2show.sort((a, b) => (a.time > b.time ? 1 : -1)).map((ticket, i) => (
                  <View key={`ticket_${i}`} style={styles.ticket}>
                    <Devis
                      data={ticket}
                      dayIndex={index}
                      weekIndex={item.week}
                      ticketIndex={i}
                      ticket={ticket}
                      index={index}
                      navigation={navigation}
                    />
                  </View>
                ))}
              </View>
            )}
            keyExtractor={(item, i) => i.toString()}
          />
        ) : (searchForValue && <Text style={styles.text}>{`${lg.search.emptyResult} " ${searchForValue} "`}</Text>) || null }
      </View>
    </View>
  );
};

SearchResults.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  languageReducer: PropTypes.objectOf(PropTypes.any).isRequired,
  calendarReducer: PropTypes.objectOf(PropTypes.any).isRequired,
};

// eXPORT:

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
