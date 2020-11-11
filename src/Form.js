import './App.css';
import React, {useState, useEffect} from 'react'



export default function Form (props){
    const {values, update, submit}=props

    const onSubmit=evt =>{
        evt.preventDefault();
        submit();
        
    };

    const onChange= evt =>{

        const{name,value}=evt.target
        update(name,value)
    }

    return(
        <div className='formDiv'>
            <form className='memberform' onSubmit={onSubmit}>
            <label>Name:
                <input
                type="text"
                name='name'
                onChange={onChange}
                value={values.name}
                placeholder='Enter Name Here'
                maxLength='40'
                ></input>

            </label>
            <label>Email:
                <input
                type='email'
                name='email'
                onChange={onChange}
                value={values.email}
                placeholder='Enter Email Here'
                maxLength='100'
                ></input>
            </label>
            <label>Role:
                <select
                name='role'
                value={values.role}
                onChange={onChange}>
                    <option value="">-------</option>
                    <option value="frontend engineer">Frontend Engineer</option>
                    <option value="backend engineer">Backend Engineer</option>
                    <option value="designer">Designer</option>
                    <option value="tester">Testing</option>


                </select>
            </label>

        <div classname="submit">
            <button>Submit</button>
        </div>
        </form>
        </div>
        
)}