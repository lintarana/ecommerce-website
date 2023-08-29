<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, DELETE");
header("Access-Control-Allow-Headers: Content-Type");

include '../connection.php';

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $sql = "SELECT * FROM products";
    $result = $conn->query($sql);

    $products = array();
    while ($row = $result->fetch_assoc()) {
        $products[] = $row;
    }

    echo json_encode($products);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['name']) && isset($_POST['price'])) {
    $name = $_POST['name'];
    $price = $_POST['price'];


    $sql = "INSERT INTO products (name, price) VALUES ('$name', '$price')";
    
    if ($conn->query($sql) === TRUE) {
        echo json_encode(array("message" => "Product added successfully."));
    } else {
        echo json_encode(array("message" => "Error adding product: " . $conn->error));
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'DELETE' && isset($_GET['id'])) {
    $productId = $_GET['id'];
    
    $sql = "DELETE FROM products WHERE id = $productId";
    
    if ($conn->query($sql) === TRUE) {
        echo json_encode(array("message" => "Product removed successfully."));
    } else {
        echo json_encode(array("message" => "Error removing product: " . $conn->error));
    }
}
?>
