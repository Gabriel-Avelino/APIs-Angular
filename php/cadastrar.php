<?php

//Incluir a conexão
include("conexao.php");

//Obter dados
$obterDados = file_get_contents("php://input");

//Extrair os dados do JSON
$extrair = json_decode($obterDados);

//Separar os dados do JSON
$nomeCurso = $extrair->cursos->NomeCurso;
$valorCurso = $extrair->cursos->ValorCurso;

//SQL
$sql = "INSERT INTO cursos (NomeCurso, ValorCurso) VALUES ('$nomeCurso', $valorCurso)";
mysqli_query($conexao, $sql);

//Exportar os dados cadastrados
$curso = [
    [
    'NomeCurso' => $nomeCurso,
    'ValorCurso' => $valorCurso
]
];

echo json_encode(['cursos'=>$curso]);

?>