import{Text,View ,SafeAreaView} from 'react-native'
import Home from './src/screen/Home';
import Project from './src/screen/ProjectFile';
import Service from './src/screen/UpdateService'
import Login from './src/screen/Login';


const App =()=>{
  return (
    <SafeAreaView style={{flex:1,backgroundColor:"#fff"}}>
      <Home />

    </SafeAreaView>
  );
}

export default App;
