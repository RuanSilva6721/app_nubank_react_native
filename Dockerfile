# Escolha uma imagem base com Node 16
FROM node:16

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o arquivo package.json e package-lock.json (ou yarn.lock) para o diretório de trabalho
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie todos os arquivos do projeto para o diretório de trabalho
COPY . .

# Exponha a porta que o aplicativo React Native está usando (por exemplo, 3000)
EXPOSE 3000

# Comando padrão para iniciar o projeto React Native
CMD ["npm", "start"]
