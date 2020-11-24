// core
import { StyleSheet } from 'react-native';
// colors
import colors from '../../../assets/css/style-colors';

const styles = StyleSheet.create({
  container: {
    flex: 2,
  },
  inner: {
    flex: 1,
    padding: 20,
    borderRadius: 6,
    backgroundColor: colors.white,
    justifyContent: 'flex-end',
  },
  title: {
    flex: 10,
    fontSize: 18,
    fontWeight: '600',
    color: colors.slateGrey,
  },
  inputLabel: {
    fontSize: 16,
    color: colors.black,
    fontWeight: '600',
  },
  form: {
    flex: 80,
    flexShrink: 1,
    marginTop: 20,
  },
  input: {
    marginTop: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: colors.veryLightBlue,
    color: colors.black,
    borderRadius: 8,
  },
  submitBtn: {
    alignItems: 'center',
    flexShrink: 1,
    marginTop: 30,
    padding: 10,
    borderRadius: 5,
    backgroundColor: colors.dark,
  },
  submitText: {
    color: colors.white,
    fontSize: 18,
  },
});

export default styles;
