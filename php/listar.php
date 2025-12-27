<?php 

//Incluir a conexão
include("conexao.php");

//SQL
$sql = "SELECT * FROM cursos";

//Executar
$executar = mysqli_query($conexao, $sql);

//Vetor
$cursos = [];

//Índice
$indice = 0;

//Laço
while($linha = mysqli_fetch_assoc($executar)){
    $cursos[$indice]['idCurso'] = $linha['idCurso'];
    $cursos[$indice]['NomeCurso'] = $linha['NomeCurso'];
    $cursos[$indice]['ValorCurso'] = $linha['ValorCurso'];

    $indice++;
}

//JSON
echo json_encode(['cursos' => $cursos]);

?>