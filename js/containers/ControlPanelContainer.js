import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ControlPanel from '../components/ControlPanel'

import * as drawerActions from '../actions/drawer'
import * as navigationActions  from '../actions/navigation'

function stateToProps(state) {

    const { navigationState, drawer } = state;
    return { navigationState, drawer };
}

function dispatchToProps(dispatch) {

    const actions = Object.assign({}, { ...drawerActions, ...navigationActions });
    return bindActionCreators(actions, dispatch)
}

// export default connect(stateToProps, dispatchToProps)(ControlPanel)
export default ControlPanel
