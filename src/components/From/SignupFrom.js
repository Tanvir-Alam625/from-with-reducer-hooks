const SignupFrom = ({state, dispatch}) =>{
    const submit = (event)=>{
        event.preventDefault();
        console.log(state);
    }
    return(
        <div className='h-screen w-screen flex justify-center items-center overflow-auto'>
      <form
        className='shadow-lg p-10 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between'
        onSubmit={submit}
      >
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='firstName'>
            First Name
          </label>
          <input
            type='text'
            className="border border-slate-400 rounded p-2 outline-none"
            onChange={(e)=> dispatch({ type: "INPUT", payload:{ name:e.target.name, value:e.target.value}})}
            name='firstName'
            id='firstName'
          />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='lastName'>
            Last Name
          </label>
          <input
            type='text'
            name='lastName'
            onChange={(e)=> dispatch({ type: "INPUT", payload:{ name:e.target.name, value:e.target.value}})}
            className="border border-slate-400 rounded p-2 outline-none"
            id='lastName'
          />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='email'>
            Email
          </label>
          <input
            type='email'
            onChange={(e)=> dispatch({ type: "INPUT", payload:{ name:e.target.name, value:e.target.value}})}
            className="border border-slate-400 rounded p-2 outline-none"
            name='email'
            id='email'
          />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <h1 className='mb-3'>Gender</h1>
          <div className='flex gap-3'>
            <div>
              <input
                type='radio'
                id='male'
                className="border border-slate-400 rounded p-2 outline-none"
                name='gender'
                onChange={(e)=> dispatch({ type: "INPUT", payload:{ name:e.target.name, value:e.target.value}})}
                value='male'
              />
              <label className='ml-2 text-lg' htmlFor='male'>
                Male
              </label>
            </div>
            <div>
              <input
                type='radio'
                id='female'
                onChange={(e)=> dispatch({ type: "INPUT", payload:{ name:e.target.name, value:e.target.value}})}
                name='gender'
                value='female'
              />
              <label className='ml-2 text-lg' htmlFor='female'>
                Female
              </label>
            </div>
            <div>
              <input
                type='radio'
                id='other'
                onChange={(e)=> dispatch({ type: "INPUT", payload:{ name:e.target.name, value:e.target.value}})}
                name='gender'
                value='other'
              />
              <label className='ml-2 text-lg' htmlFor='other'>
                Other
              </label>
            </div>
          </div>
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-3' htmlFor='education'>
            Education
          </label>
          <select
            name='education'
            id='education'
            onChange={(e)=> dispatch({ type: "INPUT", payload:{ name:e.target.name, value:e.target.value}})}
            className="border border-slate-400 rounded p-2 outline-none"
          >
            <option value='SSC'>SSC</option>
            <option value='HSC'>HSC</option>
            <option value='underGrad'>Under Graduate</option>
            <option value='graduate'>Graduate</option>
          </select>
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-3'>Number of PCs</label>
          <div className='flex justify-between items-center gap-2 '>
            <span 
            type="btn"
            onClick={()=> dispatch({type: "DECREMENT_QUANTITY"})}
            className={` flex justify-center items-center text-lg text-white rounded h-10 w-10 ${state.quantity === 0 ? 'bg-gray-500 cursor-not-allowed':'bg-indigo-500 cursor-pointer'}`}>
              -
            </span>
            <div className='border flex-1 flex justify-center items-center h-10 rounded-md border-gray-300'>
              <span className='text-lg'>{state.quantity}</span>
            </div>
            <span
            type="btn"
            onClick={()=> dispatch({type: "INCREMENT_QUANTITY"})}
            className=' flex justify-center items-center cursor-pointer  bg-indigo-500 text-lg text-white rounded h-10 w-10'>
              +
            </span>
          </div>
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-3' htmlFor='feedback'>
            Feedback
          </label>
          <textarea
            name='feedback'
            onChange={(e)=> dispatch({ type: "INPUT", payload:{ name:e.target.name, value:e.target.value}})}
            className="border border-slate-400 rounded p-2 outline-none"
            id='feedback'
            cols='30'
            rows='4'
          ></textarea>
        </div>

        <div className='flex justify-between items-center w-full'>
          <div className='flex  w-full max-w-xs'>
            <input
              className='mr-3'
              type='checkbox'
              name='term'
              id='terms'
            onClick={(e)=> dispatch({ type: "TOGGLE", payload:{ name:e.target.name}})}

            />
            <label htmlFor='terms'>I agree to terms and conditions</label>
          </div>
          <button
          disabled={ !state.term}
            className=' px-4 py-3 bg-indigo-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500'
            type='submit'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
export default SignupFrom;