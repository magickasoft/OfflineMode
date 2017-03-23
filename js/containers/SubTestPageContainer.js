import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { graphql, compose } from 'react-apollo'

import SubTestPage from '../components/SubTestPage'
import offlineHOC from '../offlineHOC'
// import { getUserByIdAllFields} from '../queries/index'

import * as drawerActions from '../actions/drawer'
import * as navigationActions  from '../actions/navigation'

// const  SubTestPageOfflineHOC = offlineHOC( getUserByIdAllFields, {
//     options: ({ u_id }) => {
//         return { variables: { u_id: u_id } }
//     }
// })(SubTestPage);

function stateToProps(state) {
    const { navigationState, drawer } = state;
    return { navigationState, drawer};
}

function dispatchToProps(dispatch) {

    const actions = Object.assign({}, { ...drawerActions, ...navigationActions });
    return bindActionCreators(actions, dispatch)
}

export default connect(stateToProps, dispatchToProps)(SubTestPage)
