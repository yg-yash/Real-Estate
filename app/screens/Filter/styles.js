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
  addContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 37,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: config.color.COLOR_PRIMARY_ICON,
    padding: 10,
  },
  addText: {
    fontSize: 16,
    lineHeight: 17,
    color: config.color.COLOR_PRIMARY_ICON,
    marginLeft: 10,
    fontFamily: config.fonts.FONT_REGULAR,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 37,
    borderRadius: 10,
    backgroundColor: config.color.COLOR_PRIMARY_ICON,
    padding: 10,
    margin: 0,
    marginRight: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    minWidth: 98,
    borderWidth: 0,
  },
  itemText: {
    fontSize: 16,
    lineHeight: 19,
    color: config.color.COLOR_WHITE,
    marginRight: 10,
    fontFamily: config.fonts.FONT_REGULAR,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  smallCard: {
    height: 80,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    borderWidth: 0,
    borderRadius: 10,
    margin: 0,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    minWidth: 100,
  },
  smallCardunselected: {
    height: 80,
    minWidth: 100,
    marginHorizontal: 10,
    borderWidth: 0,
    borderRadius: 10,
    margin: 0,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
  },
  optionText: {
    fontSize: 15,
    lineHeight: 19,
    color: config.color.COLOR_PRIMARY_ICON,
    marginTop: 5,
    fontFamily: config.fonts.FONT_REGULAR,
  },
  sliderThumb: {
    height: 20,
    width: 20,
    backgroundColor: config.color.COLOR_PRIMARY_ICON,
    borderWidth: 3,
    borderColor: 'white',
    elevation: 20,
  },
  price: {
    marginTop: 10,
    fontSize: 16,
    lineHeight: 19,
    fontFamily: config.fonts.FONT_BOLD,
  },
  roomItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 34,
    borderRadius: 10,
    backgroundColor: config.color.COLOR_PRIMARY_ICON,
    padding: 10,
    margin: 0,
    marginRight: 15,
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
  roomItemUnselected: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 34,
    borderRadius: 10,
    backgroundColor: 'white',
    padding: 10,
    margin: 0,
    marginRight: 15,
    borderWidth: 0,
    borderColor: config.color.COLOR_PRIMARY_ICON,
  },
  itemunselectedText: {
    fontSize: 14,
    lineHeight: 17,
    color: config.color.COLOR_PRIMARY_ICON,
    marginLeft: 10,
    fontFamily: config.fonts.FONT_REGULAR,
  },
  btnContainer: {
    width: '70%',
    alignSelf: 'center',
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },

  btnTitle: {
    fontSize: 19,
    lineHeight: 24,
    fontFamily: config.fonts.FONT_BOLD,
  },
  btn: {
    backgroundColor: config.color.COLOR_GREEN_LABEL,
  },
  itemRows: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
    flex: 1,
  },
});
