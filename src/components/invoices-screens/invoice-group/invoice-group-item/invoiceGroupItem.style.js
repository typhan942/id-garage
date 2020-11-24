// core
import { StyleSheet } from 'react-native';
// colors
import colors from '../../../../assets/css/style-colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  main: {
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    fontFamily: 'GothamBold',
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
  invoiceDetail: {
    paddingHorizontal: 10,
  },
});

export default styles;
