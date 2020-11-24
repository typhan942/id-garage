// core
import { StyleSheet } from 'react-native';
// colors
import colors from '../../../assets/css/style-colors';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    borderRadius: 6,
    backgroundColor: colors.white,
    shadowColor: colors.lightGreyBlue,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  main: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  detail: {
    overflow: 'hidden',
  },
  detailItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: colors.veryPaleGrey,
  },
  name: {
    marginLeft: 20,
    fontSize: 13,
    fontFamily: 'GothamBold',
    textTransform: 'uppercase',
    color: colors.dark,
  },
  toggleBtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 'auto',
    borderRadius: 50,
    backgroundColor: colors.WhiteDark,
    width: 45,
    height: 45
  },
  price: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 15,
    // padding: 15,
    borderTopWidth: 2,
    borderTopColor: colors.veryPaleGrey,
  },
  priceText: {
    fontSize: 14,
    fontFamily: 'GothamBold',
    color: colors.dark,
  },
});

export default styles;
