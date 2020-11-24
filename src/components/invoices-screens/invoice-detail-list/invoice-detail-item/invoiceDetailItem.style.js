// core
import { StyleSheet } from 'react-native';
// colors
import colors from '../../../../assets/css/style-colors';

const styles = StyleSheet.create({
  container: {
    marginBottom: 2,
    borderRadius: 6,
    backgroundColor: colors.paleGrey,
  },
  main: {
    paddingVertical: 10,
    flexDirection: 'row',
  },
  name: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    fontSize: 13,
    color: colors.dark,
    fontFamily: 'GothamBold',
    textTransform: 'uppercase',
  },
  nameSub: {
    fontSize: 13,
    fontFamily: 'GothamMedium',
    color: colors.dark,
  },
  toggleBtn: {
    marginLeft: 'auto',
    borderRadius: 50,
  },
  price: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderTopWidth: 1,
    borderTopColor: colors.WhiteDark,
  },
  priceText: {
    marginRight: 40,
    marginTop: 5,
    fontSize: 13,
    fontFamily: 'GothamBook',
    color: colors.dark,
  },
  priceNumber: {
    marginRight: 40,
    marginTop: 5,
    fontSize: 13,
    fontFamily: 'GothamMedium',
    color: colors.dark,
  },
  alertBtn: {
    flexDirection: 'row',
    marginLeft: 'auto',
  },
  alertIcon: {
    width: 22,
    height: 22,
    marginRight: 10,
  },
  alertText: {
    textDecorationLine: 'underline',
    color: colors.coral,
    fontSize: 13,
    paddingTop: 4,
    fontFamily: 'GothamMedium',
  },
});

export default styles;
