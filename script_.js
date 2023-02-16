function make() {
    let txt = document.getElementById("b").value;
    let url = document.getElementById("url");
    fetch('https://darkmask.darkmash.repl.co/from', {
            method: "GET",
            headers: {

                "url": txt,

            },
            mode: 'cors',
        }).then(response => response.text())
        .then((response) => {
            console.log(response);
            url.textContent = response;

        }).catch(err => console.log(err));
}
