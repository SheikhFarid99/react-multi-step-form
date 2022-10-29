import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const formArray = [1, 2, 3];
  const [formNo, setFormNo] = useState(formArray[0])
  const [state, setState] = useState({
    name: '',
    dept: '',
    batch: '',
    varsity: '',
    session: '',
    address: '',
    district: '',
    thana: '',
    post: ''
  })
  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }
  const next = () => {
    if (formNo === 1 && state.name && state.dept && state.batch) {
      setFormNo(formNo + 1)
    }
    else if (formNo === 2 && state.varsity && state.session && state.address) {
      setFormNo(formNo + 1)
    } else {
      toast.error('Please fillup all input field')
    }
  }
  const pre = () => {
    setFormNo(formNo - 1)
  }
  const finalSubmit = () => {
    if (state.district && state.thana && state.post) {
      toast.success('form submit success')
    } else {
      toast.error('Please fillup all input field')
    }
  }
  return (
    <div className="w-screen h-screen bg-slate-300 flex justify-center items-center">
      <ToastContainer />
      <div className="card w-[370px] rounded-md shadow-md bg-white p-5">
        <div className='flex justify-center items-center'>
          {
            formArray.map((v, i) => <><div className={`w-[35px] my-3 text-white rounded-full ${formNo - 1 === i || formNo - 1 === i + 1 || formNo === formArray.length ? 'bg-blue-500' : 'bg-slate-400'} h-[35px] flex justify-center items-center`}>
              {v}
            </div>
              {
                i !== formArray.length - 1 && <div className={`w-[85px] h-[2px] ${formNo === i + 2 || formNo === formArray.length ? 'bg-blue-500' : 'bg-slate-400'}`}></div>
              }
            </>)
          }
        </div>
        {
          formNo === 1 && <div>
            <div className='flex flex-col mb-2'>
              <label htmlFor="name">Name</label>
              <input value={state.name} onChange={inputHandle} className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md' type="text" name='name' placeholder='name' id='name' />
            </div>
            <div className='flex flex-col mb-2'>
              <label htmlFor="dept">Dept</label>
              <input value={state.dept} onChange={inputHandle} className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md' type="text" name='dept' placeholder='dept name' id='dept' />
            </div>
            <div className='flex flex-col mb-2'>
              <label htmlFor="batch">Batch</label>
              <input value={state.batch} onChange={inputHandle} className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md' type="number" name='batch' placeholder='batch' />
            </div>
            <div className='mt-4 flex justify-center items-center'>
              <button onClick={next} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Next</button>
            </div>
          </div>
        }

        {
          formNo === 2 && <div>
            <div className='flex flex-col mb-2'>
              <label className='text-slate-500' htmlFor="varsity">Varsity</label>
              <input value={state.varsity} onChange={inputHandle} className='p-2 border border-slate-400 mt-1 outline-0 text-slate-500 focus:border-blue-500 rounded-md' type="text" name='varsity' placeholder='varsity name' id='varsity' />
            </div>
            <div className='flex flex-col mb-2'>
              <label className='text-slate-500' htmlFor="session">session</label>
              <input value={state.session} onChange={inputHandle} className='p-2 border border-slate-400 mt-1 outline-0 text-slate-500 focus:border-blue-500 rounded-md' type="text" name='session' placeholder='session' id='session' />
            </div>
            <div className='flex flex-col mb-2'>
              <label className='text-slate-500' htmlFor="address">Address</label>
              <textarea value={state.address} onChange={inputHandle} row='10' className='p-2 border border-slate-400 mt-1 outline-0 text-slate-500 focus:border-blue-500 rounded-md' type="number" name='address' placeholder='address' ></textarea>
            </div>
            <div className='mt-4 gap-3 flex justify-center items-center'>
              <button onClick={pre} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Previous</button>
              <button onClick={next} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Next</button>
            </div>
          </div>
        }

        {
          formNo === 3 && <div>
            <div className='flex flex-col mb-2'>
              <label htmlFor="district">District</label>
              <input value={state.district} onChange={inputHandle} className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md' type="text" name='district' placeholder='district name' id='district' />
            </div>
            <div className='flex flex-col mb-2'>
              <label htmlFor="thana">Thana</label>
              <input value={state.thana} onChange={inputHandle} className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md' type="text" name='thana' placeholder='thana' id='thana' />
            </div>
            <div className='flex flex-col mb-2'>
              <label htmlFor="post">Post</label>
              <input value={state.post} onChange={inputHandle} className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md' type="text" name='post' placeholder='post' id='post' />
            </div>
            <div className='mt-4 gap-3 flex justify-center items-center'>
              <button onClick={pre} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Previous</button>
              <button onClick={finalSubmit} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Submit</button>
            </div>
          </div>
        }

      </div>
    </div>
  );
}

export default App;
