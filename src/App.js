import logo from './logo.svg';
import './App.css';
import Form from './Form'


import React, {useState, useEffect} from 'react'

const testTeam=[
  {name:'Justin Bryan', email:'jbry0723@gmail.com', role: 'frontend engineer'}
];

const initialFormValues={name:'', email:'', role:''}

function App() {
  const [teamMembers, setTeamMembers]=useState(testTeam)
  const [formValues, setFormValues]=useState(initialFormValues)

  const update= (name,value)=>{
    setFormValues({...formValues,[name]:value,
    })
  }

  const submitMember= () =>{
    const newMember={
      name:formValues.name.trim(),
      email:formValues.email.trim(),
      role:formValues.role,
    };
    if(!newMember.name|| !newMember.email || !newMember.role) return;

    setTeamMembers([...teamMembers, newMember])
    setFormValues(initialFormValues)
  }

  return (
    <div className="App">
     <div className="teamContainer">
       {teamMembers.map((member,index)=>{
         return (
           <div key={index}>
             {member.name} is our {member.role}. They can be reached at {member.email}.
           </div>
         )
       })}
     </div>
     <Form
     values={formValues}
     update={update}
     submit={submitMember}

     
     />

    </div>
  );
}

export default App;
