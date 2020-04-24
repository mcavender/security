# Accounting Application

The program uses React and Spring Boot to create a web-based application that
enables a logged in user to create other users.

# Technologies in Spring Boot

The program uses JPA for the database access, H2 for the database, and RESTful
web services.  It also forces a user to login before he is allowed to access
any web pages.  The maven pom also gets the compiled React code and copies it into
the Spring Boot app.  It then produces a single uber jar that can be run by
simply typing "java -jar security-0.0.4.SNAPSHOT.jar"

# Technologies used in React

This uses AdminApp to manage the users.  It also uses axios to perform the
REST communication, which I have created a service called API.js.  It also uses
Hooks and Promises.

# Checkout and Build Instructions

First check out the AdminApp and the security code into separate directories.  
In the security directory, modify the pom.xml.  Change the react.app.path to
point to the place where the React project is.  Also, some users have been
automatically been loaded into the database at runtime,  The users are in the
src/main/resources/data.sql table.  The password is encrypted, but is actually
"user-password". To build everything, type 
"mvn install" in the security directory.  The maven 
pom also gets the compiled React code and copies it into
the Spring Boot app.  It then produces a single uber jar that can be run by
simply typing "java -jar security-0.0.4.SNAPSHOT.jar" 

NOTE:  This command will not compile with Netbeans 8.2, as the maven package
that it has is too old.  It does work with Netbeans 11.x.

# Running the code

The maven 
To run the app, type "java -jar security-0.0.4.SNAPSHOT.jar" at the command
line, or just run it in Netbeans.  To access the App, type "http://localhost:8080/index.html"



