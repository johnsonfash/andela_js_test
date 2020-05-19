import React, { Component } from 'react'
import Dashboard from '../Dashboard'
import flower from '../../assets/image.jpg'

class Edit extends Component {

  render() {
    return (
      <React.Fragment>

        <Dashboard>
          <div className="community_container containerFull">
            <label htmlFor="file" className="file_label"> <img src={flower} alt="" />
              <div className="bar_upload">
                <span className="upload_icon straight"></span>
                <span className="upload_icon slanting"></span>
                <span className="upload_icon round"></span>
              </div>
            </label>
            <input type="file" name="" value="" id="file" className="file" />
            <div className="title">
              <label htmlFor="title_input"></label>
              <input type="text" id="title_input" className="title_input" name="" value="Oba-ile Housing Estate, AKure, Ondo State." placeholder="Enter area here!" />
            </div>
            <hr className="hr" />
            <div className="amount_edit_cover">
              <label htmlFor="amount_edit" className="amount_edit_label">Fund:</label>
              <span>&#8358;</span><input type="text" name="" id="amount_edit" value="50000" className="amount_edit" />
            </div>

            <textarea name="name" className="detail_textarea" placeholder="Press Enter key **TWICE(2)** to goto a new  paragraph">
            </textarea>
            <button type="button" name="button" className="btn_donate btn edit">submit</button>
          </div>
        </Dashboard>

      </React.Fragment>
    )
  }
}

export default Edit
