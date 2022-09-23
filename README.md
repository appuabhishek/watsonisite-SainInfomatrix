
<!-- PROJECT LOGO -->
<a name="readme-top"></a>
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="assets/img/sain.jpg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Watsonisite-Sain Infomatrix</h3>

  <p align="center">
  An full stack web project to demonstrate Nosql(mongoDB) database with express.js backend and bootstrap frontend with an account login,register and email subscription features 
    <br />
    <a href="https://github.com/appuabhishek/watsonisite-SainInfomatrix"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://appuabhishek.github.io/watsonisite-SainInfomatrix/#">View Demo live(without backend)</a>
    
   </p>
</div>



<!-- ABOUT THE PROJECT -->
## ABOUT THE PROJECT
This project was an part of our internship under the company sain infomatrix(p) limited banglore.We(team server monks) have developed an full stack web 
apllication about cryptocurrency describing its trends usage and an breif information about the technology(blockchain) 
being used to make an decentralized currency.It also contains an FAQ(frequently asked questions) section about cryptocurrency
Feautres of our website:
* It contains an login and Register feautre with an Bycrpt enabled security mechanism for password encryption with 10 rounds of salting. 
* The login and subscription documents(JSON) are saved in an NoSQL backend mongoDB with password begin saved in the form of hash for better user password confidentiality.
* The Website contain various inspired templates for frontend which was of free to use and open sourced by the authors of templates
* Backend uses an express.js to handle http GET and POST routing mechanism to navigate between various pages


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## GETTING STARTED

Please read the following section carefully in order to succesfully install the requried prerequisites or dependency and run the project 

### PREREQUISTIE PACKAGES
Installation of node is must inorder to run this project 
link to install the node 
 <a href="https://nodejs.org/en/">Click here for Node installation </a>
 after install the node.We recommend to use nodemon package inoder to avoid frequent restarting of node server
 <br>
Open an terminal based interface Hyper or window Terminal in case of Windows or press CTRL+ALT+T in unix/Linux based operating system.
Few of the following packages would be present by default in your system but in that case please do run all the command which may update an package to latest required version
* npm
  ```sh
  npm install -g nodemon
  npm install express body-parser 
  npm install bcrypt
  npm install mongoose
  npm install bootstrap
  npm install jquery
  ```
### STEPS TO RUN PROJECT

We recommend following the steps in sequence in order for sucessfull compliation of the project

1. Clone the repo to your local system either by downloading and extracting the file or running the following command in your terminal
2. copy the command to your terminal
   ```sh
   git clone https://github.com/appuabhishek/watsonisite-SainInfomatrix.git
   ```
3. Install above NPM packages
   
4. start the node server by the below script
   ```js
   mongod
   ```
 5. now change the directory to the project directory by "cd projectFileLocation" command
 6. after run the following script to run the server file 
   ```sh
   nodemon index.js
   ```
7. after you get an message stating "Server started on port 3000." then head to next step else if any error is shown up please follow the instruction carefully again or search the error message on web to get it resolved

8. once the server is up and running its time to install the studio 3T which is an GUI based interface to manage the mangoDB database
   follow the link to install the Studio 3T envirnoment
   <a href="https://studio3t.com/download/?utm_source=adwords&utm_medium=ppc&utm_term=robo%203t&utm_campaign=Leads-Search-244&hsa_net=adwords&hsa_ad=619444943708&hsa_src=g&hsa_ver=3&hsa_grp=140364594443&hsa_acc=1756351187&hsa_tgt=kwd-911792479424&hsa_mt=p&hsa_kw=robo%203t&hsa_cam=10444498727&gclid=Cj0KCQjwsrWZBhC4ARIsAGGUJur0QOOysaFaboE6ukfXbU0hQZfkdPi1WRJEtQJVGd99YkcxqhIe9vsaApZkEALw_wcB">click here to install Studio 3T</a>

9. now change the URL to below code and first register inorder to visit the site
    ```sh
      http://localhost:3000/register
   ```
10. you can also store Email documents in your database by submitting the form in the footer section of the website index page.Thank you 


<p align="right">(<a href="#readme-top">back to top</a>)</p>
  


