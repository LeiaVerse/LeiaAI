# Leia AI: Your On-Chain Intelligence for the Future of Gaming

Welcome to **Leia AI**, the cutting-edge framework designed for autonomous, intelligent agents to interact, learn, and evolve within on-chain environments. As a part of **LeiaVerse**, Leia AI leverages the power of blockchain technology to create agents that are capable of strategic decision-making, context-aware reasoning, and collaborative learning across decentralized ecosystems.

Leia AI is not bound by any single blockchain, making it truly **chain-agnostic**. Whether you're engaging with Ethereum, Solana, or any other decentralized network, Leia AI seamlessly integrates and operates, empowering the next generation of autonomous on-chain games and decentralized applications.

---

## 🚀 Getting Started with Leia AI

### Prerequisites

Before diving in, ensure you have the following installed:

- **Bun**: A fast JavaScript bundler.
- **Docker**: For running Leia AI in isolated containers.

1. Install dependencies:

```bash
bun install
```

2. Set up environment variables:

```bash
cp .env.sample .env
```

3. Launch Docker to prepare the development environment:

```bash
sh ./docker-launch.sh
```

4. Start an advanced example that demonstrates a goal-oriented agent playing an on-chain strategy game:

```bash
bun start --goal-based-agent
```

This will kick off an agent that autonomously executes complex in-game strategies.

---

## 🔧 How Leia AI Works

Leia AI is built with **flexibility** and **modularity** at its core. You can customize and extend its behavior for any on-chain game or decentralized application by defining **Context**, **Actions**, and **Goals**.

### 1. Defining Game Context

Context is the foundation of any agent's decision-making process. It describes the game state, rules, and available actions. In Leia AI, context is represented as a structured **JSON** object.

Example context for a decentralized strategy game:

```json
{
  "gameState": {
    "playerID": "0xabcdef1234567890",
    "resources": {
      "gold": 500,
      "wood": 150,
      "stone": 80
    },
    "turn": 5,
    "availableActions": ["build", "attack", "trade"]
  },
  "gameRules": {
    "maxTurns": 20,
    "victoryCondition": "controlCastle"
  }
}
```

This context object allows the agent to understand the current game environment, the player's resources, and the rules it must follow.

### 2. Registering Complex Actions

In Leia AI, actions are the tasks the agent can perform. These actions can be registered with intricate parameters and validation rules, ensuring that the agent always makes **valid** decisions on-chain.

For example, registering an action to build a resource structure:

```typescript
// Register a complex action to execute a transaction on Solana blockchain
leia.registerAction(
  "BUILD_STRUCTURE",
  solanaBuildAction,
  {
    description: "Build a resource structure on the Solana blockchain",
    example: {
      contractAddress: "0xabcdef1234567890",
      entryPoint: "build",
      calldata: {
        structureType: "farm",
        location: [45, 75],
        resourcesSpent: { wood: 50, stone: 30 },
      },
    },
    validationSchema: Joi.object({
      structureType: Joi.string().valid("farm", "mine", "warehouse").required(),
      location: Joi.array().length(2).items(Joi.number()).required(),
      resourcesSpent: Joi.object({
        wood: Joi.number().min(0).required(),
        stone: Joi.number().min(0).required(),
      }).required(),
    }),
  },
);
```

In this example, we are registering an action that builds a farm in the game world. The action is validated using **Joi** to ensure it is well-formed and meets the game rules.

### 3. Setting Up Goals and Strategies

Goals represent long-term objectives for your agent, which it will attempt to accomplish autonomously. Leia AI utilizes **Chain of Thought (CoT)** processing, breaking down complex goals into achievable steps.

Example: A goal to gather resources and build a defensive structure:

```typescript
const goal = {
  description: "Gather resources and build a defensive structure.",
  subgoals: [
    {
      action: "GATHER_RESOURCES",
      conditions: {
        resources: { wood: 100, stone: 50 },
      },
    },
    {
      action: "BUILD_DEFENSE",
      conditions: {
        location: [10, 20],
        resourcesSpent: { wood: 50, stone: 30 },
      },
    },
  ],
};

leia.setGoal(goal);
```

The agent will attempt to fulfill this goal by first gathering the required resources, then building the defense. Each subgoal is treated as an individual action that the agent can perform.

### 4. Advanced Event Handling and Progress Monitoring

Leia AI provides event-driven architecture, allowing you to subscribe to critical actions and monitor the agent's progress in real-time.

```typescript
// Track agent's reasoning process
leia.on("thinking:start", ({ query }) => {
  console.log(`Agent is considering: ${query}`);
});

// Capture when actions are completed
leia.on("action:complete", ({ action, result }) => {
  console.log(`Action is taken:`, { action: action.type, result });
});
```

With these events, you can monitor every phase of the agent’s journey, from initial thought processing to final execution.

---

## 🌍 Core Features

Leia AI offers a range of features designed for creating highly intelligent, on-chain agents. Here's a deep dive into the most prominent ones:

### 1. **Chain of Thought (CoT)**

Leia’s CoT engine enables agents to think critically by combining:

- **Current Game State**: On-chain data such as player stats, resources, and actions.
- **Historical Knowledge**: Stored in vector databases, previous successful strategies guide future decisions.
- **Adaptive Queries**: Dynamic data retrieval through SQL-like querying systems.

Example of CoT reasoning in action:

```typescript
leia.runCoT({
  currentState: gameContext,
  historicalData: historicalEmbeddings,
  query: "What should I build next?",
});
```

### 2. **Swarm Learning**

Swarm rooms allow agents to share their knowledge. Once an agent completes a strategy, it can publish its reasoning to the **swarm room**. Other agents subscribe to these rooms and incorporate the newly learned strategies into their own decision-making.

Example of a swarm collaboration:

```typescript
// Share a successful strategy
leia.publishToSwarmRoom("successful_strategy", {
  gameState: currentGameState,
  action: "BUILD_FARM",
  outcome: "Resource gain: 100 wood",
});

// Other agents subscribe to improve their own performance
leia.subscribeToSwarmRoom("successful_strategy");
```

### 3. **Advanced Memory Systems**

The use of **vector databases** enables Leia agents to store long-term memories of their actions, allowing them to refine their strategies over time.

Example of saving and retrieving past decisions:

```typescript
// Save decision embeddings into long-term memory
leia.saveMemory({ action: "build_farm", outcome: "success" });

// Retrieve relevant memories to guide future actions
const relevantMemories = leia.retrieveMemory("build_farm");
```

---

## 🔄 Protocols and Integration

Leia AI’s architecture is open and extensible, allowing integration with external agents, platforms, and smart contract systems. The protocol is modular, so you can swap in different components based on your use case.

- **On-Chain Interaction**: Leia AI seamlessly connects to Ethereum, Solana, and other blockchain ecosystems to execute transactions and monitor states.
- **Modular Components**: Whether it's the CoT kernel, vector database, or swarm rooms, you can tailor Leia AI’s features to suit your needs.

---

## 💡 Example: Advanced Workflow

### Initialization & Setup

1. **Start Leia AI Agent**:

```bash
bun start --advanced --agent-type "strategy-agent"
```

2. **Load Game Context**:

```typescript
const gameContext = {
  playerID: "0xabcdef1234567890",
  resources: { gold: 500, wood: 100 },
  turn: 7,
  availableActions: ["build", "attack", "trade"],
};

leia.loadContext(gameContext);
```

### Goal Execution:

```typescript
const goal = {
  description: "Build a fortress to protect resources",
  subgoals: [
    { action: "GATHER_RESOURCES", conditions: { wood: 200, stone: 100 } },
    { action: "BUILD_FORTRESS", conditions: { location: [50, 75], resourcesSpent: { wood: 150, stone: 100 } } },
  ],
};

leia.executeGoal(goal);
```

### Dynamic Monitoring:

```typescript
// Monitoring agent's actions and reasoning
leia.on("action:start", (data) => {
  console.log(`🔄 Agent action started: ${data.action}`);
});

leia.on("action:complete", (data) => {
  console.log(`✅ Action completed: ${data.action.type} with result: ${data.result}`);
});
```

---

## 🎯 Leia AI Roadmap

Leia AI is constantly evolving to bring the future of autonomous gaming to life. Here are some features to look forward to:

- **Advanced Multi-Agent Systems**: Collaborative agents working together on massive games.
- **Quantum Decision-Making**: Introducing quantum computation to enhance agent strategies.
- **Cross-Platform Support**: Expanding Leia AI to work with more blockchains and decentralized apps.
- **Swarm Governance**: Enabling decentralized governance for agents’ decisions.

Stay tuned as we continue to shape the next generation of AI-driven on-chain gameplay!
