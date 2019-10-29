<?php
  // Include autoloader
  require_once "dompdf/autoload.inc.php";

  // Reference the Dompdf namespace
  use Dompdf\Dompdf;

  // Instantiate dompdf class
  $dompdf = new DOMPDF();

  // Create HTML content
  $html = file_get_contents("index.html");

  // Load HTML content
  $dompdf->loadHtml($html);

  // Load HTML content
  $dompdf->setPaper('A4', 'landscape');

  // Render the HTML as PDF
  $dompdf->render();

  // Output the generated PDF
  $dompdf->stream("ITConnect", array("Attachment" => 0));
?>
