import React from 'react'

const Form = () => {
  return (
    <div> 
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">Name</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name" />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">Phone</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="***********" />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">Password</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="**********" />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">Message</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
    </div>
  )
}

export default Form
