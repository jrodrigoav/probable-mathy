FROM mcr.microsoft.com/dotnet/sdk:8.0-alpine3.19 AS builder
WORKDIR /build
COPY . .
RUN apk update
RUN apk add nodejs-current npm
WORKDIR /build/frontend
RUN npm install
WORKDIR /build
RUN dotnet publish --configuration Release --output publish
FROM mcr.microsoft.com/dotnet/aspnet:8.0-alpine3.19 AS final
WORKDIR /app
COPY --from=builder /build/publish .
EXPOSE 10000
ENV ASPNETCORE_ENVIRONMENT=Production
ENV ASPNETCORE_HTTP_PORTS=10000
ENV PM_VERSION=2024-03-27
ENTRYPOINT [ "dotnet", "ProbableMathy.dll" ]