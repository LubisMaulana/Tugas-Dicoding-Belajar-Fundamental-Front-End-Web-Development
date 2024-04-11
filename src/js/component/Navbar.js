class NavBar extends HTMLElement{
	set eventSearch(event){
		this._eventSearch = event;
	}

    set eventTabArsip(event){
        this._eventTabArsip = event;
        this.render();
    }

    set eventTabNonArsip(event){
        this._eventTabNonArsip = event;
        this.render();
    }

    set eventTabAllNotes(event){
        this._eventTabAllNotes = event;
        this.render();
    }
    
	get keyword(){
		return this.querySelector('#search-input').value;
	}

    setTabMenu(allNotes = 'active', arsip = '', nonArsip = ''){
        this.querySelector('#tab-all-notes').classList.remove('active');
        this.querySelector('#tab-non-archived').classList.remove('active');
        this.querySelector('#tab-archived').classList.remove('active');

        if (allNotes) this.querySelector('#tab-all-notes').classList.add(allNotes);
        if (nonArsip) this.querySelector('#tab-non-archived').classList.add(nonArsip);
        if (arsip) this.querySelector('#tab-archived').classList.add(arsip);
    }

	render(){
		this.innerHTML = `
            <style>
                #tab-all-notes:hover, 
                #tab-archived:hover, 
                #tab-non-archived:hover{
                    cursor: pointer;
                }
            </style>
            <nav class="navbar navbar-expand-lg bg-dark mb-5" data-bs-theme="dark">
                <div class="container-fluid">
                    <a class="navbar-brand">Note-App</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link ${this._arsip || this._nonArsip || this._allNotes ? this._allNotes : 'active'}" id="tab-all-notes">All Notes</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ${this._arsip? this._arsip : ''}" id="tab-archived">Archieved</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ${this._nonArsip? this._nonArsip : ''}" id="tab-non-archived">Non-Archieved</a>
                            </li>
                        </ul>
                        <form class="d-flex" role="search">
                            <input id="search-input" class="form-control me-2" placeholder="Search">
                            <button id="btn-event-search" class="btn btn-outline-success" type="button">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        `;

        this.querySelector('#tab-all-notes').addEventListener('click', () => {
            this._eventTabAllNotes();
        });
        this.querySelector('#tab-archived').addEventListener('click', () => {
            this._eventTabArsip();
        });
        this.querySelector('#tab-non-archived').addEventListener('click', () => {
            this._eventTabNonArsip();
        });
		this.querySelector('#btn-event-search').addEventListener('click', this._eventSearch);
	}
}

customElements.define('nav-bar', NavBar);