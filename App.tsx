import{Text,View ,SafeAreaView} from 'react-native'
import Home from './src/screen/Home';
import Project from './src/screen/ProjectFile';
import Service from './src/screen/UpdateService'


const App =()=>{
  return (
    <SafeAreaView style={{flex:1,backgroundColor:"#fff"}}>
      <Service />

    </SafeAreaView>
  );
}

export default App;
