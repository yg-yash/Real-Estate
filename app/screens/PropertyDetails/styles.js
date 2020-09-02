import { StyleSheet } from 'react-native';

import config from 'app/config/styles';
export default StyleSheet.create({
  dragText: {
    fontSize: 15,
    color: config.color.COLOR_GREY_LABEL,
    fontFamily: config.fonts.FONT_BOLD,
    alignSelf: 'center',
  },
  propertyDetailsText: {
    marginTop: 20,
    fontSize: 21,
    color: config.color.COLOR_LABEL,
    fontFamily: config.fonts.FONT_BOLD,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  propertyNameText: {
    fontSize: 21,
    color: config.color.COLOR_LABEL,
    fontFamily: config.fonts.FONT_BOLD,
  },
  propertyPriceText: {
    fontSize: 21,
    color: config.color.COLOR_GREEN_LABEL,
    fontFamily: config.fonts.FONT_BOLD,
  },
  bottomSheet: {
    backgroundColor: 'white',
    height: '100%',
    paddingHorizontal: 20,
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  itemName: {
    fontSize: 14,
    color: config.color.COLOR_GREY_LABEL,
    fontFamily: config.fonts.FONT_SEMI_BOLD,
    marginLeft: 10,
  },
  detailsItemBold: {
    fontSize: 16,
    color: config.color.COLOR_LABEL,
    fontFamily: config.fonts.FONT_BOLD,
  },
  detailsItem: {
    fontSize: 15,
    color: config.color.COLOR_GREY_LABEL,
    fontFamily: config.fonts.FONT_REGULAR,
    marginLeft: 10,
  },
  detailsItemRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  descriptionDetails: {
    fontSize: 15,
    color: config.color.COLOR_GREY_LABEL,
    fontFamily: config.fonts.FONT_REGULAR,
    marginTop: 10,
  },
  btnContainer: {
    alignSelf: 'center',

    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    marginTop: 50,
    marginBottom: 20,
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
  aboutContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarContainer: {
    marginTop: 30,
  },
  username: {
    fontSize: 17,
    lineHeight: 21,
    marginTop: 10,
    fontFamily: config.fonts.FONT_BOLD,
  },
  onlineButton: {
    position: 'absolute',
    right: 0,
    top: 0,
    borderWidth: 1,
    borderColor: config.color.COLOR_GREEN_LABEL,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 40,
  },
  onlineText: {
    fontSize: 12,
    color: config.color.COLOR_GREEN_LABEL,
  },
  contactMeBtn: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: config.color.COLOR_PRIMARY_ICON,
    borderRadius: 10,
  },
  contactMeTitle: {
    fontSize: 19,
    color: config.color.COLOR_PRIMARY_ICON,
    fontFamily: config.fonts.FONT_BOLD,
  },
  contactMeBtnContainer: {
    alignSelf: 'center',
    width: '100%',
    marginVertical: 20,
  },
  moreDetailsContainer: {
    flex: 1,

    borderWidth: 1,
    borderColor: config.color.COLOR_PRIMARY_ICON,
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 12,
    marginBottom: 30,
  },
  moreDetailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  moreDetailsHeading: {
    fontSize: 16,
    color: config.color.COLOR_GREY_LABEL,
    fontFamily: config.fonts.FONT_REGULAR,
  },
  moreDetailsBoldHeading: {
    fontSize: 18,
    fontFamily: config.fonts.FONT_BOLD,
  },
  line: {
    height: 1,
    marginVertical: 20,
    backgroundColor: config.color.COLOR_GREY_LABEL,
  },
  moreDetailsPara: {
    fontSize: 14,
    color: config.color.COLOR_GREY_LABEL,
    fontFamily: config.fonts.FONT_REGULAR,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  outerhighlightCircle: {
    width: 159,
    height: 159,
    borderRadius: 80,

    backgroundColor: 'rgba(255,255,255,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  outerwhiteCircle: {
    width: 119,
    height: 119,
    borderRadius: 80,
    backgroundColor: 'rgba(255,255,255,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  outercolorCircle: {
    width: 85,
    height: 85,
    borderRadius: 43,
    backgroundColor: '#2bacfc',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
