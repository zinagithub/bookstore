import {CHANGE_FILTER} from '../actions/index'

const changeFilter = (state = 'All', action)  => {
    switch (action.type) {
    case CHANGE_FILTER:
        return action.filterName;
    default:
      return state
  }
}
export default changeFilter;