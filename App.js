import React, {useState,useEffect} from 'react';
import data from './data';

function App(){
	let [count,setCount]=useState(0);
	let [text,setText]=useState([]);
	function handleSubmit(event){
		event.preventDefault();
		if(count>'8'){
			count='8';
		}
		setText(data.slice(0,parseInt(count)>0?parseInt(count):0));
	}
	return (
		<section className='section-center'>
			<h3>Need some lorem ipsum?</h3>
			<form className='lorem-form' onSubmit={handleSubmit}>
				<label htmlFor='amount'>
					Paragraphs?
				</label>
				<input type='number' name='amount' id='amount' value={count} onChange={(event)=>{setCount(event.target.value)}}/>
				<button type='submit' className='btn'>Generate!</button>
				
			</form>
			<article className='lorem-text'>
				{text.map((item,index)=>{
					return <p key={index}>{item}</p>
				})}
			</article>
		
		</section>
	)
};
export default App;