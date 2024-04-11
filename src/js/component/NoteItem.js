class NoteItem extends HTMLElement{
	constructor(){
		super();
	}

    set note(note){
        this._note = note;
        this.render()
    }

	set eventDeleteNote(event){
		this._eventDeleteNote = event;
	}
    
    set eventPrimary(event){
		this._eventPrimary = event;
	}

	render(){
        const dateString = this._note.createdAt;
        const date = new Date(dateString);
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        const formattedDate = date.toLocaleDateString('en-GB', options);
		this.innerHTML = `
            <style>
                *{
                    font-family: 'Ubuntu', sans-serif;
                }
                .card{
                    height: 230px;
                    max-width: 550px;
                    overflow: hidden;
                }
                .card-body{
                    z-index: 1;
                }
                .elipse-1{
                    position: absolute;
                    width: 200px;
                    height: 200px;
        
                    left: 65%;
                    top: -25%;
                    border-radius: 50%;
                    background: #cacaca;
                    box-shadow: 0 0 50px #cacaca;
                    filter: blur(10px);
                    opacity: .3;
                }
                .elipse-2{
                    position: absolute;
                    width: 150px;
                    height: 150px;
        
                    left: -2%;
                    top: 60%;
                    border-radius: 50%;
                    background: #0e0e0e;
                    box-shadow: 0 0 50px #cacaca;
                    filter: blur(10px);
                    opacity: .15;
                }
                .elipse-3{
                    position: absolute;
                    width: 100px;
                    height: 100px;
        
                    left: 5%;
                    top: -40%;
                    border-radius: 50%;
                    background: #a3a3a3;
                    box-shadow: 0 0 50px #cacaca;
                    filter: blur(10px);
                    opacity: .4;
                }
                .elipse-4{
                    position: absolute;
                    width: 50px;
                    height: 50px;
        
                    left: 70%;
                    top: 70%;
                    border-radius: 50%;
                    background: #6e6e6e;
                    filter: blur(10px);
                    opacity: .45;
                }
            </style>
            <div class="card p-3">
                <div class="elipse-1"></div>
                <div class="elipse-2"></div>
                <div class="elipse-3"></div>
                <div class="elipse-4"></div>
                <div class="card-body d-flex flex-column justify-content-between p-0">
                    <div class="d-flex flex-column">
                        <h5 class="card-title">${this._note.title}</h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">${formattedDate}</h6>
                        <p class="card-text">${this._note.body}</p>
                    </div>
                    <div class="d-flex justify-content-between">
                        <button id="button-delete" class="card-link btn btn-outline-secondary">Hapus</button>
                        <button id="button-primary" class="card-link btn btn-dark">${this._note.archived ? 'Buka' : 'Arsip'}</button>
                    </div>
                </div>
            </div>
        `;

		this.querySelector('#button-delete').addEventListener('click', ()=>{
			this._eventDeleteNote(this._note.id);
		});
        
        this.querySelector('#button-primary').addEventListener('click', ()=>{
            this._eventPrimary(this._note.id);
        });
	}
}

customElements.define('note-item', NoteItem);