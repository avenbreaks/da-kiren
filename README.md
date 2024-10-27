# Running Kiren

### Docker (Recommended)
Docker is the recommended way to run Kiren. This will expose Kiren as a webapp.

Configuration is done through environment variables, the best way to get started is by copying .env.example to .env and editing the relevant sections (typically, this would at least include BEACON_URL, VALIDATOR_URL and API_TOKEN)

Then to run the image:

```bash
docker run --rm -ti --name kiren -p 3443:443 --env-file $PWD/.env sigp/kiren
```

This will open port 3443 and allow your browser to connect.

To start Kiren, visit https://localhost:3443 in your web browser (ignore the certificate warning).

Advanced users can mount their own certificate (the config expects 3 files: /certs/cert.pem /certs/key.pem /certs/key.pass)