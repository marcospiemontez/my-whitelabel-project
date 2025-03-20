/**
 * .eslint.js
 *
 * ESLint configuration file.
 */

module.exports = {
  root: true,
  env: { node: true },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript",
  ],
  rules: {
    "vue/multi-word-component-names": "off",
    // Proíbe o uso de console.log e outras funções de console no código.
    // Em produção, emite um aviso para indicar que o console foi usado,
    // mas em desenvolvimento, é desabilitado, permitindo o uso do console para depuração.
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",

    // Proíbe o uso de declarações debugger no código.
    // Configurado da mesma forma que "no-console" para exibir um aviso em produção e desativar em desenvolvimento.
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",

    // Define o estilo de quebra de linha permitido no arquivo.
    // Um valor de 0 desativa a regra, significando que não há restrição sobre o estilo de quebra de linha.
    "linebreak-style": 0,

    // Exige que pontos e vírgulas (;) sejam usados no final de cada declaração.
    // Se uma declaração não terminar com um ponto e vírgula, um erro será emitido.
    "semi": ["error", "always"],

    // Define o estilo de citação permitido para strings.
    // Neste caso, é configurado para permitir apenas aspas duplas (double).
    // Se uma string for definida com aspas simples, um erro será emitido.
    "quotes": ["error", "double"],

    // Define o estilo de indentação permitido para o código.
    // Neste caso, é configurado para exigir uma indentação de 2 espaços.
    // A opção { "SwitchCase": 1 } indica que o case dentro de uma instrução switch deve ser indentado em um nível adicional.
    "indent": ["error", 2, { "SwitchCase": 1 }],

    // Define a formatação permitida para espaçamento em torno de vírgulas em declarações e objetos.
    // Exige que não haja espaço antes da vírgula e um espaço depois da vírgula.
    // Se a formatação não estiver de acordo, um erro será emitido.
    "comma-spacing": ["error", { before: false, after: true }],

    // Define o comprimento máximo permitido de uma linha de código.
    // Neste caso, é desabilitado, o que significa que não há limite máximo de comprimento de linha.
    "max-len": "off",

    // Proíbe espaços em branco extras no final das linhas.
    "no-trailing-spaces": "error",

    // Verifica variáveis não utilizadas em código TypeScript
    "@typescript-eslint/no-unused-vars": "error",

    // Configuração para permitir espaço ao redor das chaves em objetos literais
    "object-curly-spacing": ["error", "always"],

    "vue/html-indent": ["error", 2, {
      "attribute": 1,
      "closeBracket": 0,
      "switchCase": 0,
      "ignores": [],
      "baseIndent": 1,
    }],
  },
};
