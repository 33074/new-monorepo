# -----------------------------
# Stage 1: Build the JAR
# -----------------------------
FROM maven:3.9.11-eclipse-temurin-21 AS build

WORKDIR /app

# Copy pom.xml and download dependencies (cached)
COPY pom.xml .
RUN mvn dependency:go-offline -B

# Copy project source
COPY src ./src

# Build JAR file
RUN mvn clean package -DskipTests

# -----------------------------
# Stage 2: Run the JAR
# -----------------------------
FROM eclipse-temurin:21-jre-ubi9-minimal

WORKDIR /app

# Copy JAR from build stage
COPY --from=build /app/target/*.jar app.jar

# Expose the port your Spring Boot app runs on
EXPOSE 9091

# Run the JAR
ENTRYPOINT ["java","-jar","app.jar"]
