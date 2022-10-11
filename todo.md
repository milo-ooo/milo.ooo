# TO DO
## RÉFÉRENCEMENT
- [ ] description dans le navigateur + lorsque les navigateurs ont des pages en favoris
	- balise HTML meta description à remplire
- [x] img PAS indexées dans google img (ni favicon)
	- règles dans `robots.txt`
- [ ] keywords
	- référencement naturel, `index.html` doit comprendre les bons mots
- [x] googlebot/robots ?
	- règles dans `robots.txt`
- [ ] autres balises cool ?
	- balises HTML og pour les médias sociaux
```html
	<meta property="og:title" content="Site title">
    <meta property="og:description" content="Site description">
    <meta property="og:image" content="img/site-image.jpg">
    <meta name="twitter:card" content="summary_large_image">
```

## OPTIMISATION 
- [ ] chargement de la page et optimisation des données
	- GitHub Pages sert les fichier derrière un CDN (Content Delivery Network) mondial, géré par Fastly. Vitesse de chargement égale garantie peu importe où tu es dans le monde
- [ ] plusieurs résolutions d’img selon le temps de chargement 
	- Très compliqué à faire sans gestionnaire de contenu (type WordPress ou autre)
- [ ] plusieurs tailles d’img dispo selon la taille de l’écran utilisée
	- Possible avec les `media queries` dans le CSS
- [ ] resize le canvas lorsqu’on resize la page
	- Possible avec le CSS
- [ ] mieux de garder les img sur le bureau ou créer un dossier en ligne ? comment faire ? et pour les typo ?
	- Je ne comprends pas, on en parle ?
- [ ] compatible avec un max de navigateurs
	- Tester la validité du code HTML avec https://validator.w3.org, pour le Javascript pas d'inquiétudes normalement, les canvas c'est basique aussi : https://caniuse.com/?search=canvas	
		
## HEADER 
- [ ] aucune marge en haut de la page 
- [ ] texte centré verticalement et petite marge sur la gauche
- [ ] header au premier plan, que quand on clique dessus il n’y ait pas d’img qui apparaisse 
- [ ] adresse e-mail : pouvoir la copier et cliquer dessus pour ouvrir la boîte mail
	- lien HTML `<a mailto:bla@blabla.ch>bla@blabla.ch</a>`

## SOURIS
- [ ] pk changer l’icône de base ça marche pas ?
	- problème code CSS
- [ ] icône encore différente quand on clique 

## FAVICON
- [ ] pk ça marche pas :(
	- Pas de favicon renseignée dans le fichier HTML, utiliser https://realfavicongenerator.net pour générer tout ce qu'il faut puis me donner le dossier téléchargé

## IMG
- [ ] améliorer la qualité des img
	- Compliqué, dépends de leur résolution de base
- [ ] quand on a fini une première fois de voir toutes les img, que ça recommence à la 1ère
	- boucle à faire en Javascript
- [ ] légendes qui apparaissent en dessous de l’img lorsqu’on maintient la souris en cliquant pour faire apparaître l’img
- [ ] modifier la taille tout en conservant la qualité
	- Utiliser les nouveaux formats d'images comme `.webp` et `.avif`
- [ ] bouton sur la page pour la recharger directement
	- Faisable en javascript aussi

## VID 
- [ ] qualité ?
	- Dépends du fichier source, comme pour les images précédemment
- [ ] format pour que ce soit pas trop lourd ? 
	- `.mp4` est le plus supporté par les navigateurs et la compression est bonne
- [ ] en boucle toute seule 
	- Utiliser l'attribut HTML loop : https://www.w3schools.com/tags/att_video_loop.asp
- [ ] son ?
	- ?
		
## FOOTER 
- [ ] visible tout le temps
	- Quelques règles CSS avec `position: fixed;` https://stackoverflow.com/a/13609095
- [ ] centré
	- CSS aussi

## HÉBÉRGEMENT 
- [x] GitHub Pages
- [x] Nom de domaine configuré pour servir GitHub Pages
```
@ 10800 IN A 185.199.108.153
@ 10800 IN A 185.199.109.153
@ 10800 IN A 185.199.110.153
@ 10800 IN A 185.199.111.153
@ 10800 IN AAAA 2606:50c0:8000::153
@ 10800 IN AAAA 2606:50c0:8001::153
@ 10800 IN AAAA 2606:50c0:8002::153
@ 10800 IN AAAA 2606:50c0:8003::153
www 10800 IN CNAME milo-ooo.github.io.
```

## VERSION TÉLÉPHONE 
- [ ] comment faire une version différente ?? 
	- Compliqué, le plus facile est d'utiliser les `medias queries` : https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries
- [ ] cliquer n’importe où et que l’img s’affiche au centre
	- Faisable en Javascript sans doute
- [ ] comment ajuster bien les tailles pour que ça s’adapte proportionnellement à chaque taille d’écran ?
	- Media queries encore

## SÉCURISER 
- [ ] la page et moi et tout le monde
	- ?
- [ ] cookies ??
	- Pas de cookies
- [ ] chiffrer le code 
	- Pas possible, pas utile
- [ ] éviter que l’adresse e-mail soit captable par des robots de spam ou jsp quoi
	- Obfuscation avec https://www.albionresearch.com/tools/obfuscator (without javascript)
- [ ] autres trucs cool ?
