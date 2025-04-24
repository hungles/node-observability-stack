# Node Observability Stack

This project simplifies the integration of monitoring tools like Grafana and Prometheus to monitor Node.js applications. Node.js applications are monitored by exposing their metrics using the `prom-client` library.

## Getting Started

To run the project, execute the following command:

```bash
docker-compose up -d --build
```

### Prerequisites

Ensure you have the following installed on your system:
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

### Access Grafana

Once the project is running, you can access Grafana at the following URL:

```
http://localhost:3000
```

## License

This project is licensed under the MIT License.