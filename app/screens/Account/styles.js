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

  topCard: {
    backgroundColor: config.color.COLOR_PRIMARY_ICON,
    height: 120,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  gradientCard: {
    height: 100,
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    padding: 10,
  },
  gradientCardText: {
    fontSize: 13,
    lineHeight: 17,
    fontFamily: config.fonts.FONT_SEMI_BOLD,
    color: 'white',
  },
  gradientCardBoldText: {
    fontSize: 35,
    lineHeight: 45,
    fontFamily: config.fonts.FONT_BOLD,
    color: 'white',
    alignSelf: 'flex-end',
    bottom: 10,
    right: 10,
    position: 'absolute',
  },
  gradientRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
  headingsText: {
    fontSize: 18,
    lineHeight: 23,
    marginTop: 20,
    marginBottom: 10,
    fontFamily: config.fonts.FONT_BOLD,
    color: config.color.COLOR_PRIMARY_ICON,
  },
  addBtn: {
    marginTop: 30,
    borderRadius: 5,
    backgroundColor: config.color.COLOR_PRIMARY_ICON,
    height: 50,
  },
  bigCard: {
    margin: 0,

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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  smallcard: {
    borderWidth: 0,
    padding: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 3,
    height: 71,
    borderRadius: 10,
    paddingHorizontal: 10,
    margin: 0,
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
  smallCardrow: {
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
  title: {
    fontSize: 18,
    lineHeight: 21,
    color: '#6a7bb0',
    fontFamily: config.fonts.FONT_BOLD,
    marginLeft: 10,
    marginBottom: 10,
  },
});
