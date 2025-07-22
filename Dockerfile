FROM n8nio/n8n

ENV N8N_CUSTOM_EXTENSIONS="/data/custom"

COPY ./custom /data/custom

RUN cd /data/custom && npm install && npm run build || true
