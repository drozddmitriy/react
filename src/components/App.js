import React from 'react';
import MonthItem from "./MonthItem";
import {API_URL, MONTHS} from "../utils/constants";

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      users: [],
      usersWillshow: []
    }
  }

  async componentDidMount() {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      this.setState({
        users: data
      })
    } catch (error) {
      console.log(error)
    }
  }

  addUsersWillShow = users => {
    this.setState({
      usersWillshow: users
    })
  }

  removeUsersWillShow = () => {
    this.setState({
      usersWillshow: []
    })
  }

  filterUsers(users, month_index) {
    return users.filter(user => {
      return new Date(user.dob).getMonth() === month_index;
    });
  }

  render() {
    return (
      <div className="conteiner m-3 p-3">
        <div className="row">
          <div className="col-9">
            <div className="row mb-4">

              {MONTHS.map((month, index) => {
                return(
                  <div className="col-6 mb-4" key={index}>
                    <MonthItem month={month}
                      users={this.filterUsers(this.state.users, index)}
                      addUsersWillShow={this.addUsersWillShow}
                      removeUsersWillShow={this.removeUsersWillShow} />
                  </div>
                )
              })}
              
          </div>
          </div>
          <div className="col-3 d-flex justify-content-center">
            <div className="conteiner">
              <span className="text-primary">Users:</span>
              {this.state.usersWillshow.map(user => {
                return(
                  <div className="row-flex" key={user.id}>
                    <p>{user.firstName + " " + user.lastName}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
