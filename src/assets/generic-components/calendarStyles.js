import { Dimensions, StyleSheet } from 'react-native';
import colors from '../css/style-colors';

const styles = StyleSheet.create({
  root: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
    height: 'auto',
    backgroundColor: colors.white,
    borderRadius: 9,
  },
  row: {
    flex: 1,
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: colors.veryPaleGrey,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  cell: {
    flex: 1,
    flexDirection: 'row',
  },
  calendar: {
    width: '100%',
    backgroundColor: colors.veryPaleGrey,
    padding: 0,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  weekDayName: {
    width: 50,
    height: 50,
    margin: 0,
  },
  dayItem: {
    width: Math.round((Dimensions.get('window').width - 20) / 7),
    height: 36,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLight: {
    color: colors.lightGreyBlue,
  },
  textLightHeader: {
    color: colors.lightGreyBlue,
    fontFamily: 'GothamMedium',
    fontSize: 18,
  },
  textLightFont: {
    fontSize: 16,
    fontFamily: 'GothamMedium',
  },
  textLightFontB: {
    fontSize: 16,
    fontFamily: 'GothamBook',
  },
  points: {
    justifyContent: 'center',
    flexDirection: 'row',
    paddingTop: 2,
  },
  calendarOpener: {
    width: Dimensions.get('window').width,
    height: 20,
    textAlign: 'center',
    backgroundColor: colors.white,
    marginTop: -20,
  },
  header: {
    flex: 1,
    width: '100%',
    height: 50,
    marginTop: 40,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  headerText: {
    fontSize: 18,
    fontFamily: 'GothamBold',
    marginTop: -14,
  },
  flash: {
    width: 50,
    height: '100%',
  },
  text: {
    color: colors.dark,
    fontWeight: '500',
    fontSize: 22,
    marginLeft: 20,
  },
  textR: {
    position: 'relative',
    right: 10,
  },
});

export default styles;
