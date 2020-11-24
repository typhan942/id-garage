// core
import { StyleSheet } from 'react-native';
// colors
import colors from '../../../assets/css/style-colors';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    width: '100%',
    backgroundColor: colors.white,
  },
  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  periodInputWrap: {
    width: '27%',
    marginRight: 10,
  },
  periodTypeInputWrap: {
    width: '54%',
    marginRight: 10,
  },
  submitBtn: {
    alignItems: 'center',
    paddingTop: 13,
    width: '14%',
    borderRadius: 5,
    backgroundColor: colors.black,
  },
  submitBtnText: {
    color: colors.white,
    fontFamily: 'GothamMedium',
    fontSize: 15,
  },
  titleSelect: {
    color: colors.slateGrey,
    fontFamily: 'GothamMedium',
    fontSize: 13,
  },
  picker: {
    color: colors.coral,
  },
});

export default styles;
