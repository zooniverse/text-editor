import React from 'react'
import { Router, Route } from 'react-router-dom'
import { Grommet } from 'grommet'
import AppContext from 'store'
import makeInspectable from 'mobx-devtools-mst'
import { observer } from 'mobx-react'
import apiClient from 'panoptes-client/lib/api-client';
import auth from 'panoptes-client/lib/auth';
import ScrollToTop from 'helpers/scrollToTop'
import history from './history'
import './App.css'
import Home from './screens/Home'
import ProjectsIndex from './screens/ProjectsIndex'
import SubjectsIndex from './screens/SubjectsIndex'
import GroupsIndex from './screens/GroupsIndex'
import WorkflowsIndex from './screens/WorkflowsIndex'
import About from './screens/About'
import Editor from './screens/Editor'
import Header from './screens/Header'
import ModalManager from './screens/ModalManager'
import { mergedTheme } from './theme'
import {
  PROJECTS_PATH,
  WORKFLOWS_PATH,
  GROUPS_PATH,
  SUBJECTS_PATH,
  EDIT_PATH
} from 'paths'

function checkToken(store) {
  return auth.checkBearerToken().then((token) => {
    store.client.setBearerToken(token)
  })
}

function App() {
  const store = React.useContext(AppContext)
  makeInspectable(store)

  React.useEffect(() => {
    store.initialize()
    apiClient.beforeEveryRequest = () => checkToken(store)
  }, [store])


  if (!store.initialized) return null;

  return (
    <Router history={history}>
      <ScrollToTop />
      <>
        <main>
          <Grommet theme={mergedTheme}>
            <Route exact path="/" component={Home} />
            <Route path="/" component={ModalManager} />
            <Route path={"/(projects|about)"} component={Header}/>
            <Route exact path="/about" component={About} />
            <Route exact path={PROJECTS_PATH} component={ProjectsIndex}/>
            <Route exact path={WORKFLOWS_PATH} component={WorkflowsIndex}/>
            <Route exact path={GROUPS_PATH} component={GroupsIndex}/>
            <Route exact path={SUBJECTS_PATH} component={SubjectsIndex}/>
            <Route exact path={EDIT_PATH} component={Editor}/>
          </Grommet>
        </main>
      </>
    </Router>
  );
}

export { App }
export default observer(App)
