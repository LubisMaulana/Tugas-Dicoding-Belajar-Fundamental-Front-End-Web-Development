class AddForm extends HTMLElement{
    constructor(){
        super();
    }

    get title(){
        return this.querySelector('#title').value;
    }

    get body(){
        return this.querySelector('#body').value;
    }

    get archived(){
        return this.querySelector('#archived').checked;
    }

    set eventAddNote(event){
		this._eventAddNote = event;
		this.render();
	}

    resetForm(){
        this.querySelector('#title').value = '';
        this.querySelector('#body').value = '';
        this.querySelector('#archived').checked = false;
    }

    render(){
        this.innerHTML = `
            <style>
                .footer-form .btn{
                    width: 120px!important;
                }
            </style>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <form class="d-flex flex-column p-4">
                            <div class="modal-header p-0 pb-2">
                                <h1 class="modal-title fw-semibold text-primary fs-5" id="exampleModalLabel">Form Tambah Note</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>

                            <div class="modal-body">
                                <div class="form-floating mb-3 mt-4 w-100 border border-dark-subtle rounded">
                                    <input type="text" class="form-control" id="title" placeholder="Judul catatan Anda..." required>
                                    <label for="title">Judul Note</label>
                                </div>
                    
                                <div class="form-floating w-100 mb-3 border border-dark-subtle rounded">
                                    <textarea class="form-control" id="body" style="height: 200px;" cols="30" rows="10"required></textarea>
                                    <label for="body">Isi Note</label>
                                </div>
            
                                <div class="d-flex align-items-center input-group">
                                    <div class="input-group-text me-2 border border-dark-subtle rounded">
                                        <input class="form-check-input mt-0" id="archived" type="checkbox">
                                    </div>
                                    <label for="archived">Arsip Note Ini?</label>
                                </div>
                            </div>

                            <div class="modal-footer d-flex footer-form justify-content-between p-0">
                                <button type="button" class="btn btn-outline-secondary mt-4" data-bs-dismiss="modal">Close</button>
                                <button id="button-submit" type="button" class="btn btn-dark py-2 mt-4" data-bs-dismiss="modal">Tambah</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        `;

        this.querySelector('#button-submit').addEventListener('click', () => {
            this._eventAddNote();
        });
    }
}

customElements.define('add-form', AddForm);