FROM openjdk:8-jre-alpine

#copying our JAR into the image
COPY /root/.jenkins/workspace/nourishment/nourishment-spring/target/nourishment-app.jar nourishment-app.jar

#run this app with the command line
CMD ["java", "-jar", "/nourishment-app.jar"]