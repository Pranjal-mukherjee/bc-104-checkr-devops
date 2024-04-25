FROM maven:3.6.3-jdk-11 AS MAVEN_JAR
WORKDIR /code
COPY . .
RUN mvn clean package -DskipTests
 


FROM openjdk:11.0-jdk-slim
WORKDIR /opt
COPY --from=MAVEN_JAR /code/target/*.jar /opt/web.jar
EXPOSE 9001
ENTRYPOINT ["java","-jar","/opt/web.jar"]