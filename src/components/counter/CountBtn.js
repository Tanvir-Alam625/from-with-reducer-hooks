const CountBtn = ({dispatch})=>{
return (
    <div className="my-2 px-2">
      <button 
      className='py-2 px-8 mr-2 text-white  bg-slate-600 rounded outline-none bod'
      onClick={()=> dispatch({type:"INCREMENT", payload:{count:10}})}
      >Increment</button>
      <button 
      onClick={()=> dispatch({type:"DECREMENT", payload:{count:10}})}
      className='py-2 px-8 text-white  bg-slate-600 rounded outline-none bod'
      >Decrement</button>

    </div>
)
}
export default CountBtn;