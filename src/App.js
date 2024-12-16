import './App.css';
import Task1 from './components/task1'
import Task2 from './components/task2'
import Task3 from './components/task3'
import Task4 from './components/task4'
import Task5 from './components/task5'
import Task6 from './components/task6'
import Task7 from './components/task7'
import Task8 from './components/task8'
import Task9 from './components/task9'
import Task10 from './components/task10'
import Task11 from './components/task11'
import Task12 from './components/task12'
import Task13 from './components/task13'
import Task14 from './components/task14'
import Task15 from './components/task15'
import Task16 from './components/task16'
import Task17 from './components/task17'
import Task18 from './components/task18'


// Images
import UserProfileImage from './components/images/amro.jpeg'


function App() {
  // const userIsLoggedIn = true;
  return (
    <div>

      <Task1  /> <hr  />
      <Task2  /> <hr  />
      <Task3  /> <hr  />
      <Task4  /> <hr  />
      <Task5  /> <hr  />
      <Task6  /> <hr  />
      <Task7  /> <hr  />
      <Task8  /> <hr  />
      <Task9  /> <hr  />
      <Task10  location="Aqaba"/> <hr  />
      <Task11  work="TRAINEE"/> <hr  />
      <Task12 /> <hr  />
      <Task13 /> <hr  />
      <Task14 /> <hr  />
      <Task15  isLoggedIn={true}/> <hr  />
      <Task16  isSuccess={false}/> <hr  />
      <Task17
      name="AmroAlWageei"
      email="amroalwageei@gmail.com"
      avatar={UserProfileImage}
      /> <hr  />
      <Task18  title="My Website"/> <hr  />






    </div>
  );
}

export default App;
