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
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 5,
  },
  card: {
    margin: 10,
    borderWidth: 0,
    padding: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
    height: 71,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginLeft: 10,
    justifyContent: 'center',
    overflow: 'hidden',
    marginTop: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: 14,
    lineHeight: 18,
    color: '#252e4a',
    fontFamily: config.fonts.FONT_SEMI_BOLD,
  },
  time: {
    fontSize: 11,
    lineHeight: 13,
    color: config.color.COLOR_GREY_LABEL,
    fontFamily: config.fonts.FONT_REGULAR,
    marginLeft: 10,
  },
  message: {
    fontSize: 14,
    lineHeight: 17,
    color: '#6a7bb0',
    fontFamily: config.fonts.FONT_REGULAR,
    marginTop: 5,
  },
});
