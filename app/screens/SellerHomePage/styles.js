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
    padding: 20,
  },
  card: {
    marginVertical: 10,
    borderWidth: 0,
    padding: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
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
    justifyContent: 'space-between',
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
  title: {
    fontSize: 18,
    lineHeight: 21,
    color: '#6a7bb0',
    fontFamily: config.fonts.FONT_BOLD,
  },
  backText: {
    fontSize: 16,
    color: '#6a7bb0',

    fontFamily: config.fonts.FONT_BOLD,
  },
  userName: {
    fontSize: 26,
    color: '#252e4a',
    fontFamily: config.fonts.FONT_BOLD,
    marginTop: 2,
    marginBottom: 10,
  },
  bigCard: {
    margin: 0,
    marginVertical: 15,
    height: 215,
    borderRadius: 10,
    backgroundColor: 'white',
    borderWidth: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    padding: 0,
    elevation: 3,
    overflow: 'hidden',
  },
  upperCardContainer: {
    backgroundColor: config.color.COLOR_PRIMARY_ICON,
    height: '40%',
    paddingLeft: 25,
    paddingRight: 10,
    paddingVertical: 10,
  },
  titleHeader: {
    fontSize: 18,
    color: '#bac5ff',
    fontFamily: config.fonts.FONT_REGULAR,
  },
  secondRow: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  timing: {
    fontSize: 18,
    color: 'white',
    fontFamily: config.fonts.FONT_REGULAR,
    marginLeft: 10,
  },
  cardBottomContainer: {
    height: '60%',
    paddingHorizontal: 10,
  },

  cardUserName: {
    fontSize: 18,
    color: '#252e4a',
    fontFamily: config.fonts.FONT_REGULAR,
    marginLeft: 13,
  },
  lastName: {
    fontSize: 18,
    color: '#252e4a',
    fontFamily: config.fonts.FONT_BOLD,
  },
  acceptBtnContainer: {
    flex: 1,
    marginRight: 5,
    borderRadius: 8,
  },
  acceptBtn: {
    backgroundColor: config.color.COLOR_GREEN_LABEL,
  },
  acceptBtnTitle: {
    fontSize: 14,
    color: 'white',
    fontFamily: config.fonts.FONT_REGULAR,
  },
  declineBtnContainer: {
    flex: 0.6,
    marginRight: 5,
    borderRadius: 8,
    marginLeft: 5,
  },
  declineBtn: {
    backgroundColor: '#e3e4f1',
  },
  declineTitleStyle: {
    fontSize: 14,
    color: config.color.COLOR_GREY_LABEL,
    fontFamily: config.fonts.FONT_REGULAR,
  },
});
