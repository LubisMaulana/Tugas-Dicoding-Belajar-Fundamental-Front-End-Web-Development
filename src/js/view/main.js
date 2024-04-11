import '../component/Navbar.js';
import '../component/Footer.js';
import '../component/ButtonAdd.js';
import '../component/AddForm.js';
import '../component/NoteList.js';
import notesData from '../data/data.js';

const main = () =>{
    const elementListNote = document.querySelector('note-list');
    const elementAddForm = document.querySelector('add-form');
    const elementNavbar = document.querySelector('nav-bar');
    let tab = 'all';

    const searchNote = () => {
        const keyword = elementNavbar.keyword;
        let resultNotes = [];
        if (tab == 'all') {
            resultNotes = notesData.filter(note => {
                return note.title.includes(keyword) || note.body.includes(keyword);
            });
        } else if (tab == 'arsip') {
            resultNotes = notesData.filter(note => {
                return (note.title.includes(keyword) || note.body.includes(keyword)) && note.archived;
            });
        } else {
            resultNotes = notesData.filter(note => {
                return (note.title.includes(keyword) || note.body.includes(keyword)) && !note.archived;
            });
        }
        elementListNote.notes = resultNotes;
    };

    const tabArsipNote = () => {
        const resultNotes = notesData.filter(note => {
            return note.archived;
        });
        tab = 'arsip';
        elementNavbar.setTabMenu('', 'active', '');
        elementListNote.notes = resultNotes;
    };

    const tabNonArsipNote = () => {
        const resultNotes = notesData.filter(note => {
            return !note.archived;
        });
        tab = 'nonArsip';
        elementNavbar.setTabMenu('', '', 'active');
        elementListNote.notes = resultNotes;
    };

    const deleteNote = (id) => {
        const index = notesData.findIndex(note => note.id == id);
        if(index == -1){
            setTimeout(() => {
                showResponseMessage("Note tidak ditemukan!");
            }, 500);
        } else {
            notesData.splice(index, 1);
            setTimeout(() => {
                showResponseMessage("Note berhasil dihapus!");
            }, 500);
        }
        
        if (tab == 'all') {
            getAllNotes();
        } else if (tab == 'arsip') {
            tabArsipNote();
        } else {
            tabNonArsipNote();
        }
    };

    const arsipNote = (id) => {
        notesData.find(note => note.id == id).archived = true;
        setTimeout(() => {
            showResponseMessage("Note berhasil dimasukkan archived!");
        }, 500);

        if (tab == 'all') {
            getAllNotes();
        } else if (tab == 'arsip') {
            tabArsipNote();
        } else {
            tabNonArsipNote();
        }
    };

    const nonArsipNote = (id) => {
        notesData.find(note => note.id == id).archived = false;
        setTimeout(() => {
            showResponseMessage("Note berhasil dimasukkan non archived!");
        }, 500);

        if (tab == 'all') {
            getAllNotes();
        } else if (tab == 'arsip') {
            tabArsipNote();
        } else {
            tabNonArsipNote();
        }
    };

    const addNote = () => {
        const note = {
            id: 'notes-jT-' + Date.now().toString(),
            title: elementAddForm.title,
            body: elementAddForm.body,
            createdAt: new Date(),
            archived: elementAddForm.archived
        };
        notesData.push(note);
        elementAddForm.resetForm();
        setTimeout(() => {
            showResponseMessage("Note berhasil ditambahkan!");
        }, 500);

        if (tab == 'all') {
            getAllNotes();
        } else if (tab == 'arsip') {
            tabArsipNote();
        } else {
            tabNonArsipNote();
        }
    };

    const getAllNotes = () => {
        tab = 'all';
        elementNavbar.setTabMenu('active', '', '');
        elementListNote.notes = notesData;
    };

    const showResponseMessage = (message = 'Check your internet connection') => {
		alert(message);
	};

    elementAddForm.eventAddNote = addNote;

    elementNavbar.eventSearch = searchNote;
    elementNavbar.eventTabArsip = tabArsipNote;
    elementNavbar.eventTabNonArsip = tabNonArsipNote;
    elementNavbar.eventTabAllNotes = getAllNotes;

    elementListNote.eventDeleteNote = deleteNote;
    elementListNote.eventArsipNote = arsipNote;
    elementListNote.eventNonArsipNote = nonArsipNote;
    getAllNotes();
}

export default main;