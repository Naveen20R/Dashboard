import { SHOW_NOTES, ADD_NOTE, DELETE_NOTE } from './noteType';

const initialState = {
    notes: [
        {
            title: "Building Management",
            date: "28/02/2018",
            desc: "Check with unit 101 for the key",
        },
        {
            title: "Peter Graham",
            date: "07/10/2016",
            desc: "Check all mechanical equipment",
        },
        {
            title: "Omar Ferrer",
            date: "05/12/2016",
            desc: "Check roottop boilers",
        },
        {
            title: "Construction work",
            date: "01/02/2017",
            desc: "Check roottop boilers",
        },
        {
            title: "Salary Reports",
            date: "28/10/2016",
            desc: "Monthly salary reports",
        },
    ],
    iceCreameCount: 10,
};



const today = new Date();

const formattedDate = `${String(today.getDate()).padStart(2, '0')}/${String(today.getMonth() + 1).padStart(2, '0')}/${today.getFullYear()}`;



function noteReducer(state = initialState, action) {

    switch (action.type) {
        case SHOW_NOTES:
            return {
                ...state,
                notes: state.notes,
            };
        case ADD_NOTE:
            return {
                ...state,
                notes: [...state.notes, { title: action.payload.note, date: formattedDate, desc: "New task added now." }],
            };
        case DELETE_NOTE:

            return {
                ...state,
                notes: state.notes.filter(note => note.title !== action.payload),
            };
        default:
            return state;
    }
}

export default noteReducer;
