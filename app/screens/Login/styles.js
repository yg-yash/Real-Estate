import { StyleSheet } from 'react-native';
import config from 'app/config/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  login: {
    padding: 8,
  },
  purpleImage: {
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    flex: 1,
    paddingHorizontal: 10,
    alignItems: 'flex-start',
    paddingTop: 50,
  },
  logoText: {
    fontSize: 20,
    letterSpacing: 3,
    lineHeight: 23,
    color: config.color.COLOR_WHITE,
    fontFamily: config.fonts.FONT_SEMI_BOLD,
    textAlign: 'center',
    textTransform: 'uppercase',
    alignSelf: 'center',
    marginTop: 40,
  },
  whiteHouse: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0.2,
  },
  card: {
    backgroundColor: 'white',
    flex: 1,
    top: '-10%',

    marginHorizontal: 20,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    borderWidth: 0,
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  tab: {
    fontSize: 23,
    letterSpacing: 3,
    lineHeight: 27,
    color: config.color.COLOR_LABEL,
    fontFamily: config.fonts.FONT_BOLD,
    textTransform: 'uppercase',
    marginHorizontal: 10,
    paddingBottom: 10,
    borderBottomWidth: 2,

    borderColor: config.color.COLOR_LABEL,
  },
  unselectedTab: {
    fontSize: 23,
    letterSpacing: 1,
    lineHeight: 27,
    color: config.color.COLOR_DISABLED,

    fontFamily: config.fonts.FONT_BOLD,
    textTransform: 'uppercase',
    marginHorizontal: 10,
    paddingBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    height: 46,
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.12)',
    borderRadius: 5,
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
    marginTop: 30,
    flex: 1,
    padding: 20,
  },
  agreeText: {
    fontSize: 16,
    lineHeight: 20,
    color: config.color.COLOR_SECONDARY_LABEL,
    fontFamily: config.fonts.FONT_REGULAR,
    textAlign: 'center',
    marginTop: 25,
    marginBottom: 20,
  },
  underline: {
    textDecorationLine: 'underline',
    color: config.color.COLOR_SECONDARY_LABEL,
  },
  btnContainer: {
    alignSelf: 'center',
    bottom: '-4%',
    zIndex: 5,
    width: '60%',
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
    fontSize: 23,
    lineHeight: 27,
    textTransform: 'capitalize',
    fontFamily: config.fonts.FONT_BOLD,
  },
  forgotText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#4967c0',
    fontFamily: 'Cerebri Sans',
    marginTop: 20,
  },
  socialIconRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  icon: {
    height: 60,
    width: 59,
    borderWidth: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  checkContainer: {
    borderRadius: 0,
    borderWidth: 0,
    backgroundColor: 'transparent',
    marginLeft: 0,
  },
  checkTitle: {
    fontSize: 14,
    lineHeight: 19,
    color: config.color.COLOR_DISABLED,
  },
});

export default styles;
