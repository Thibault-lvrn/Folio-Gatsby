<?php
    require('../commun/debut.php');
    require('../commun/header_3.php');
?>

<div class="main">
    <?php require('../commun/menu_3.php');?>
    <div class="contenu transition-fade">
        <ul class="liste_contenu">
            <li class="titre_li flex-col">
                <h2>Développement</h2>
                <br>
                <ul class="ac_container">
                    <li>Développer à l’aide d’un framework de développement côté client</li>
                    <li>Développer à l’aide d’un framework de développement côté serveur</li>
                    <li>Développer des dispositifs interactifs sophistiqués (jeux, réalité virtuelle, webGL, 3D…)</li>
                    <li>Concevoir et développer des composants logiciels, plugins ou extension</li>
                    <li>Maintenir et sécuriser un environnement numérique</li>
                    <li>Mettre en place une chaîne d’intégration continue (test, recettage, déploiement)</li>
                </ul>
            </li>
            <li class="titre_li">
                <h3>Projet Next.js</h3>
                <div class="dnd"><img src="../images/commun/dnd-logo.png" alt="un projet Dn'D"></div>
            </li>
            <li class="contenu_li">
                <div class="first-man text-only">
                    <div class="bloc Front">
                        <p>Next.js est un framework moderne basé sur <span class="text-color">React</span>, conçu pour simplifier le développement d'applications web côté client avec une approche full-stack. Il offre des fonctionnalités avancées comme le rendu côté serveur (SSR), le routage dynamique et l'optimisation automatique des performances, rendant ainsi le développement plus fluide et efficace.</p>
                    </div>
                </div>
                <div class="second-man img-only">
                    <div class="les_img">
                        <img class="img_liste" src="../images/annee_2/img_dev/backbone.gif" alt="">
                    </div>
                </div>
                <div class="first-man text-only">
                    <div class="bloc Front">
                        <p>Travailler sur un projet Next.js a été une surprise pour moi, car ce n'est pas une technologie couramment utilisée chez Dn'D. Cependant, cette expérience a été extrêmement enrichissante. J'ai beaucoup apprécié ce changement par rapport aux technologies plus traditionnelles de l'agence. Next.js, en tant que framework récent, m'a impressionné par sa <span class="text-color">facilité d'utilisation et son efficacité.</span></p>
                    </div>
                </div>
                <div class="second-man text-only">
                    <div class="bloc Front">
                        <p>Dans ce projet, j'ai principalement travaillé sur l'intégration en front-end, et j'ai également eu l'opportunité d'initier une fonctionnalité cruciale : l'internationalization routing. J'ai intégré un module de routage internationalisé qui permet de rediriger les utilisateurs vers les bonnes pages en fonction de la langue choisie. Ce projet m'a permis de développer davantage mes compétences, notamment dans le cadre de la compétence <span class="text-color">"Développer à l’aide d’un framework de développement côté client".</span></p>
                    </div>
                </div>
                <div class="titre_li">
                    <h3>Microservice Symfony</h3>
                    <div class="iut"><img src="../images/commun/iut-troyes.png" alt="un projet IUT"></div>
                </div>
                <div class="second-man text-only">
                    <div class="bloc Front">
                        <p>Lors de mon cursus à l'IUT, j'ai eu l'opportunité de développer un projet utilisant <span class="text-color">Symfony</span>, un framework de développement <span class="text-color">côté serveur</span>, pour créer un microservice innovant. Ce microservice permet de convertir une URL de site internet en un fichier PDF, en s'appuyant sur le service Guttemberg. Ce projet a été particulièrement enrichissant, car il m'a permis de découvrir et de comprendre le concept des microservices ainsi que leur rôle crucial dans les architectures modernes.</p>
                    </div>
                </div>
                <div class="second-man img-only">
                    <div class="les_img">
                        <img class="img_liste" src="../images/annee_2/img_dev/todo.gif" alt="Intégration Todo list en Backbone.Js">
                    </div>
                </div>
                <div class="first-man text-only">
                    <div class="bloc Front">
                        <p>Le projet se décompose en deux parties principales. Tout d'abord, un projet Symfony dédié au <span class="text-color">front-end avec Twig</span> où l'utilisateur soumet l'URL qu'il souhaite convertir. Ensuite, cette URL est transmise à un second projet Symfony, qui gère le traitement côté serveur. Ce second service envoie l'URL à Guttemberg pour la convertir en PDF, puis renvoie le fichier PDF généré au front-end pour que l'utilisateur puisse le télécharger.</p>
                    </div>
                </div>
                <div class="second-man img-only">
                    <div class="les_img">
                        <img class="img_liste" src="../images/annee_3/img_dev/Postman.png" alt="">
                    </div>
                </div>
                <div class="first-man text-only">
                    <div class="bloc Front">
                        <p>L'un des objectifs clés de ce projet était de créer un véritable produit vendable sous forme d'abonnement, avec différents plans tarifaires. Chaque utilisateur se voit attribuer un nombre limité de conversions en fonction du plan choisi. La gestion et la sécurisation de ces fonctionnalités sont assurées par une base de données gérant la création de comptes, les différents plans et leurs relations.</p>
                    </div>
                </div>
                <div class="second-man img-only">
                    <div class="les_img">
                        <img class="img_liste" src="../images/annee_3/img_dev/Postman.png" alt="">
                    </div>
                </div>
                <div class="first-man text-only">
                    <div class="bloc Front">
                        <p>Ce projet m'a permis de développer mes compétences en <span class="text-color">"Développer à l’aide d’un framework de développement côté serveur"</span>, car j'ai pu mettre en pratique les principes de modularité et de découplage que permet une architecture basée sur des <span class="text-color">microservices</span>. Grâce à Symfony, j'ai appris à structurer des services autonomes qui peuvent être déployés, maintenus et mis à jour de manière <span class="text-color">indépendante</span>, tout en interagissant de manière fluide avec d'autres services. Cette approche offre une flexibilité et une scalabilité importantes, permettant d'améliorer ou de remplacer des modules spécifiques sans avoir à toucher l'ensemble du système.</p>
                    </div>
                </div>
                <div class="titre_li">
                    <h3>Projet Wordpress Three.js</h3>
                    <div class="iut"><img src="../images/commun/iut-troyes.png" alt="un projet IUT"></div>
                </div>
                <div class="first-man text-only">
                    <div class="bloc Front">
                        <p>Dans le cadre de notre projet à l'IUT, nous avons travaillé en autonomie sur un Proof of Concept (POC) pour une entreprise, avec pour objectif de créer un visualisateur de produits en 3D destiné à des sites E-commerce. Ce projet, réalisé en collaboration avec un partenaire, a été particulièrement enrichissant car il nous a permis de découvrir et de manipuler des technologies nouvelles pour nous, comme WordPress, WooCommerce, Three.js, et React.js, tout en renforçant nos compétences en travail de groupe et en communication.</p>
                    </div>
                </div>
                <div class="second-man img-only">
                    <div class="les_img">
                        <img class="img_liste" src="../images/annee_2/img_dev/backbone.gif" alt="">
                        <p class="img-title">Mind Map codée en Backbone.js</p>
                    </div>
                </div>
                <div class="first-man text-only">
                    <div class="bloc Front">
                        <p>Le Contexte du Projet</p>
                        <br />
                        <p>L'entreprise Groupe Echo, spécialisée dans la création digitale, cherchait à intégrer un visualisateur de produits 3D dans ses sites E-commerce, basés sur WordPress/WooCommerce. Bien que nos tentatives de contact avec l'entreprise n'aient pas abouti, nous avons mené à bien ce projet en autonomie, en respectant les exigences techniques du cahier des charges.</p>
                    </div>
                </div>
                <div class="first-man text-only">
                    <div class="bloc Front">
                        <p>Le Plugin WordPress</p>
                        <br />
                        <p>Pour ce projet, nous avons conçu et développé un plugin WordPress personnalisé qui ajoute un champ d'entrée dans le back-office de WooCommerce pour chaque produit. Ce champ permet d'insérer un lien vers un fichier GLB hébergé sur un serveur. Lorsqu'il est renseigné, le plugin remplace la visualisation traditionnelle du produit par un canvas affichant un visualisateur 3D, développé avec Three.js et React.js. Cette réalisation a mis en pratique notre compétence à concevoir et développer des composants logiciels, tels que des plugins et des extensions, en intégrant des fonctionnalités avancées dans une plateforme existante.</p>
                    </div>
                </div>
                <div class="second-man img-only">
                    <div class="les_img">
                    <video class="img_liste" autoplay="" loop="" playsinline="">
                        <source type="video/webm">
                        <source src="../images/annee_3/img_dev/Woocommerce.mov" type="video/mp4">
                    </video>
                    </div>
                </div>
                <div class="second-man img-only">
                    <div class="les_img">
                        <p>Nous avons mis en place un système de communication entre WordPress et le canvas distant grâce à la méthode postMessage, permettant d'envoyer le lien GLB et de gérer les variations de produits. Ce mécanisme assure une mise à jour dynamique du modèle 3D en fonction des sélections faites par l'utilisateur sur le site E-commerce.</p>
                    </div>
                </div>
                <div class="first-man text-only">
                    <div class="bloc Front">
                        <br />
                        <p>Le Serveur Three.js</p>
                        <br />
                        <p>Nous avons également mis en place un système de communication entre WordPress et le canvas distant grâce à la méthode postMessage, permettant d'envoyer le lien GLB et de gérer les variations de produits. Ce mécanisme assure une mise à jour dynamique du modèle 3D en fonction des sélections faites par l'utilisateur sur le site E-commerce, démontrant notre capacité à développer des dispositifs interactifs sophistiqués.<p>
                    </div>
                </div>
                <div class="second-man img-only">
                    <div class="les_img">
                        <video class="img_liste" autoplay="" loop="" playsinline=""><source type="video/webm"><source src="../images/annee_3/img_dev/Watch-WP.mov" type="video/mp4"></video>
                    </div>
                </div>
                <div class="first-man text-only">
                    <div class="bloc Front">
                        <p>Le visualisateur 3D lui-même est hébergé sur un serveur externe, géré via React.js, et est intégré dans le plugin WordPress par le biais d'un iframe. Three.js est utilisé pour afficher le modèle en 3D et adapter les matériaux en temps réel en fonction des variations choisies, ce qui permet de créer une expérience utilisateur interactive et immersive, essentielle dans le domaine du E-commerce.</p>
                        <br />
                        <p>Ce projet a été l'occasion de combiner la conception de composants logiciels et le développement de dispositifs interactifs avancés, tout en travaillant sur une architecture modulaire et intégrée.</p>
                    </div>
                </div>
                <div class="titre_li">
                    <h3>Maintenance et Automatisation du Développement</h3>
                    <div class="perso">Projet Perso</div>
                </div>
                <div class="first-man text-only">
                    <div class="bloc Front">
                        <p>Maintien et Sécurisation d’un Environnement Numérique</p>
                        <br />
                        <p>Dans le cadre de mes projets, j'ai participé à la maintenance des environnements en documentant les bugs via des tickets et en mettant à jour les README pour refléter les nouvelles fonctionnalités et modifications. J'ai également mis en place des linters front-end pour garantir la qualité du code et géré les mises à jour des outils utilisés sur plusieurs projets, en testant chaque version pour éviter les régressions.</p>
                        <p>Concernant la sécurité au sein de l'entreprise, j'ai dû me familiariser avec les pratiques de sécurité web notament avec les accès Gitlab. Chaque projet était protégé par des clés d'accès, ce qui signifiait qu'il fallait demander l'autorisation pour chaque projet. Cela pouvait entraîner une certaine rigidité, rendant difficile un accès rapide ou l'assistance à un collègue sur un projet. Conscient de cette problématique, le pôle SI, qui gère l'infrastructure informatique et la sécurité, a développé un outil interne permettant de s'accorder soi-même des accès temporaires à un projet, simplifiant ainsi ces processus tout en maintenant la sécurité.</p>
                    </div>
                </div>
                <div class="first-man text-only">
                    <div class="bloc Front">
                        <p>Mise en Place d'une Chaîne d'Intégration Continue</p>
                        <br />
                        <p>Pour me former à l'intégration continue (CI) et au déploiement continu (CD) sur GitLab, j'ai réalisé un projet personnel avec Vue.js pour créer un package ES6. J'ai mis en place une CI/CD dans GitLab qui déclenchait automatiquement des actions spécifiques lors des différents merges. Ces actions incluaient le déploiement de mon package sur un dépôt GitLab, accessible au sein du groupe que j'avais créé.</p>
                        <br />
                        <p>En parallèle, j'ai développé un autre projet Vue.js dans le même groupe pour récupérer et installer ce package. J'ai également mis en place des tests d'installation du package, en utilisant les runners GitLab, des machines dédiées qui exécutent les jobs des pipelines. Ces pipelines automatisent le processus de test et de déploiement, assurant ainsi que chaque nouvelle version du package est correctement intégrée et déployée. Enfin, le projet final, avec le package installé, a été publié automatiquement sur GitLab avec un artifact directement accessible en front, ce qui a permis de valider l'ensemble du processus CI/CD mis en place.
                    </div>
                </div>
            </li>
            <li class="titre_li final_link">
                <h3>
                    <a href="entreprendre.php" class="next_button">
                        <span class="next_arrow">➔</span>
                        <span class="next_text">Continuer vers Entreprendre</span>
                    </a>
                </h3>
            </li>
        </ul> 
    </div>
</div>
<?php
    require('../commun/footer.php');
    require('../commun/fin.php');
?>