import React from 'react';
import { Link } from 'react-router-dom';
const Form = () => {
  return (
    <div className="linkContainer">
      <div className="header">
        <h4>Browser</h4>
      </div>
      <form>
        <div class="row">
          <div class="col-25">
            <label for="fname">Name</label>
          </div>
          <div class="col-75">
            <input type="text" id="fname" name="firstname" />
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label for="lname">Phone</label>
          </div>
          <div class="col-75">
            <input type="text" id="lname" name="lastname" />
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label for="lname">Number</label>
          </div>
          <div class="col-75">
            <input type="text" id="lname" name="lastname" />
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label for="lname" className="textAreaLabel">
              Text
            </label>
          </div>
          <div class="col-100">
            <textarea
              id="subject"
              name="subject"
              value="asdasdasdasd"
            ></textarea>
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label for="lname" className="textAreaLabel">
              Request
            </label>
          </div>
          <div class="col-100">
            <textarea
              id="subject"
              name="subject"
              value="asdasdasdasd"
            ></textarea>
          </div>
        </div>
        <div class="row2">
          <h4>
            Tinker
            <input
              type="checkBox"
              defaultChecked="true"
              name="gender"
              value="male"
            />
          </h4>
          <h4>
            Paint
            <input
              type="checkBox"
              defaultChecked="true"
              name="gender"
              value="male"
            />
          </h4>
        </div>
        <div class="row">
          <h4 className="loc">Select Location Pref</h4>
        </div>
        <div class="row2">
          <h4>Attend? </h4>
          <p>
            {' '}
            Yes
            <input
              className="checkBox"
              type="checkBox"
              name="gender"
              value="male"
            />
          </p>
          <p>
            No
            <input
              type="checkBox"
              name="gender"
              value="male"
              style={{ backgroundColor: '#000' }}
            />
          </p>
        </div>
        <div class="row3">
          <Link to="/success">
            <button className="btn">Submit</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Form;
