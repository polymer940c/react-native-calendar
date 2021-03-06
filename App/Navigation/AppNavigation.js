import { StackNavigator } from 'react-navigation'
import CalendarScreen from '../Containers/CalendarScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  CalendarScreen: { screen: CalendarScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'CalendarScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
