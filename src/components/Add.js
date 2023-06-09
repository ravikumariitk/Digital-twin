import React, { useState } from 'react'
export default function Add(props) {
    const [Name, setName] = useState(false)
    const [Id, setId] = useState(false)
    const [temp, settemp] = useState(false)
    const [X, setX] = useState(false)
    const [Y, setY] = useState(false)
    const submit = (e) => {
        e.preventDefault();
         {
            props.addTodo(Name, Id, temp, X, Y);
            setName(false);
            setId(false);
            setX(false);
            setY(false);
            settemp(false);
        }
    }
    return (
        <>
            <div className='text-center'>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Add a new Machine
                </button></div>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Add Machine Data</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className='container'>
                                <form onSubmit={submit} >
                                <div>                           
                                 <input checked={Name} onChange={e => setName(e.target.checked)} class="form-check-input" type="checkbox" value="" id="Name"/>
                                <label class="form-check-label" for="Name">
                                    Machine Name
                                </label>
                                </div>
                                <div>
                                <input checked={Id} onChange={e => setId(e.target.checked)} class="form-check-input" type="checkbox" value="" id="id"/>
                                <label class="form-check-label" for="id">
                                    Machine ID
                                </label>
                                </div>
                                <div>
                                <input checked={temp} onChange={e => settemp(e.target.checked)} class="form-check-input" type="checkbox" value="" id="temp"/>
                                <label class="form-check-label" for="temp">
                                    Temperature
                                </label>
                                </div>
                                <div>
                                <input checked={X} onChange={e => setX(e.target.checked)} class="form-check-input" type="checkbox" value="" id="x"/>
                                <label class="form-check-label" for="x">
                                    X Coordinate
                                </label>
                                </div>
                                <div>
                                <input checked={Y} onChange={e => setY(e.target.checked)} class="form-check-input" type="checkbox" value="" id="y"/>
                                <label class="form-check-label" for="y">
                                  Y Coordinate
                                </label>
                                </div>
                                    <button type="submit" class="btn btn-success">Add</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
