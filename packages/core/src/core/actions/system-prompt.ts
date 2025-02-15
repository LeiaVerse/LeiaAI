import type { ActionHandler } from "../../types";

import * as readline from "readline";

async function askUser(question: string): Promise<string> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(`${question}\nYour response: `, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

export const systemPromptAction: ActionHandler = async (action, chain) => {
  const userResponse = await askUser(action.payload.prompt);
  return userResponse;
};
