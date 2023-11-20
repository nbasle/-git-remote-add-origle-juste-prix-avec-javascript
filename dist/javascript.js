const url = "https://blockchain.info/ticker";
//réer une requête

function recupPrix() {
  //     let requete = new XMLHttpRequest(); //Créer un objet
  //     requete.open('GET',url); //Premier paramètre GET / POST
  //     //deuxième paramètre: url

  //     requete.responseType = 'json'; //Nous attendons du json
  //     requete.send(); //Nous envoyons notre requete

  //     //Dès qu'on reçoit une réponse on execute une fonction
  //     requete.onload = function (){
  //         if(requete.readyState === XMLHttpRequest.DONE){
  //             if(requete.status === 200){
  //                 let reponse = requete.response; //on stocke la réponse
  //                 console.log(reponse)
  //                 let prixEnEuros = reponse.EUR.last;
  //                 document.querySelector('#price_label').textContent = prixEnEuros;
  //                // console.log(prixEnEuros);
  //             } else {
  //                 alert('U  problème est intervenu merci de revenir plus tard.')
  //             }
  //         }
  //     }
  //     console.log('Prix actualisé')
  axios
    .get(url)
    .then(function (donnees) {
      document.querySelector("span").textContent = donnees.data.EUR.last;
    })
    .catch(function (error) {
      console.log(error);
      alert("Un problème est survenu");
    })
    .then(function () {
      console.log("Mise à jour effectuée");
    });
}

//setInterval(recupPrix, 1000);
//recupPrix();
