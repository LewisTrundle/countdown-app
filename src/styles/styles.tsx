import { StyleSheet, Dimensions } from 'react-native';
import { counterEvent } from 'react-native/Libraries/Performance/Systrace';

const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width,
};
const colors = {
  black: '#1e1e1e',
  grey: '#3F3B4A',
  white: '#F6F7FC',
  blue: '#1397b5',
  pink: '#E63462'
};

const countdownCard = {
  cardHeight: 110,
  cardWidth: dimensions.fullWidth - 30,
  imageSize: 95,
  cornerRadius: 10,
  bottomMargin: 30,
}


export const stopwatchOptions = {
  container: {
    alignItems: 'center',
  },
  text: {
    fontSize: 50,
    color: colors.grey,
  },
};



const styles = StyleSheet.create({
  bgContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.white,
    width: dimensions.fullWidth,
    height: dimensions.fullHeight,
    padding: 10,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    marginTop: 10
  },


  /*   COUNTDOWN SCREEN STYLES   */
  countdownCardContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: countdownCard.cardWidth,
    height: countdownCard.cardHeight,
    backgroundColor: colors.pink,
    borderRadius: countdownCard.cornerRadius,
    marginBottom: countdownCard.bottomMargin,
  },
  countdownCardImageContainer: {
    backgroundColor: colors.pink,
    width: countdownCard.imageSize,
    aspectRatio: 1,
    borderWidth: 2,
    marginLeft: 10,
    borderRadius: 10,
  },
  countdownCardImage: {
    width: '100%',
    height: '100%'
  },
  countdownCardBodyContainer: {
    display: 'flex',
  },
  countdownCardText: {
    color: colors.white,
  },
  countdownCardTitle: {
    fontSize: 20
  },
  countdownCardCounterContainer: {
    marginLeft: 'auto'
  },

  /*   ADDCOUNTDOWN SCREEN STYLES   */
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  iconTextCombo: {
    alignItems: 'center',
  },

  titleIconContainer: {
    flexDirection: 'row',
  },
  inputContainer: {
    width: "100%",
    marginBottom: 40,
  },
  titleInputContainer: {
    width: '75%',
    marginTop: "auto",
    top: 25,
  },
  imageContainer: {
    backgroundColor: colors.blue,
    width: '25%',
    aspectRatio: 1,
  },

  /*   COUNTDOWN DETAILS SCREEN   */
  countdownTimerContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  timeUnit: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  yearUnit: {
    backgroundColor: "red",
    borderRadius: 15,
    color: "white",
  },
  dayUnit: {
    backgroundColor: "#3498db",
    borderRadius: 15,
    color: "white",
  },
  hourUnit: {
      backgroundColor: "#27ae60",
      borderRadius: 15,
      color: "white",
  },
  minuteUnit: {
      backgroundColor: "#f39c12",
      borderRadius: 15,
      color: "white",
  },
  secondUnit: {
      backgroundColor: "#9b59b6",
      borderRadius: 15,
      color: "white",
  },
  timeSeparator: {
    fontSize: 24,
    fontWeight: "bold",
    marginHorizontal: 5,
  },
  timetitle: {
    fontSize: 17,
    padding: 10,
    paddingRight: 19,
    fontWeight: "bold",
  },


  /*   STOPWATCH SCREEN STYLES   */
  stopwatchButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },


  /*   MODAL STYLING   */
  modelContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modelContent: {
    height: '60%',
    width: "70%",
    backgroundColor: '#25292e',
    borderRadius: 10,
  },
  modalTitleContainer: {
    height: '20%',
    backgroundColor: '#464C55',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  modalTitle: {
    color: '#fff',
    fontSize: 16,
  },
  modalBodyContainer: {
    height: '70%',
    flexDirection: 'column',
    backgroundColor: colors.white,
  },
  listContainer: {
    flex: 1,
    backgroundColor: colors.blue,
    justifyContent: 'space-between',
  },
  modalListButtons: {
    height: 67,
    borderColor: "black",
    borderWidth: 2,
    alignItems: "center",
    marginBottom: "auto",
    justifyContent: "center",
  },
  modalListButtonsText: {
    fontSize: 20,
  },
  modalFooterContainer: {
    height: '10%',
    backgroundColor: '#464C55',
  },


  ///*     CORE STYLING COMPONENTS     *///

  /*   FLEX ATTRIBUTES   */
  flexColumn: {
    flex: 1,
    flexDirection: 'column',
  },
  flexRow: {
    flex: 1,
    flexDirection: 'row',
  },

  /*   SIZING ATTRIBUTES   */
  fullScreen: {
    width: dimensions.fullWidth,
    height: dimensions.fullHeight,
  },
  fullScreenWidth: {
    width: dimensions.fullWidth,
  },
  fullScreenHeight: {
    height: dimensions.fullHeight,
  },
  fullSize: {
    width: "100%",
    height: "100%",
  },
  fullWidth: {
    width: "100%",
  },
  fullHeight: {
    height: "100%",
  },
});

export default styles;