import {Switch, Route} from 'react-router-dom'

import Home from './Components/Home'

import Projects from './Components/Projects'

import Certificates from './Components/Certificates'

import MinorProjects from './Components/MinorProjects'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/projects" component={Projects} />
    <Route exact path="/certificates" component={Certificates} />
    <Route exact path="/minor-projects" component={MinorProjects} />
  </Switch>
)

export default App
