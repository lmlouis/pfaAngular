# CommunautéPME
Conception et développement d'une plateforme web pour la communauté des PMEs (Petites-Moyennes Entreprise)  .
 mon PFA [voir le site]() 

## Sujet du PFA 


Nous souhaitons regrouper sur une plateforme Web  les adhérents de la communauté, 
qui sont des PMEs, où chaque type d'adhérent (STE industriel, STE de service ou STE commercial) peut exposer sa 
carte de visite, son domaine d'activité et la liste de ses produits / services. Nous voulons avoir une carte map 
sur laquelle les membres apparaissent, avec possibilité de rechercher par domaine d'activité, par type ou par région sur map.

## Environement de Dévéloppement
Exécuter: `ng --version`
- Angular CLI: v13.3.4
- Node: v16.15.0
- Package Manager: npm v8.8.0
- OS: linux x64
- Editeur IDE: Webstorm
- Déploiemment: git v2.25.1 ([github](https://github.com/lmlouis/))
- Base de données : Firebase (noSQl)

## Création du projet

- Exécuter :  `ng new nomProjet`
- Would you like to add Angular routing? `Yes`
- Which stylesheet format would you like to use? `SCSS`
- Angular CLI initialise un dossier `.git` lors de la création du projet

## Mise en place  l'environement de déploiement git  
### Configuration du fichier [.gitignore](https://github.com/lmlouis/pfaAngular/blob/main/.gitignore)
le fichier `.gitignore` contient ce qu'il ne faut pas commiter pour git dans un projet angular CLI
- Le dossier `node_module dependencies`, qui est local au projet et à l'environnement, n'est pas nécessaire pour commettre au dépôt.
- les `fichiers journaux` des paquets de construction comme npm et yarn ainsi que webpack
- les dossiers temporaires comme `tmp`
- le dossier de saisie
- dossier de sortie de l'exécution de la commande npm comme le dossier `dist/output`
- les fichiers de sortie du `compilateur typescript`
- fichiers JavaScript de mappage d'inclusion, le cas échéant
- fichiers spécifiques à l'environnement
- exclure le fichier `package-lock.json`
- `bower_components` si le gestionnaire de paquets utilisé est un bower
- Fichiers spécifiques à l'éditeur ou à l'IDE, comme le dossier `.vscode` pour l'éditeur de code Visual Studio.
- les fichiers `*.sublime-workspace` pour l'éditeur de texte Sublime
- les fichiers `.project` et `classpath` pour eclipse
- les fichiers générés par `TypeScript`
- des fichiers de verrouillage spécifiques à grunt
### Pipline d'Integration-Déploiement Continue
#### .github/workflows/github-ci.yml
- Exécuter : `mkdir .github`
- Exécuter : `mkdir .github/workflows`
- Exécuter : `touch .github/workflows/github-ci.yml`, puis  configurer le fichier [github-ci.yml](https://github.com/lmlouis/pfaAngular/blob/main/.github/workflows/github-ci.yml)

#### .github/workflows/nodejs-ci.yml
- Exécuter : `touch .github/workflows/nodejs-ci.yml`, puis configurer le fichier [nodejs-ci.yml](https://github.com/lmlouis/pfaAngular/blob/main/.github/workflows/github-ci.yml)
#### depot distant github
- Exécuter : `git add .`
- Exécuter : `git commit -m 'création du projet et mise en place des la pipline IC-DC '`
- Exécuter : `git branch -M main`
- Exécuter : `git remote add origin https://githubusername:<Token/Password>@github.com/githubusername/ripository.git`
- Exécuter : `git push origin main`

## Exécution sur server local 

Exécuter : `ng serve`, Url `http://localhost:4200/`


## Mise en place des ressources UI 
### Bootstrap
- Exécuter : `npm install bootstrap@latest --save`
- Ajouter de bootstrapp dans `angular.json` => `"styles": [
  "./node_modules/bootstrap/dist/css/bootstrap.css",
  "src/styles.scss"
  ],`
### Personnalisation de Material Angular
#### Installation de Material Angualar 
- Exécuter : `ng add @angular/material`
- Choose a prebuilt theme name, or "custom" for a custom theme: `Custom`
- Set up global Angular Material typography styles? `Yes`
- Set up browser animations for Angular Material? `Yes`
#### Mise en Place du [Module Material Angular](https://github.com/lmlouis/pfaAngular/blob/materialAngular/src/app/material/material.module.ts)
- Exécuter : `ng g m material`
- voir [material.module.ts](https://github.com/lmlouis/pfaAngular/blob/materialAngular/src/app/material/material.module.ts)
- import MaterialModule dans [appModule](https://github.com/lmlouis/pfaAngular/blob/materialAngular/src/app/app.module.ts)
#### Création du theme customisé
- Exécuter : `touch src/app/material/custom-theme.scss`
- voir [matérial](https://github.com/lmlouis/pfaAngular/tree/materialAngular/src/app/material)
- ajouter le theme dans le  [style.scss](https://github.com/lmlouis/pfaAngular/blob/materialAngular/src/styles.scss)
- ajouter le classe mode lightMode dans [l'indexe.html](https://github.com/lmlouis/pfaAngular/blob/materialAngular/src/styles.scss)
- ajouter dans angular.json => styles : `"./src/app/material/custom-theme.scss",`

### Mise en place de Firebase 
#### installation de firebase 
- Exécuter : `npm install firebase @angular/fire`
- Exécuter : `ng g m firebase`
- configuation firebase dans [environments/environment.ts](https://github.com/lmlouis/pfaAngular/blob/firebase/src/environments/environment.ts)
- voir le [firebsase](https://github.com/lmlouis/pfaAngular/tree/firebase/src/app/firebase)




## Code scaffolding

`ng generate component component-name` 

## Build
 `ng build`

## Running unit tests
`ng test` 

## Running end-to-end tests

 `ng e2e` 

## Further help
`ng help` 
