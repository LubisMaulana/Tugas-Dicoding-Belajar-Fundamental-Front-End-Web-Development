import './NoteItem.js';
class NoteList extends HTMLElement{
	constructor(){
		super();
	}

	set notes(notes){
		this._notes = notes;
		this.render();
	}

	set eventDeleteNote(event){
		this._eventDeleteNote = event;
	}

    set eventArsipNote(event){
		this._eventArsipNote = event;
	}

    set eventNonArsipNote(event){
		this._eventNonArsipNote = event;
	}

	renderError(message){
		this.innerHTML = `
            <style>
                *{
                    font-family: 'Ubuntu', sans-serif;
                }
                .placeholder {
                    font-weight: lighter;
                    color: rgba(0,0,0,0.5);
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
                }
            </style>
        `;
		this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
	}
    
	render(){
		this.innerHTML = `
            <style>
                .container-card{
                    min-height: calc(100vh - 202.4px);
                }
                .note-list-card{
                    width: 90%;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 30px;
                    margin: 0 auto;
                }
            </style>
            <div class="container-card">
                <div class="note-list-card">
                </div>
            </div>
        `;

		this._notes.forEach(note => {
			const noteElement = document.createElement('note-item');
			noteElement.note = note;
			noteElement.eventDeleteNote = this._eventDeleteNote;
            if(note.archived) noteElement.eventPrimary = this._eventNonArsipNote
            else noteElement.eventPrimary = this._eventArsipNote
			this.querySelector('.note-list-card').append(noteElement); 
		});
	}
}

customElements.define('note-list', NoteList);