class Footer extends HTMLElement{
    connectedCallback(){
		this.render();
	}

    render(){
        this.innerHTML = `
            <style>
                footer {
                    height: 50px;
                    color: white;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                }
            </style>
            <footer class="bg-dark mt-5">
                <p class="m-0">© 2024 - <a class=" style="text-decoration:none;" href="https://github.com/lubismaulana"><strong>LubisMaulana</strong></a></p>
            </footer>
        `;
    }
}

customElements.define('footer-content', Footer);