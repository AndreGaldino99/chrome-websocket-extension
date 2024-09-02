function init(){
  
  var uuid = generateUUID();

  const socket = new WebSocket(`ws://localhost:5202/WebsocketManager/1/${uuid}`);

  socket.addEventListener('open', (event) => {
      console.log('Connected to WebSocket server');
  });
  
  // Evento quando uma mensagem é recebida do servidor
  socket.addEventListener('message', (event) => {
    // document.querySelector("body").style.display = "none";
    window.location.reload()
    //   console.log('Message from server: ', event.data);
  });
  
  // Evento quando a conexão é fechada
  socket.addEventListener('close', (event) => {
      console.log('WebSocket connection closed');
  });
  
  // Evento para erros
  socket.addEventListener('error', (error) => {
      console.error('WebSocket error: ', error);
  });

}


function generateUUID() { 
    var d = new Date().getTime();
    var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now()*1000)) || 0;
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16;
        if(d > 0){
            r = (d + r)%16 | 0;
            d = Math.floor(d/16);
        } else {
            r = (d2 + r)%16 | 0;
            d2 = Math.floor(d2/16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}

init();