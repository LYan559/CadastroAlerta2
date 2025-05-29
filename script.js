function enviar() {
    event.preventDefault();
    Swal.fire({
        title:"Parabéns!",
        text: "Ingresso reservado com sucesso!",
        icon: "success"
      });
}