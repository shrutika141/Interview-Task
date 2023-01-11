import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import Navbar from './Navbar'
import { useDispatch } from 'react-redux';
import { deleteTodo, reorderTask } from '../Redux/Actions/Actions';

const List = () => {

    let list = useSelector(data => data)
    const [search, setSearch] = useState('')
    const [data, setData] = useState('')
    const dispatch = useDispatch()

    const handleOnDragEnd = (result) => {
        if (!result.destination) return;
        const items = Array.from(list);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        dispatch(reorderTask(items))
    }

    const onDelete = (e) => {
        dispatch(deleteTodo(e))
    }

    const onSearchHandler = (e) => {
        e.preventDefault();
        const result = list.filter(e => e.data.includes(search))
        setData(result)
    }

    return (
        <div className='container mt-5'>
            <nav className="navbar navbar-light justify-content-between">
                <form className="form-inline" onSubmit={onSearchHandler}>
                    <input className="form-control border-0" onChange={(e) => setSearch(e.target.value)} style={{ backgroundColor: '#F0F0F0', borderRadius: 0 }} type="search" placeholder="Search" />
                    <div className="input-group-append">
                        <button className="btn" style={{ height: '2.3rem' }} type="submit"><i className="ri-search-line"></i></button>
                    </div>
                </form>
                <Navbar />
            </nav>

            {
                list.length === 0 ? (
                    <div>
                        <h5 className='text-center'>no data found !</h5>
                    </div>
                ) : (
                    <div>
                        {
                            data.length === 0 ? (
                                <div className='row'>
                                    <div className="col-3">
                                        <div className="container m-3 p-3" style={{ backgroundColor: '#F0F0F0' }}>
                                            <DragDropContext onDragEnd={handleOnDragEnd}>
                                                <Droppable droppableId="characters">
                                                    {(provided) => (
                                                        <div className="characters" {...provided.droppableProps} ref={provided.innerRef}>
                                                            {list.map((e, i) => {
                                                                return (
                                                                    <Draggable key={e.id} draggableId={e.id} index={i}>
                                                                        {(provided) => (

                                                                            <div className="card mt-3" key={e.id} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                                                <div className="card-body d-flex justify-content-between">
                                                                                    <p>{e.data}</p>
                                                                                    <button onClick={() => onDelete(e.id)} className='btn btn-sm btn-outline-danger' style={{ height: '2rem' }}><i className="ri-delete-bin-7-line"></i> Delete</button>
                                                                                </div>

                                                                            </div>
                                                                        )}
                                                                    </Draggable>
                                                                );
                                                            })}
                                                            {provided.placeholder}
                                                        </div>
                                                    )}
                                                </Droppable>
                                            </DragDropContext>
                                        </div>
                                    </div>

                                </div>
                            ) : (
                                <div className='row'>
                                    <div className="col-3">
                                        <div className="container m-3 p-3" style={{ backgroundColor: '#F0F0F0' }}>
                                            {data.map((e, i) => {
                                                return (
                                                    <div className="card mt-3" key={e.id}>
                                                        <div className="card-body d-flex justify-content-between">
                                                            <p>{e.data}</p>
                                                            <button onClick={() => onDelete(e.id)} className='btn btn-sm btn-outline-danger' style={{ height: '2rem' }}><i className="ri-delete-bin-7-line"></i> Delete</button>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                )
            }
        </div>
    )
}

export default List