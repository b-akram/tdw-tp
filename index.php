<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Ecole Prive</title>
    <link rel="stylesheet" href="style.css" type="text/css">
    <script src="assets/jquery-3.3.1.min.js"></script>
    <script src="script.js" defer></script>
</head>

<body class="centder">
<div class="logo">
    <h1>el-Najah
        <bdi>النجاح</bdi>
    </h1>
    <img src="assets/images/classroom.png">
</div>

<div class="img-presentation">
    <div class="wr">
        <div class="wrapper"><img src="assets/images/diapo2.jpg" alt="Presentation" width="100%"></div>
        <div class="wrapper"><img src="assets/images/diapo3.jpg" alt="Presentation" width="100%"></div>
        <div class="wrapper"><img src="assets/images/diapo4.jpg" alt="Presentation" width="100%"></div>
        <div class="wrapper"><img src="assets/images/diapo3.jpg" alt="Presentation" width="100%"></div>


    </div>
</div>
<ul class="formations">
    <?php
    $file = file_get_contents("./formations.json");
    $json = json_decode($file);
    foreach ($json->formations as $key => $formation) {
        echo <<<HTML
    <li class="formation" onclick="console.log('akram');">
        <h2><a class="lien" href="bureutuque">{$formation->name} </a>
        </h2>
         <ol>
HTML;
        foreach ($formation->subFormations as $key => $sub) {
            echo <<<HTML
            <li>$sub</li>
HTML;
        }
        echo <<<HTML
        </ol>
    </li>
HTML;
    }
    ?>
    <!--<li class="formation" onclick="console.log('akram');">
        <h2><a class="lien" href="bureutuque">Bureautique </a>

        </h2>
        <ol>
            <li>word</li>
            <li>excel</li>
            <li>spss</li>
        </ol>
    </li>
-->
</ul>
<h2>Liste des tarifs</h2>

<div class="table-wrapper center">
    <div style="display: inline-block ;width: 75%">
        <table class="table center formations-table">
            <thead>
            <tr>
                <th>Formation</th>
                <th>Volume horaire</th>
                <th>Prix HT</th>
                <th>Tax</th>
                <th>TTC</th>
            </tr>
            </thead>
            <tbody>
            <!-- <tr>
                 <td scope="row">Bureutique</td>
                 <td rowspan="2">45 h</td>
                 <td>1000$</td>
                 <td class="tax" rowspan="2">17%</th>
                 <td>1200$</td>
             </tr>
             -->
            </tbody>

        </table>
    </div>
</div>

<h2>Formations TDw</h2>

<video src="assets/images/Video accueil.mp4" autoplay muted>Video de presentation</video>

<footer>
    <div class="contact center">
        Email pour contacter : <a class="lien" href="mailto://contact@ecole.dz">contact@ecole.dz</a>
    </div>
    <div class="add-formation">
        <div class="d-flex head">
            <div class="col manuel">Manuellement
                <div class="line"></div>
            </div>
            <div class="col file">Fichier
                <div class="line"></div>

            </div>
        </div>
        <form id="manuel">
            <div class="row-info">
                <span for="">formation</span> <input required type="text" name="" id="formation-to-add">
                <span for="">volume</span> <input required type="text" name="f" id="volume">
            </div>
            <div class="row-info">
                <span for="">prix ht</span> <input type="number" id="prix" value="0">
                <span for="">tax </span> <input type="number" id="tax" value="0">
            </div>
            <input type="submit" name="" id="add-formation" value="Ajouter">

        </form>
        <form id="file">
            File <input required type="text" required id="url">
            <input required type="submit" name="" id="add-file-formation" value="Ajouter">
            <table>
                <thead>
                <tr>
                    <th>Formation</th>
                    <th>Volume horaire</th>
                    <th>Prix HT</th>
                    <th>Tax</th>
                    <th>TTC</th>
                </tr>
                </thead>
                <tbody></tbody>
            </table>
            <div class="center">
                <button id="apply">Appliquer</button>
            </div>
        </form>

    </div>
</footer>


</body>

</html>