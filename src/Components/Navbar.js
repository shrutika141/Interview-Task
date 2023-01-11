import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { searchData, task } from '../Redux/Actions/Actions'
import { v4 as uuid } from 'uuid';

const Navbar = () => {

    const [data, setData] = useState()
    const dispatch = useDispatch()

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const unique_id = uuid();
        const id = unique_id.slice(0, 8)
        const taskdata = { id, data }
        dispatch(task(taskdata))
    }

    return (
        <div>
            <button className='btn' data-toggle="modal" data-target="#exampleModal"><i className="ri-add-line"></i> Add task</button>


            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2 className="modal-title">Add Task</h2>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={onSubmitHandler}>
                                <div className="form-group">
                                    <input type="text" style={{ backgroundColor: '#F0F0F0' }} className="border-0 form-control" onChange={(e) => setData(e.target.value)} placeholder="Add Task" />
                                </div>
                                <button type="submit" style={{ backgroundColor: '#F0F0F0' }} className="btn btn-sm">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar