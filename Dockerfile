# =========================
# 1. Build stage
# =========================
FROM eclipse-temurin:17-jdk AS build

WORKDIR /app

# Copy Maven wrapper and project configuration
COPY .mvn .mvn
COPY mvnw pom.xml ./

# Make Maven wrapper executable
RUN chmod +x mvnw

# Download dependencies
RUN ./mvnw dependency:go-offline -B

# Copy source code
COPY src src

# Build Spring Boot application
RUN ./mvnw clean package -DskipTests


# =========================
# 2. Runtime stage
# =========================
FROM eclipse-temurin:17-jre

WORKDIR /app

# Copy generated JAR from build stage
COPY --from=build /app/target/*.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]