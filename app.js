const firebaseConfig = {
    apiKey: "AIzaSyA8CPOCadiTOtHTmd6cannXDUpp6HrB6Dg",
    authDomain: "etec-d1ad7.firebaseapp.com",
    databaseURL: "https://etec-d1ad7-default-rtdb.firebaseio.com",
    projectId: "etec-d1ad7",
    storageBucket: "etec-d1ad7.appspot.com",
    messagingSenderId: "620748936606",
    appId: "1:620748936606:web:c260905405dc00d80eb28f",
    measurementId: "G-WBZLXKW1G0"
  };

  firebase.initializeApp(firebaseConfig);
  let auth = firebase.auth();
  
  let btncriar = document.querySelector("#btncriar");
  let btnentrar = document.querySelector("#btnentrar");
  
  btncriar.addEventListener('click', clickcriar);
  btnentrar.addEventListener('click', clickbtnentrar);
  
  function salvarInformacoesUsuarioLocalmente(usuario) {
    localStorage.setItem('usuario', JSON.stringify(usuario));
    localStorage.setItem('logado', 'true');
  }
  
  function obterInformacoesUsuarioLocalmente() {
    const usuarioJSON = localStorage.getItem('usuario');
    return JSON.parse(usuarioJSON);
  }
  
  function verificarLogado() {
    return localStorage.getItem('logado') === 'true';
  }
  
  function clickcriar() {
    let cademail = document.getElementById('cademail').value;
    let cadsenha = document.getElementById('cadsenha').value;
  
    auth.createUserWithEmailAndPassword(cademail, cadsenha)
      .then(() => {
        console.log("Usuário criado com sucesso!");
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
  
  function clickbtnentrar() {
    let indemail = document.getElementById('inemail').value;
    let indsenha = document.getElementById('insenha').value;
  
    auth.signInWithEmailAndPassword(indemail, indsenha)
      .then((userCredential) => {
        const user = userCredential.user;
        const usuario = {
          email: user.email,
          uid: user.uid
        };
        salvarInformacoesUsuarioLocalmente(usuario);
  
        console.log("Usuário conectado:", usuario);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }