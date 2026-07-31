import type { ConversationContext, MessageInput } from '@bruno/context';

export type MaestroAction =
  | { type: 'reply'; draft: string }
  | { type: 'ask_question'; question: string }
  | { type: 'create_task'; title: string }
  | { type: 'handoff'; reason: string }
  | { type: 'no_action'; reason: string };

export interface MaestroDecision {
  context: ConversationContext;
  actions: MaestroAction[];
  rationaleCode: string;
}

export interface Maestro {
  decide(input: MessageInput, context: ConversationContext): Promise<MaestroDecision>;
}
