import React from 'react';
import { useDispatch } from 'react-redux';
import { notecardList } from '../datas/headerData';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { addNote, deleteNote } from '../redux/notes/noteAction';


function NoteCard() {
    const { register, handleSubmit, reset } = useForm();
    const notes = useSelector(state => state.notes.notes);
    const dispatch = useDispatch();




    const onSubmit = (data) => {
        dispatch(addNote(data));
        reset();
    };

    return (
        <>
            <div className="search-notes h-100 py-2 px-2 rounded">
                <form onSubmit={handleSubmit(onSubmit)} className="d-flex py-3 px-2 justify-content-between align-items-center">
                    <div className="d-flex w-100 note-bottom-line py-1 justify-content-start align-items-center gap-2">
                        <i className="fa fa-search fs-6" aria-hidden="true"></i>
                        <input type="text" name='note'  {...register("note", { required: "Search is required" })} className='note-search-input w-100' placeholder='Search notes' required />
                    </div>
                    <div className="ps-2">
                        <button type="submit" className='border-0 bg-white'>
                            <i className="fa fa-plus add-notes" aria-hidden="true"></i>
                        </button>
                    </div>
                </form>
                {
                    notes.map((ele, index) => {
                        return (
                            <div key={index} className="d-flex mb-2 px-2 rounded py-2 justify-content-between align-items-center note-list">
                                <div className="">
                                    <h6 className='note-title m-0'>{ele.title} - {ele.date}</h6>
                                    <p className='fw-medium p-0 m-0 note-desc'>{ele.desc}</p>
                                </div>
                                <div className="">
                                    <i className="fa fa-trash-o fs-4 note-delete" onClick={() => { dispatch(deleteNote(ele.title)) }} aria-hidden="true"></i>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default NoteCard