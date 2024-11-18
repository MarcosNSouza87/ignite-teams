import { StatusBar } from 'expo-status-bar';
import * as RN from 'react-native';
import Groups from './src/screens/Groups';

export default function App() {
	return (
		<RN.SafeAreaView style={styles.container}>
			<StatusBar style="auto" />
      <Groups />
		</RN.SafeAreaView>
	);
}

const styles = RN.StyleSheet.create({
	container: {
		flex: 1,
	},
});
