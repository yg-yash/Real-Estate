import { StyleSheet } from 'react-native';
import config from 'app/config/styles';

export default StyleSheet.create({
  headerContainer: {
    borderRadius: 10,
    height: 110,
    backgroundColor: config.color.COLOR_PRIMARY_ICON,
  },
  headerTitle: {
    fontSize: 20,
    lineHeight: 27,
    color: 'white',
    fontFamily: config.fonts.FONT_BOLD,
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 10,
    paddingHorizontal: 20,
  },
  headingText: {
    marginTop: 15,
    marginBottom: 20,
    fontSize: 18,
    lineHeight: 23,
    fontFamily: config.fonts.FONT_BOLD,
  },
  card: {
    flex: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
    borderWidth: 0,
    marginHorizontal: 0,
    borderRadius: 10,
  },
  paymentText: {
    fontSize: 15,
    lineHeight: 19,
    color: config.color.COLOR_PRIMARY_ICON,
    fontFamily: config.fonts.FONT_BOLD,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
  },
  paymentCard: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: config.color.COLOR_PRIMARY_ICON,
    minWidth: 70,
  },
  paypal: {
    fontSize: 16,
    color: '#999999',
    fontFamily: config.fonts.FONT_BOLD_ITALIC,
  },
  payText: {
    fontSize: 16,
    color: '#999999',
    fontFamily: config.fonts.FONT_BOLD,
  },
  inputContainer: {
    flexDirection: 'row',
    height: 55,
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.12)',
    borderRadius: 10,
    marginVertical: 10,
    paddingHorizontal: 2,
  },
  inputLogo: {
    marginLeft: 15,
  },
  input: {
    marginLeft: '5%',
    flex: 1,
    fontFamily: config.fonts.FONT_REGULAR,
  },
  form: {
    marginTop: 10,
    flex: 1,
  },
  saveCard: {
    fontSize: 15,
    color: config.color.COLOR_PRIMARY_ICON,
    fontFamily: config.fonts.FONT_REGULAR,
  },
  btnContainer: {
    alignSelf: 'center',
    bottom: '-4%',
    zIndex: 5,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  btn: {
    height: 50,
    borderRadius: 10,
    backgroundColor: config.color.COLOR_PRIMARY_BUTTON,
  },
  btnTitle: {
    fontSize: 21,
    lineHeight: 27,
    textTransform: 'capitalize',
    fontFamily: config.fonts.FONT_BOLD,
  },
});
