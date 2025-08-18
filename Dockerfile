# Etapa 1 - Build
FROM node:20-alpine AS builder

# Cria diretório de trabalho
WORKDIR /app

# Copia apenas package.json e package-lock.json primeiro (cache)
COPY package*.json ./

# Instala dependências
RUN npm install --frozen-lockfile

# Copia o resto do código
COPY . .

# Builda a aplicação Next.js
RUN npm run build

# Etapa 2 - Runtime
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# Copia apenas o necessário do build
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.* ./ 

# Porta padrão do Next.js
EXPOSE 3000

# Inicia a aplicação
CMD ["npm", "start"]