import React, { createContext, Component } from 'react'

export const ToggleFormContext = createContext();
   
class ToggleFormContextProvider extends Component {
    state = {
        toggleAddTaskForm: false
    }
    toggleForm = () => {
        this.setState({ toggleAddTaskForm: !this.state.toggleAddTaskForm});
    }

    render() {
        return (
            <ToggleFormContext.Provider value={{...this.state, toggleForm: this.toggleForm}}>
                {this.props.children}
            </ToggleFormContext.Provider>
        )
    }
}

export default ToggleFormContextProvider

