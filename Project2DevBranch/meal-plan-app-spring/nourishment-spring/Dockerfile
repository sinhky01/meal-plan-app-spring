FROM openjdk:8-jre-alpine

#copying our JAR into the image
COPY target/*.jar nourishment-app.jar

#run this app with the command line
CMD ["java", "-jar", "/nourishment-app.jar"]