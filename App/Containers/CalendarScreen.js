import React, { Component } from 'react';
import { ScrollView, Text, KeyboardAvoidingView, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import Calendar from 'react-native-calendar';
import moment from 'moment';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
// import styles from './Styles/CalendarScreenStyle'

const customDayHeadings = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const customMonthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May',
  'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#f7f7f7',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

class CalendarScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedDate: moment().format(),
    };
  }
  render () {
    return (
      <View style={styles.container}>
        <Calendar
          ref="calendar"
          eventDates={['2016-07-03', '2016-07-05', '2016-07-28', '2016-07-30']}
          events={[{ date: '2017-09-04', hasEventCircle: { backgroundColor: 'powderblue' } }]}
          scrollEnabled
          showControls
          dayHeadings={customDayHeadings}
          monthNames={customMonthNames}
          titleFormat={'MMMM YYYY'}
          prevButtonText={'Prev'}
          nextButtonText={'Next'}
          onDateSelect={(date) => this.setState({ selectedDate: date })}
          onDateLongPress={(date) => this.setState({ selectedDate: date })}
          onTouchPrev={(e) => console.log('onTouchPrev: ', e)}
          onTouchNext={(e) => console.log('onTouchNext: ', e)}
          onSwipePrev={(e) => console.log('onSwipePrev: ', e)}
          onSwipeNext={(e) => console.log('onSwipeNext', e)}
        />
        <Text>Selected Date: edit for git hub {moment(this.state.selectedDate).format('MMMM DD YYYY')}</Text>
      </View>
    )
  }
}
const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarScreen)
