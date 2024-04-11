class ButtonAdd extends HTMLElement{
    connectedCallback(){
		this.render();
	}

    render(){
        this.innerHTML = `
            <style>
                .tambah-button {
                    background-color: #2b3035;
                    border-radius: 5px;
                    bottom: 30px;
                    box-shadow: 0 0 5px 0.5px #000;
                    height: 55px;
                    position: fixed;
                    right: 30px;
                    width: 55px;
                    z-index: 2;
                }
                .icon-tambah {
                    color: #fff;
                    margin: 0 auto;
                }
            </style>
            <button class="tambah-button d-flex align-items-center justify-content-center" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <i style="font-size: 40px;" class="bi bi-plus icon-tambah"></i>
            </button>
        `;
    }
}

customElements.define('button-add', ButtonAdd);