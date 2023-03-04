import React, {useState} from 'react';
import "./CreateAdmins.css";
import {AiOutlineCloseCircle, AiOutlineCheckCircle} from 'react-icons/ai';
import axios from '../../api/index';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const createAdminsSchema = {
    firstname: "",
    lastname: "",
    age: 0,
    gender: "",
    phoneNumber: 0,
    isActive: true,
    username: "",
    password: ""
}

function CreateAdmins() {
    const [createAdminsForm, setCreateAdminsForm] = useState(createAdminsSchema);

    const CreateNewAdmin = (e) => {
        e.preventDefault();
        let newAdmins = {...createAdminsForm, age: +createAdminsForm.age, phoneNumber: +createAdminsForm.phoneNumber}

        axios.post('/admins', newAdmins)
            .then(res=> {
                console.log("res>>>", res.data)
                if(!res?.data.state){
                    return toast(res?.data?.msg)
                }
                setCreateAdminsForm(createAdminsSchema);
                toast("Admin muffaqiyatli yaratildi!")
            })
            .catch(err=> console.log(err))
    }

    return (
        <div className='createadmins_container'>
            <h1>Yangi Adminlar yarating!</h1>
            <form className='createadmins_form' onSubmit={CreateNewAdmin} action="">
                <div className="inputs_oncontainer">
                    <input
                        value={createAdminsForm.firstname}
                        onChange={e=> setCreateAdminsForm({...createAdminsForm, firstname: e.target.value})}
                        type="text" 
                        className="createadmins_inputs" 
                        placeholder='Adminning ismini kiriting' 
                        required minLength={3} 
                        style={{outline: createAdminsForm.firstname.length >= 3 && "2px solid green"}}
                    />
                    {
                        createAdminsForm.firstname.length >= 3 ? <AiOutlineCheckCircle style={{color: "green"}}/>
                        :<AiOutlineCloseCircle style={{color: "red"}}/>
                    }
                </div>

                <div className="inputs_oncontainer">
                    <input 
                        value={createAdminsForm.lastname}
                        onChange={e=> setCreateAdminsForm({...createAdminsForm, lastname: e.target.value})}
                        required minLength={3} 
                        type="text" 
                        className="createadmins_inputs" 
                        placeholder='Adminning familiyasini kiriting' 
                        style={{outline: createAdminsForm.lastname.length >= 3 && "2px solid green"}}
                    />
                    {
                        createAdminsForm.lastname.length >= 3 ? <AiOutlineCheckCircle style={{color: "green"}}/>
                        :<AiOutlineCloseCircle style={{color: "red"}}/>
                    }
                </div>

                <div className="inputs_oncontainer">
                    <input 
                        onChange={e=> setCreateAdminsForm({...createAdminsForm, age: e.target.value})}
                        required type="number" 
                        className="createadmins_inputs" 
                        placeholder='Adminning yoshini kiriting' 
                        style={{outline: createAdminsForm.age && "2px solid green"}}
                    />
                    {
                        createAdminsForm.age ? <AiOutlineCheckCircle style={{color: "green"}}/>
                        :<AiOutlineCloseCircle style={{color: "red"}}/>
                    }
                </div>

                <div className="inputs_oncontainer">
                    <select 
                        value={createAdminsForm.gender}
                        onChange={e=> setCreateAdminsForm({...createAdminsForm, gender: e.target.value})}
                        required 
                        className='createadmins_inputs'
                        style={{outline: createAdminsForm.gender && "2px solid green"}}
                    >
                        <option value="">Adminning jinsini kiriting</option>
                        <option value="male">Erkak</option>
                        <option value="female">Ayol</option>
                    </select>
                    {
                        createAdminsForm.gender ? <AiOutlineCheckCircle style={{color: "green"}}/>
                        :<AiOutlineCloseCircle style={{color: "red"}}/>
                    }
                </div>

                <div className="inputs_oncontainer">
                    <input 
                        onChange={e=> setCreateAdminsForm({...createAdminsForm, phoneNumber: e.target.value})}
                        required minLength={9} 
                        maxLength={12} type="number" 
                        className="createadmins_inputs" 
                        placeholder='Adminning mobil raqamini kiriting. Misol: 998905467894' 
                        style={{outline: createAdminsForm.phoneNumber && "2px solid green"}}
                    />
                    {
                        createAdminsForm.phoneNumber ? <AiOutlineCheckCircle style={{color: "green"}}/>
                        :<AiOutlineCloseCircle style={{color: "red"}}/>
                    }
                </div>

                <div className="inputs_oncontainer">
                    <input 
                        value={createAdminsForm.username}
                        onChange={e=> setCreateAdminsForm({...createAdminsForm, username: e.target.value})}
                        required minLength={4} type="text" 
                        className="createadmins_inputs" 
                        placeholder='Adminga username yozing' 
                        style={{outline: createAdminsForm.username.length >= 4 && "2px solid green"}}
                    />
                    {
                        createAdminsForm.username.length >= 4 ? <AiOutlineCheckCircle style={{color: "green"}}/>
                        :<AiOutlineCloseCircle style={{color: "red"}}/>
                    }
                </div>

                <div className="inputs_oncontainer">
                    <input 
                        value={createAdminsForm.password}
                        onChange={e=> setCreateAdminsForm({...createAdminsForm, password: e.target.value})}
                        required minLength={4} type="text" 
                        className="createadmins_inputs" 
                        placeholder='Adminga parol yozing' 
                        style={{outline: createAdminsForm.password.length >= 4 && "2px solid green"}}
                    />
                    {
                        createAdminsForm.password.length >= 4 ? <AiOutlineCheckCircle style={{color: "green"}}/>
                        :<AiOutlineCloseCircle style={{color: "red"}}/>
                    }
                </div>
                <button>Admin yaratish</button>
            </form> 
            <ToastContainer/>
        </div>
    )
}

export default CreateAdmins