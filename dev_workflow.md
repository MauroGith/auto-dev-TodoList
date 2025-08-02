# Guia de Workflow de Desenvolvimento

## Para Cursor AI e Gemini

-----

## ⚠️ PRINCÍPIOS FUNDAMENTAIS

> **ESTAS INSTRUÇÕES SÃO OBRIGATÓRIAS** e devem ser seguidas à risca durante todo o desenvolvimento. Nenhum item pode ser negligenciado. **JAMAIS ASSUMA ALGO - SEMPRE PERGUNTE EM CASO DE DÚVIDAS.**

-----

## 🔄 WORKFLOW PADRÃO

### 1\. 📋 RECEBIMENTO DA TAREFA

  * **Entrada Esperada**: Uma tarefa ou subtarefa clara para desenvolvimento.
  * **Ação Primária**: Identificar o ID da tarefa no sistema **MCP Task Master**.
  * **Saída Esperada**: Reconhecimento do ID da tarefa e prontidão para a próxima etapa.
  * **Instrução para IA**: "Aguarde instruções claras sobre qual tarefa implementar e me forneça o ID assim que identificá-lo."

### 2\. 🔍 OBTENÇÃO DE DETALHES

  * **Ferramenta Essencial**: **MCP Task Master**.
  * **Informações a Extrair**:
      * Título e descrição da tarefa.
      * Dependências (se houver).
      * Critérios de aceitação.
      * Estratégia de teste.
      * Detalhes técnicos específicos.
  * **Instrução para IA**: "Utilize o `MCP Task Master` com o `TASK_ID` para extrair todos os detalhes necessários. Liste os detalhes essenciais após a extração."

### 3\. 🧠 PLANEJAMENTO COM DEEPTHINK

  * **Objetivo**: Criar um plano de ação detalhado e executável.

  * **Ferramenta/Metodologia**: `deepthink` (um processo de raciocínio aprofundado para planejamento).

  * **Princípios Orientadores**:

      * ✅ **Simplicidade**: Priorizar a solução mais direta e eficaz.
      * ❌ **Evite overengineering**: Não introduzir complexidade desnecessária.
      * 🎯 **Elegância**: Buscar soluções limpas, modulares e bem estruturadas.
      * 📝 **Documentação**: O plano deve ser claro, conciso e fácil de seguir.

  * **Template do Plano Deepthink (Saída Esperada da IA)**:

    ```
    ## Análise da Tarefa
    - Objetivo principal: [Descrição concisa do que a tarefa deve alcançar]
    - Dependências identificadas: [Liste quaisquer pré-requisitos ou outras tarefas]
    - Impacto no sistema: [Descreva as áreas do código ou funcionalidades que serão afetadas]

    ## Abordagem Escolhida
    - Solução proposta: [Visão geral da solução a ser implementada]
    - Justificativa da simplicidade: [Explique por que esta é a abordagem mais simples/elegante]
    - Componentes a serem modificados/criados: [Liste arquivos, módulos, classes, etc.]

    ## Passos de Implementação
    1. [Passo específico e atômico, ex: "Criar o arquivo X com a estrutura inicial"]
    2. [Passo específico, ex: "Implementar a função Y para processar dados Z"]
    3. [Passo específico, ex: "Adicionar testes unitários para a função Y"]
    (Adicionar mais passos conforme necessário)

    ## Validação
    - Critérios de sucesso: [Como saberemos que a tarefa foi concluída com sucesso? Baseado nos critérios de aceitação]
    - Pontos de verificação: [Etapas intermediárias ou testes para garantir o progresso correto]
    ```

  * **Instrução para IA**: "Com base nos detalhes da tarefa, elabore um plano `deepthink` utilizando o template fornecido. Priorize simplicidade e elegância na solução proposta."

### 4\. 📊 ATUALIZAÇÃO DE STATUS - INÍCIO

  * **Ação Essencial**: Marcar a tarefa/subtarefa como `in-progress` no Task Master.
  * **Verificação**: Confirmar que o status foi atualizado com sucesso.
  * **Instrução para IA**: "Atualize o status da tarefa para `in-progress` no MCP Task Master e confirme a atualização."

### 5\. ⚙️ IMPLEMENTAÇÃO

  * **Orientação**: Seguir estritamente o plano `deepthink` previamente elaborado.
  * **Práticas de Código**:
      * **Commits**: Realizar commits pequenos e frequentes.
      * **Foco**: Manter o foco no essencial.
      * **Comentários**: Adicionar comentários claros e concisos onde necessário.
      * **Testes**: Escrever testes conforme a estratégia definida.
      * **Refatoração**: Realizar refatorações incrementais.
  * **Instrução para IA**: "Inicie a implementação seguindo o plano `deepthink`. Mantenha um registro dos arquivos modificados e adicione testes conforme necessário. Me avise quando a implementação principal estiver concluída."

### 6\. ✅ ATUALIZAÇÃO DE STATUS - CONCLUSÃO

  * **Ação Primária**: Marcar a tarefa/subtarefa como `done` no Task Master.
  * **Verificação**: Confirmar que o status foi atualizado corretamente.
  * **Informação Adicional**: Atualizar a tarefa no Task Master com detalhes relevantes da implementação, se houver campo.
  * **Instrução para IA**: "Atualize o status da tarefa para `done` no MCP Task Master. Confirme a atualização."

### 7\. 📢 NOTIFICAÇÃO DE FINALIZAÇÃO

  * **Ação Final**: Notificar a conclusão da tarefa.

  * **Formato da Notificação (Saída Esperada da IA)**:

    ```
    ✅ Tarefa #[ID] concluída com sucesso

    📋 [Título da tarefa]
    🔧 Implementação: [breve resumo da solução implementada]
    ✔️ QA: Passou em todas as verificações
    💾 Commit: [hash do commit final]
    📝 Log: Registrado no Basic Memory MCP
    ```

  * **Instrução para IA**: "Gere a notificação de finalização da tarefa no formato especificado, incluindo o `TaskID`, título, breve resumo da implementação, status do QA, hash do commit e confirmação do log."

-----

## 🛠️ COMANDOS E FERRAMENTAS (Referência Rápida para IA)

### Comandos Task Master
  * `task-master show {ID_DA_TAREFA}`
  * `task-master set-status --id={ID_DA_TAREFA} --status={NOVO_STATUS}`
-----

## ⚡ VERIFICAÇÕES OBRIGATÓRIAS (Checklist Interno para IA)

### ✅ Antes de Iniciar Desenvolvimento

  * [ ] Tarefa claramente entendida.
  * [ ] Detalhes obtidos via MCP Task Master.
  * [ ] Plano deepthink criado e validado.
  * [ ] Status atualizado para `in-progress`.

### ✅ Durante Desenvolvimento

  * [ ] Plano estabelecido sendo seguido.
  * [ ] Código limpo e bem estruturado.

### ✅ Antes do Commit

  * [ ] Implementação completa conforme tarefa.
  * [ ] Código revisado (auto-revisão pela IA).

### ✅ Após Conclusão

  * [ ] Status atualizado para `done`.
  * [ ] Notificação de conclusão enviada.

-----

## 🚫 O QUE JAMAIS FAZER

  * ❌ Assumir requisitos não especificados.
  * ❌ Overengineering de soluções.
  * ❌ Prosseguir sem atualizar status das tarefas.
  * ❌ Esquecer de registrar logs de desenvolvimento.
  * ❌ Implementar sem plano deepthink.

-----

## 🆘 EM CASO DE PROBLEMAS (Guia de Resolução para IA)

### Dúvidas sobre Requisitos

1.  **Princípio**: **NÃO ASSUMA** - sempre peça esclarecimento.
2.  **Consulta**: Consulte detalhes da tarefa no Task Master.
3.  **Ação**: Solicite esclarecimentos específicos ao usuário ou fonte.
4.  **Registro**: Documente os esclarecimentos para futuras referências.

### Problemas Técnicos

1.  **Consulta**: Consulte logs de desenvolvimento anteriores ou documentação.
2.  **Verificação**: Verifique dependências da tarefa.
3.  **Ação**: Solicite orientação técnica específica ao usuário ou equipe.
4.  **Registro**: Documente a solução para casos similares.

-----

## 📊 MÉTRICAS DE QUALIDADE

O workflow é considerado bem-sucedido quando:

  * ✅ Tarefa implementada conforme especificação.
  * ✅ Status corretamente atualizado no Task Master.
  * ✅ Zero retrabalho necessário.

-----

**Lembre-se: Este workflow garante qualidade, rastreabilidade e consistência. Seguir cada etapa religiosamente é fundamental para o sucesso do projeto.**