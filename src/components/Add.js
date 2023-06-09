import React, { useState } from 'react'
export default function Add(props) {
    const [Name, setName] = useState("")
    const [Id, setId] = useState("")
    const [temp, settemp] = useState("")
    const [X, setX] = useState("")
    const [Y, setY] = useState("")
    const submit = (e) => {
        e.preventDefault();
        if (!Name || !Id || !temp || !X || !Y) {
            alert("Please provide all the information!");
        }
        else {
            props.addTodo(Name, Id, temp, X, Y);
            setName("");
            setId("");
            setX("");
            setY("");
            settemp("");
        }
    }
    return (
        <>
            <div className='text-center'>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Add a new Machine data
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
                                    <div className="mb-3">
                                        <label for="Name" className="form-label">Machine Name</label>
                                        <input type="text" value={Name} onChange={(e) => setName(e.target.value)} className="form-control" id="Name" placeholder="" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="Id" className="form-label">Machine ID</label>
                                        <input type="text" value={Id} onChange={(e) => setId(e.target.value)} className="form-control" id="Id" placeholder="" />
                                    </div><div className="mb-3">
                                        <label for="temp" className="form-label">Machine temperature</label>
                                        <input type="text" value={temp} onChange={(e) => settemp(e.target.value)} className="form-control" id="temp" placeholder="" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="X" className="form-label">Machine X coordinates</label>
                                        <input type="text" value={X} onChange={(e) => setX(e.target.value)} className="form-control" id="X" placeholder="" />
                                    </div><div className="mb-3">
                                        <label for="Y" className="form-label">Machine Y coordinates</label>
                                        <input type="text" value={Y} onChange={(e) => setY(e.target.value)} className="form-control" id="Y" placeholder="" />
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
