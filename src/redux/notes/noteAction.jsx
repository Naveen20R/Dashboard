import { SHOW_NOTES, ADD_NOTE,DELETE_NOTE } from "./noteType";



export const IcecreameAction = () => {
    return {
        type: SHOW_NOTES,
    }
}



export const addNote = (note) => {
    return {
        type: ADD_NOTE,
        payload: note
    };
};

export const deleteNote = (note) => {
    return {
        type: DELETE_NOTE,
        payload: note
    };
};