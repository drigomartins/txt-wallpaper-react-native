# TXT Wallpaper

**React Native, Expo, Typescript**

App mobile desenvolvido com React Native e Expo, que disponibiliza wallpapers.

**Tecnologias utilizadas:**

- React Native
- Expo
- Typescript
- react-native-google-mobile-ads
- react-native-reanimated
- styled-components

## Estrutura de Pastas

Este projeto segue um padrão de arquitetura baseado no Clean Architecture:

```mermaid
graph LR
A[App] --> B[Domain]
A --> C[Infra]
A --> D[Presentation]
D --> G[Components]
D --> H[Context]
D --> I[Hooks]
D --> J[Pages]
D --> K[Template]
```

## Como executar

    npm install
    npm run start
