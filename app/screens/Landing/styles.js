import { StyleSheet } from 'react-native';
import config from 'app/config/styles';

export default StyleSheet.create({
  purpleImage: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    paddingHorizontal: 10,
    alignItems: 'flex-start',
    paddingTop: 50,
  },
  whiteHouse: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0.2,
  },
  container: {
    flex: 0.3,
    backgroundColor: 'white',
    zIndex: 100,
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 10,
    marginBottom: 150,
  },
  logoText: {
    fontSize: 20,
    letterSpacing: 3,
    lineHeight: 23,
    color: config.color.COLOR_WHITE,
    fontFamily: config.fonts.FONT_SEMI_BOLD,
    textTransform: 'uppercase',
  },
  logoCaption: {
    fontSize: 18,
    letterSpacing: 3,
    lineHeight: 23,
    color: config.color.COLOR_WHITE,
    fontFamily: config.fonts.FONT_BOLD,
    textTransform: 'capitalize',
    marginTop: 40,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    top: '-20%',
    paddingHorizontal: 10,
    zIndex: 110,
  },
  card: {
    zIndex: 2,
    flex: 1,
    padding: 0,
    height: '85%',
    marginHorizontal: 5,
    borderWidth: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    borderRadius: 4,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  cardText: {
    fontSize: 16,

    lineHeight: 19,
    fontFamily: config.fonts.FONT_REGULAR,
    textAlign: 'center',
  },
  btnContainer: {
    width: '93%',
    top: '-30%',
    alignSelf: 'center',
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
    height: 44,
    backgroundColor: config.color.COLOR_GREEN_LABEL,
    borderRadius: 10,
  },
  btnTitle: {
    fontSize: 18,
    lineHeight: 23,
    color: config.color.COLOR_WHITE,
    fontFamily: config.fonts.FONT_BOLD,
  },
  selectIcon: {
    position: 'absolute',
    top: '30%',
    right: 0,
    left: 0,
    bottom: 0,
    zIndex: 100,
  },
});
