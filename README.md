# Descrizione

Create un nuovo progetto utilizzando Vite e Vue 3 e definite i componenti necessari per strutturare il layout come da screenshot allegato.
Al caricamento della pagina, effettuate una chiama ajax all'API di Yu Gi Oh: https://db.ygoprodeck.com/api/v7/cardinfo.php
e con i dati restituiti, stampate una card per ogni carta.

*ATTENZIONE*: l’api restituisce tutti i risultati in un colpo solo. Per evitare attese e/o rallentamenti nelle richieste, potete diminuire il numero di risultati sfruttando i parametri num e offset
https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0

# Bonus

Creare un componente loader da visualizzare fintantoché i risultati non sono pronti.
*Documentazione*: https://ygoprodeck.com/api-guide/

Numero di push minimo: 12

# Scomposizione del problema

Creare i vari components che andranno a formare la nostra pagina: un Header, un Main e una CardSection

Creazione del file store.js per la creazione di un oggetto reattivo che andrà richiamato nei components in base alle necessità

Effettuo una chiamata ajax all'Api di YU-GI-OH così da ricevere i dati necessari per la composizione delle cards

Importare i vari components all'interno dell'App di Vue per il funzionamento effettivo