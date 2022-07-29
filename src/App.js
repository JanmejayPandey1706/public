import logo from './logo.svg'
import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const initialState = []
  const [array, setArray] = useState(initialState)
  const [data, setData] = useState({
    date: '',
    amount: '',
    payment: 'cash',
    remarks: '',
  })

  const InputEvent = (e) => {
    const { name, value } = e.target
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = () => {
    setArray((current) => [...current, data])
    // console.log(data.remarks)
    // setArray((current) => [...current, data])
  }
  const handleCancel = () => {
    setData({
      date: '',
      amount: '',
      payment: 'cash',
      remarks: '',
    })
    alert('Are you want to remove the input data')
  }

  return (
    <>
      <form>
        <div className="App">
          <h3> Receipt Details </h3>
          <div>
            Date*
            <input
              type="date"
              value={data.date}
              name="date"
              placeholder="Enter Date"
              onChange={InputEvent}
            />
          </div>
          <div>
            Amount*
            <input
              type="number"
              value={data.amount}
              name="amount"
              placeholder="Enter Amount (in INR)"
              onChange={InputEvent}
            />
          </div>
          <div>
            Payment Mode*
            <input
              type=""
              value={data.payment}
              name="paymentmode"
              placeholder="Cash"
              disabled
              onChange={InputEvent}
            />
          </div>
          <div>
            Remarks*
            <input
              type="text"
              value={data.remarks}
              name="remarks"
              placeholder=" Enter Remarks"
              onChange={InputEvent}
            />
          </div>
        </div>
      </form>
      <div className='btn'>
        <button onClick={handleCancel}>Cancel</button>
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div>
        <table>
          <tr>
            <th>Remarks</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Payment Mode</th>
          </tr>
          {array?.length > 0 ? (
            array?.map((curElem, i) => (
              <tr key={i}>
                <th>{curElem?.remarks == '' ? 'NA' : curElem?.remarks}</th>
                <th>{curElem?.date == '' ? 'NA' : curElem?.date}</th>
                <th>{curElem?.amount =='' ? 'NA' : curElem?.amount}</th>
                <th>{curElem?.payment == '' ? 'NA' : curElem?.payment}</th>
              </tr>
            ))
          ) : (
            <div>
             
              <p>Would you like to show data table so please enter the data</p>
            </div>
          )}
        </table>
      </div>
    </>
  )
}

export default App
