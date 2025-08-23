function apiconnect(){

    document.getElementById("form").addEventListener("submit", async (e) => {
        e.preventDefault();
    
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
    
        await fetch("https://vpineda.app.n8n.cloud/webhook-test/8584e79f-ab46-4e56-9912-1df590038d82", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });
    });
}

function enviar(){
    let campos = document.getElementById("input");

    if(!campos.value.trim()){

        Swal.fire({
            title: "Formulário não enviado!",
            text: "Preencha todos os campos antes de enviar.",
            icon: "error",
            iconColor: "#3d774e",
            confirmButtonText: "OK",
            confirmButtonColor: "#3d774e"
        });

    }else{

        Swal.fire({
            title: "Enviado!",
            text: "Formulário enviado com sucesso.",
            icon: "success",
            iconColor: "#3d774e",
            confirmButtonText: "OK",
            confirmButtonColor: "#3d774e"
        });
        
        apiconnect()
    }
}
