import React from "react";

class MonthItem extends React.Component {

  getClassLink(users_count) {
    if(users_count >= 0 && users_count <= 2){
      return "secondary"
    } else if(users_count >= 3 && users_count <= 6){
      return "primary"
    } else if(users_count >= 7 && users_count <= 10) {
      return "success"
    } else {
      return "danger"
    }
  }

  render() {
    const {month, users, addUsersWillShow, removeUsersWillShow} = this.props

    return (
      <div className={`card alert alert-${this.getClassLink(users.length)}`}>
        <div className="card-body text-center"
          onMouseOver={() => { addUsersWillShow(users)}}
          onMouseOut={() => { removeUsersWillShow()}}>
          {month}
        </div>
      </div>
    );
  }
}

export default MonthItem;
