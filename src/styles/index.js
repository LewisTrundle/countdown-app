import { StyleSheet } from 'react-native';
import Colors from './theme/colours';
import Metrics from './theme/spacing';



const countdownCard = {
  cardHeight: 110,
  cardWidth: Metrics.screenWidth - 30,
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
    color: Colors.grey,
  },
};


export const styles = StyleSheet.create({
  bgContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.white,
    width: Metrics.screenWidth,
    height: Metrics.screenHeight,
    padding: 10,
  },


  /*   COUNTDOWN SCREEN STYLES   */
  countdownCardContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: countdownCard.cardWidth,
    height: countdownCard.cardHeight,
    backgroundColor: Colors.pink,
    borderRadius: countdownCard.cornerRadius,
    marginBottom: countdownCard.bottomMargin,
  },
  countdownCardImageContainer: {
    backgroundColor: Colors.pink,
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
    color: Colors.white,
  },
  countdownCardTitle: {
    fontSize: 20
  },
  countdownCardCounterContainer: {
    marginLeft: 'auto'
  },
  align: {
    alignItems: 'center',
  },



  /*   ADDCOUNTDOWN SCREEN STYLES   */
  addCountdownBgContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: Metrics.screenWidth,
    height: Metrics.screenHeight,
    backgroundColor: Colors.white,
    padding: 10,
  },
  addCountdownImageContainer: {
    position: 'absolute',
    right: 10,
    backgroundColor: Colors.blue,
    width: 130,
    aspectRatio: 1,
    zIndex: 10
  },
  addCountdownTextInputsContainer: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: "space-between",
    width: Metrics.fullWidth,
  },
  addCountdownTitleInputContainer: {
    width: '65%',
    top: "30%",
  },
  addCountdownButtonsContainer: {
    flex: 5,
    flexDirection: 'column',
    justifyContent: "space-evenly",
    width: Metrics.fullWidth,
  },
  addCountdownButtonRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  iconWithTextContainer: {
    width: "40%",
    alignItems: 'center',
  },


  /*   IMAGE STYLES   */
  fullSize: {
    width: "100%",
    height: "100%",
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
    backgroundColor: Colors.white,
  },
  listContainer: {
    flex: 1,
    backgroundColor: Colors.blue,
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
});