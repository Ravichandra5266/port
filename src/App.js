import {Switch, Route} from 'react-router-dom'

import Home from './Components/Home'

import Projects from './Components/Projects'

import Certificates from './Components/Certificates'

import MinorProjects from './Components/MinorProjects'

import Experience from './Components/Experience'

import About from './Components/About'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/projects" component={Projects} />
    <Route exact path="/certificates" component={Certificates} />
    <Route exact path="/minor-projects" component={MinorProjects} />
    <Route exact path="/experience" component={Experience} />
    <Route exact path="/about" component={About} />
  </Switch>
)

export default App
