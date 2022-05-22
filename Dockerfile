FROM node:16.15.0

# コンテナでアプリを実行するためにためにひ特権ユーザーを作成
RUN useradd --user-group --create-home --shell /bin/false app
ENV HOME=/home/app

USER app
WORKDIR $HOME/src

# ビルド時にinstallをする。まだソースがないので、必要な分はコピー
COPY src/package*.json $HOME/src
COPY src/yarn.lock $HOME/src
RUN yarn install

