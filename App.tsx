import{Text,View ,SafeAreaView} from 'react-native'
import Home from './src/screen/Home';
import Project from './src/screen/ProjectFile';


const App =()=>{
  return (
    <SafeAreaView style={{flex:1,backgroundColor:"#fff"}}>
      <Project />

    </SafeAreaView>
  );
}

export default App;
