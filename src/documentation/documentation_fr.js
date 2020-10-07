import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { github } from "react-syntax-highlighter/dist/esm/styles/hljs";
const DocumentationBodyFr = ({ props }) => {
  return (
    <>
      <BodyTop />
      <Overview />
      <SelectingLanguage />
      <Print />
      <Variables />
      <Types />
      <GeneralOperators />
      <Conditionals />
      <BooleanOperators />
      <Loops />
      <CustomFunctions />
      <PreBuiltFunctions />
      <Comments />
      <KeyWords />
    </>
  );
};

const BodyTop = () => {
  return (
    <>
      <div className="text-center pt-2">
        <h1>Oui++ Documentation</h1>
        <p>Par Coby Forrester</p>
        <p>Traduit Par Julie Poirson</p>
      </div>
    </>
  );
};

const Overview = () => {
  return (
    <>
      <div className="container py-2">
        <div className="row">
          <div className="col align-self-center">
            <h3>Aperçu</h3>
            <p>
              Oui++ est un language de programmation, écrit à la fois en
              français et en anglais ! Bien qu'il possède une structure
              similaire à celle de Python, Oui++ est différent de plusieurs
              manières distinctes. Ce language, interprété (par Java), est typé
              dynamiquement, emploie le passer-par-valeur (je sais, très
              inéfficace n'est-ce-pas) et les espaces sont généralement ignorés,
              à l'exclusion de la plupart des nouvelles lignes. Ce language est
              manifestement un projet personnel et pourtant il prend en charge
              de nombreux aspects nécessaires dans les langues à usages
              générales ! La documentation en français est disponible
              ci-dessous. Enjoy :)
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col align-self-center border-bottom"></div>
        </div>
      </div>
    </>
  );
};

const KeyWords = () => {
  return (
    <>
      <div className="container py-2">
        <div className="row">
          <div className="col-5 align-self-center">
            <h3>Mots clés</h3>
            <p>Liste de tous les mots clés utilisés.</p>
            <table className="table table-hover">
              <thead>
                <tr className="borderless">
                  <th>Anglais</th>
                  <th>Français</th>
                  <th>Sensible à la casse</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>print</td>
                  <td>imprimer</td>
                  <td>Non</td>
                </tr>
                <tr>
                  <td>if</td>
                  <td>si</td>
                  <td>Non</td>
                </tr>
                <tr>
                  <td>else if, elif</td>
                  <td>ou bien si</td>
                  <td>Non</td>
                </tr>
                <tr>
                  <td>else</td>
                  <td>sinon</td>
                  <td>Non</td>
                </tr>
                <tr>
                  <td>func</td>
                  <td>fonc</td>
                  <td>Non</td>
                </tr>
                <tr>
                  <td>return</td>
                  <td>retourner</td>
                  <td>Non</td>
                </tr>
                <tr>
                  <td>for</td>
                  <td>pour</td>
                  <td>Non</td>
                </tr>
                <tr>
                  <td>while</td>
                  <td>tant que</td>
                  <td>Non</td>
                </tr>
                <tr>
                  <td>null</td>
                  <td>null</td>
                  <td>Non</td>
                </tr>
                <tr>
                  <td>true</td>
                  <td>vrai</td>
                  <td>Non</td>
                </tr>
                <tr>
                  <td>false</td>
                  <td>faux</td>
                  <td>Non</td>
                </tr>
                <tr>
                  <td>len</td>
                  <td>long</td>
                  <td>Oui</td>
                </tr>
                <tr>
                  <td>append</td>
                  <td>ajouter</td>
                  <td>Oui</td>
                </tr>
                <tr>
                  <td>addAt</td>
                  <td>ajouterÀ, ajouterA</td>
                  <td>Oui</td>
                </tr>
                <tr>
                  <td>get</td>
                  <td>obtenir</td>
                  <td>Oui</td>
                </tr>
                <tr>
                  <td>remove</td>
                  <td>retirer</td>
                  <td>Oui</td>
                </tr>
                <tr>
                  <td>set</td>
                  <td>remplacer</td>
                  <td>Oui</td>
                </tr>
                <tr>
                  <td>put</td>
                  <td>mettre</td>
                  <td>Oui</td>
                </tr>
                <tr>
                  <td>sub</td>
                  <td>sub</td>
                  <td>Oui</td>
                </tr>
                <tr>
                  <td>getKeys</td>
                  <td>obtenirClés, obtenirCles</td>
                  <td>Oui</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row">
          <div className="col align-self-center border-bottom"></div>
        </div>
      </div>
    </>
  );
};

const Types = () => {
  return (
    <>
      <div className="container py-2">
        <div className="row">
          <div className="col align-self-center">
            <h3 className="pb-3">Types</h3>
            <dl className="row">
              <dt className="col-sm-2">Int</dt>
              <dd className="col-sm-10">
                <p>8 bytes.</p>
              </dd>

              <dt className="col-sm-2">Double</dt>
              <dd className="col-sm-10">
                <p>8 bytes. 15-16 points de précisions.</p>
              </dd>

              <dt className="col-sm-2">Boolean</dt>
              <dd className="col-sm-10">
                <p>vrai OU faux. Insensible à la casse.</p>
              </dd>
              <dt className="col-sm-2">String</dt>
              <dd className="col-sm-10">
                <p>
                  <code>''</code> ET <code>""</code> sont valides.{" "}
                  <code>\</code> caractère d'échappement. <code>\n</code>
                  =nouvelle ligne, <code>\t</code>=tab.
                </p>
              </dd>
              <dt className="col-sm-2">List</dt>
              <dd className="col-sm-10">
                <p>
                  Mutable. Accepte toute sorte de type comme valeur. Ex:{" "}
                  <code>['bonjour', vrai, (100 - 2 ^ 10), [10]]</code>
                </p>
              </dd>
              <dt className="col-sm-2">Map</dt>
              <dd className="col-sm-10">
                <p>
                  Mutable. Ordre d'insertion maintenu. Pas de doublon. Accepte
                  toute sorte de type comme valeur ou clé. Ex:{" "}
                  <code>$|'x':10, 'y':10, vrai:20|</code>
                </p>
              </dd>
              <dt className="col-sm-2">Null</dt>
              <dd className="col-sm-10">
                <p>
                  Type ne représentant aucune valeur. Est imprimé si la fonction
                  ne retourne rien, peut aussi bien être assigné à des
                  variables. Insensible à la casse.
                </p>
              </dd>
            </dl>
          </div>
        </div>
        <div className="row">
          <div className="col align-self-center border-bottom"></div>
        </div>
      </div>
    </>
  );
};

const BooleanOperators = () => {
  return (
    <>
      <div className="container py-2">
        <div className="row">
          <div className="col align-self-center">
            <h3 className="pb-3">
              Opérateurs booléens (Retourne des valeurs bouléennes)
            </h3>
            <dl className="row">
              <dt className="col-sm-1">{"!"}</dt>
              <dd className="col-sm-11">
                <p>Pas un opérateur. Convertit les booléens en leur opposé.</p>
              </dd>
              <dt className="col-sm-1">&&</dt>
              <dd className="col-sm-11">
                <p>
                  Opérateur ET. Si deux booléens sont vrais, vrai est retourné.
                  Sinon faux est retourné.
                </p>
              </dd>
              <dt className="col-sm-1">||</dt>
              <dd className="col-sm-11">
                <p>
                  Opérateur OU. Si sur deux valeurs booléennes comparées, au
                  moins une est vraie, vrai est retourné. Sinon faux est
                  retourné.
                </p>
              </dd>
              <dt className="col-sm-1">==</dt>
              <dd className="col-sm-11">
                <p>
                  Vérifie l'égalité. Si les nombres sont comparés, compare la
                  valeur. Sinon compare les valeurs en tant que chaîne de
                  caractères.
                </p>
              </dd>
              <dt className="col-sm-1">!=</dt>
              <dd className="col-sm-11">
                <p>
                  Vérifie l'inégalité. Si les nombres sont comparés, compare la
                  valeur. Sinon compare les valeurs en tant que chaîne de
                  caractères.
                </p>
              </dd>

              <dt className="col-sm-1">{"<"}</dt>
              <dd className="col-sm-11">
                <p>
                  Inférieur à. Si les nombres sont comparés, compare la valeur.
                  Sinon compare les valeurs en tant que chaîne de caractères. Ne
                  fonctionne pas pour les listes, les maps et les bouléens.
                </p>
              </dd>
              <dt className="col-sm-1">{"<="}</dt>
              <dd className="col-sm-11">
                <p>
                  Inférieur ou égale à. Si les nombres sont comparés, compare la
                  valeur. Sinon compare les valeurs en tant que chaîne de
                  caractères. Ne fonctionne pas pour les listes, les maps et les
                  bouléens.
                </p>
              </dd>
              <dt className="col-sm-1">{">"}</dt>
              <dd className="col-sm-11">
                <p>
                  Supérieur à. Si les nombres sont comparés, compare la valeur.
                  Sinon compare les valeurs en tant que chaîne de caractères. Ne
                  fonctionne pas pour les listes, les maps et les bouléens.
                </p>
              </dd>
              <dt className="col-sm-1">{">="}</dt>
              <dd className="col-sm-11">
                <p>
                  Supérieur ou égal à. Si les nombres sont comparés, compare la
                  valeur. Sinon compare les valeurs en tant que chaîne de
                  caractères. Ne fonctionne pas pour les listes, les maps et les
                  bouléens.
                </p>
              </dd>
            </dl>
          </div>
        </div>
        <div className="row">
          <div className="col align-self-center border-bottom"></div>
        </div>
      </div>
    </>
  );
};

const GeneralOperators = () => {
  return (
    <>
      <div className="container py-2">
        <div className="row">
          <div className="col align-self-center">
            <h3 className="pb-3">Opérateurs généraux</h3>
            <dl className="row">
              <dt className="col-sm-1">{"="}</dt>
              <dd className="col-sm-11">
                <p>
                  Opérateur d'assignation. Assigne une valeur à une variable.
                </p>
              </dd>
              <dt className="col-sm-1">+=</dt>
              <dd className="col-sm-11">
                <p>
                  Ajoute la valeur des variables précédemment initialisées à la
                  nouvelle valeur attribuée. Les variables doivent être
                  initialisées au préalable.
                </p>
              </dd>

              <dt className="col-sm-1">-=</dt>
              <dd className="col-sm-11">
                <p>
                  Soustrait la valeur nouvellement attribuée des variables de
                  celle précédemment attribuée. Les variables doivent être
                  initialisées au préalable.
                </p>
              </dd>

              <dt className="col-sm-1">+</dt>
              <dd className="col-sm-11">
                <p>
                  Addition. Integer+Double {"=>"} Double. String+(Tout sauf
                  Null) {"=>"} String. Fonctionne aussi avec des lists.
                </p>
              </dd>
              <dt className="col-sm-1">-</dt>
              <dd className="col-sm-11">
                <p>
                  Soustraction. Ne fonctionne qu'avec des Integers et des
                  Doubles. Integer-Double {"=>"} Double.
                </p>
              </dd>
              <dt className="col-sm-1">*</dt>
              <dd className="col-sm-11">
                <p>
                  Multiplication. (Integers positifs incluant 0)*(une list ou
                  une string) est valide. [10,2] * 2 = [10,2,10,2], 'salut' * 0
                  = ''. Integer*Double {"=>"} Double.
                </p>
              </dd>
              <dt className="col-sm-1">/</dt>
              <dd className="col-sm-11">
                <p>
                  Division. Integer/Integer {"=>"} Integer. En d'autres termes,
                  la division d'Integer est celle par défaut. Cependant
                  Integer/Double {"=>"} Double.
                </p>
              </dd>
              <dt className="col-sm-1">%</dt>
              <dd className="col-sm-11">
                <p>Opération modulo. Ne fonctionne que pour les Integers.</p>
              </dd>
              <dt className="col-sm-1">^</dt>
              <dd className="col-sm-11">
                <p>
                  Puissance. Fonctionne avec des Integers ou des Doubles.
                  Integer^Double {"=>"} Double
                </p>
              </dd>
            </dl>
          </div>
        </div>
        <div className="row">
          <div className="col align-self-center border-bottom"></div>
        </div>
      </div>
    </>
  );
};

const PreBuiltFunctions = () => {
  return (
    <>
      <div className="container py-2">
        <div className="row">
          <div className="col align-self-center">
            <h3 className="pb-3">Fonctions prédéfinies</h3>
            <p className="pb-4">
              Liste des fonctions prédéfinies ci-dessous. ITEM signifie
              n'importe quel type. arg1 = argument 1, arg2 = argument 2...
            </p>
            <dl className="row">
              <dt className="col-sm-4">long(LIST|MAP|STRING)</dt>
              <dd className="col-sm-8">
                <p>Retourne la longueur de l'objet.</p>
              </dd>
              <dt className="col-sm-4">ajouter(LIST, ITEM)</dt>
              <dd className="col-sm-8">
                <p>
                  Arg2 est ajouté à la fin de la liste spécifiée. Une nouvelle
                  liste est retournée.
                </p>
              </dd>

              <dt className="col-sm-4">ajouterÀ(LIST, ITEM, INT)</dt>
              <dd className="col-sm-8">
                <p>Ajoute arg2 à la liste à l'index spécifié par arg3.</p>
              </dd>

              <dt className="col-sm-4">obtenir(LIST|STRING, INT)</dt>
              <dd className="col-sm-8">
                <p>Retourne la valeur indexée par arg2 dans arg1. </p>
              </dd>
              <dt className="col-sm-4">obtenir(MAP, ITEM)</dt>
              <dd className="col-sm-8">
                <p>
                  Retourne la valeur attachée à la clé indiquée par arg2 de la
                  map de arg1.
                </p>
              </dd>
              <dt className="col-sm-4">retirer(LIST, INT)</dt>
              <dd className="col-sm-8">
                <p>
                  La valeur indexée à arg2 est retirée de arg1. Retourne une
                  nouvelle liste.
                </p>
              </dd>
              <dt className="col-sm-4">retirer(MAP, ITEM)</dt>
              <dd className="col-sm-8">
                <p>
                  Retire la paire valeur / clé de la map dans arg1, arg 2 étant
                  la clé. Retourne une nouvelle map
                </p>
              </dd>
              <dt className="col-sm-4">remplacer(LIST, ITEM, INT)</dt>
              <dd className="col-sm-8">
                <p>
                  Remplace la valeur de la liste de arg1 à l'emplacement
                  spécifié par arg3 par la valeur spécifié dans arg2, puis
                  retourne une nouvelle liste.
                </p>
              </dd>
              <dt className="col-sm-4">mettre(MAP, ITEM, ITEM)</dt>
              <dd className="col-sm-8">
                <p>
                  Ajoute une pair valeur / clé à la map dans arg1, arg2 étant la
                  clé et arg3 la valeur. Si la clé est déjà présente, la valeur
                  est remplacée. Puis une nouvelle map est retournée
                </p>
              </dd>
              <dt className="col-sm-4">sub(LIST|STRING, INT, INT)</dt>
              <dd className="col-sm-8">
                <p>
                  Retourne une sublist ou une substring à partir de arg1, aux
                  index de arg2 inclus jusqu'à arg3 exclus. De arg2 à arg3.
                </p>
              </dd>
              <dt className="col-sm-4">obtenirClés(MAP)</dt>
              <dd className="col-sm-8">
                <p>Retourne l'array de clés de la map spécifiée.</p>
              </dd>
            </dl>
          </div>
        </div>
        <div className="row">
          <div className="col align-self-center border-bottom"></div>
        </div>
      </div>
    </>
  );
};

const Variables = () => {
  return (
    <>
      <div className="container py-2">
        <div className="row">
          <div className="col align-self-center">
            <h3 className="pb-3">Variables</h3>
            <p>
              Les variables, une fois initialisées, n'ont pas besoin d'avoir un
              type. Elles ont une portée fonctionnelle (scope function) et le
              language de programmation n'effectue pas de hoisting de variable.
              Le regex pour les noms de variables personnalisées valides est :{" "}
              <code>[A-Za-z]+[A-Za-z0-9]*</code>
              <br />
              Les points virgules sont facultatifs.
              <br />
              Vous pouvez retrouver certains exemples de déclarations de
              variable ci-dessous.
            </p>

            <SyntaxHighlighter language="python" style={github}>
              {`
  lang:fr #séléctionner la langue voulue

  i = -10 + -(-+10 * 11) / 7 % 2 #int
  s = 'Hello, '
  s += 'World!' #string
  d = 0.10; #double
  n = null #null
  b = vrai; #boolean
  l = [10, [], 'oui'] #list
  m = $|'x':10, 'y':10, vrai:20| #map
                `}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className="row">
          <div className="col align-self-center border-bottom"></div>
        </div>
      </div>
    </>
  );
};

const CustomFunctions = () => {
  return (
    <>
      <div className="container py-2">
        <div className="row">
          <div className="col align-self-center">
            <h3 className="pb-3">Fonctions personnalisées</h3>
            <p>
              Les fonctions ont besoin de commencer avec fonc ou func (en
              anglais). Pas de déclaration de retour requise et celle-ci
              peut-être vide. Prend en charge la récursivité. Ne prend pas en
              charge les fonctions imbriquées. Le regex pour des noms de
              fonctions personnalisées valides est :
              <code>[A-Za-z]+[A-Za-z0-9]*</code>
              <br />
              Voici quelques exemples de déclarations de fonctions ci-dessous.
            </p>

            <SyntaxHighlighter language="python" style={github}>
              {`
  lang:fr #séléctionner la langue voulue

  # deux fonctions aléatoires
  fonc imprimerVrai(str) {
    imprimer(str)
  }
  fonc ajouterDeux(a, b) {
    retourner a + b
  }

  # imprimer les résultats, l'un avec une fonction l'autre avec imprimer()
  impriemrVrai('Oui++ est vraiment génial!')
  imprimer(ajouterDeux(10, 12))
                `}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className="row">
          <div className="col align-self-center border-bottom"></div>
        </div>
      </div>
    </>
  );
};

const Conditionals = () => {
  return (
    <>
      <div className="container py-2">
        <div className="row">
          <div className="col align-self-center">
            <h3 className="pb-3">Conditionnels</h3>
            <p>Exemple de déclarations ci-dessous !</p>

            <SyntaxHighlighter language="python" style={github}>
              {`
  lang:fr #séléctionner la langue voulue

  x = vrai
  si(!x) {
    imprimer('Dans si')
  } ou bien si ((vrai == !faux) && 10 == 10) {
    imprimer('Dans ou bien si')
  } sinon {
    imprimer('Dans sinon')
  }
                `}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className="row">
          <div className="col align-self-center border-bottom"></div>
        </div>
      </div>
    </>
  );
};

const Comments = () => {
  return (
    <>
      <div className="container py-2">
        <div className="row">
          <div className="col align-self-center">
            <h3 className="pb-3">Commentaires</h3>
            <p>Ligne seule: #, multiligne: ###</p>

            <SyntaxHighlighter language="python" style={github}>
              {`
  lang:fr #séléctionner la langue voulue

  # Ceci est un commentaire sur une seule ligne 

  ### 
    Cela 
    Est
    Un 
    Commentaire
    Multiligne
  ###
                `}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className="row">
          <div className="col align-self-center border-bottom"></div>
        </div>
      </div>
    </>
  );
};

const Loops = () => {
  return (
    <>
      <div className="container py-2">
        <div className="row">
          <div className="col align-self-center">
            <h3 className="pb-3">Boucles</h3>
            <p>
              Les "boucles pour" et les "boucles tant que" sont toutes les deux
              disponibles. Les boucles pour prennent 3 entrées de données, un
              nom de variable, une valeur Integer de début et une de fin. Si la
              valeur de début est supérieure à celle de fin, la boucle comptera
              en sens inverse. Les boucles tant que n'acceptent qu'une seule
              déclaration conditionnelle.
            </p>

            <SyntaxHighlighter language="python" style={github}>
              {`
  lang:fr #séléctionner la langue voulue

  arr = [1, 2, 3, 4, 5]

  # boucle tant que dans arr
  imprimer('BOUCLE TANT QUE:')
  i = 0
  tant que(i < long(arr)) {
    imprimer(obtenir(arr, i))
    i+=1
  }
  
  # La même chose mais avec une boucle pour, en changeant un peu l'array
  imprimer('\\nBOUCLE POUR:')
  arr += ['oui++'] * 5 #  quelques chouettes fonctionnalités de liste 

  pour i -> (0, long(arr)) {
    imprimer(obtenir(arr, i))
  }
                `}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className="row">
          <div className="col align-self-center border-bottom"></div>
        </div>
      </div>
    </>
  );
};

const Print = () => {
  return (
    <>
      <div className="container py-2">
        <div className="row">
          <div className="col align-self-center">
            <h3 className="pb-3">Imprimer</h3>
            <p>
              Pour "sortir" une valeur il suffit d'utiliser imprimer() et de
              placer la valeur entre les (). Chaque nouvelle utilisation doit
              être effectuée sur une nouvelle ligne.
            </p>

            <SyntaxHighlighter language="python" style={github}>
              {`
  lang:fr #sélectionner la langue appropriée

  imprimer(10 + 100)
  imprimer('Oui++ est incroyable, pourquoi est-ce que j'ai imprimé 110 juste avant ?')
                `}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className="row">
          <div className="col align-self-center border-bottom"></div>
        </div>
      </div>
    </>
  );
};

const SelectingLanguage = () => {
  return (
    <>
      <div className="container py-2">
        <div className="row">
          <div className="col align-self-center">
            <h3 className="pb-3">Séléctionner une langue </h3>
            <p>
              La langue par défaut est le français. Il suffit d'ajouter{" "}
              <code>lang:eng</code> pour l'anglais ou
              <code>lang:fr</code> pour le français mais ce dernier reste
              facultatif. La sélection de la langue DOIT être ajoutée tout en
              haut du fichier, sur sa propre ligne (commentaires exclus). <br />{" "}
              Cela n'a aucun effet sur les mots clés qui marchent à la fois en
              français et en anglais, il en va seulement des messages d'erreur.
            </p>

            <SyntaxHighlighter language="python" style={github}>
              {`
  lang:fr #le français est alors sélectionné comme langue 
                `}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className="row">
          <div className="col align-self-center border-bottom"></div>
        </div>
      </div>
    </>
  );
};

export { DocumentationBodyFr };
