import inquirer from "inquirer"
import qr from "qr-image"; 
import fs from "fs";

inquirer.prompt([
    {
      message: "Please enter your link to generate a QR code:",
      name: "URL",
    },
  ])
.then((answers) => {
    const url = answers.URL; 
    const qr_image = qr.image(url, { type: "png" });
    qr_image.pipe(fs.createWriteStream("qr_code.png"));
    fs.writeFile("URL.txt", url, (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
  })
.catch((error) => {
    console.error("An error occurred:", error);
});