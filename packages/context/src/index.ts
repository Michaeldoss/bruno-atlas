import type { Confidence, ISODateTime, UUID } from '@bruno/shared';

export interface MessageInput {
  id: UUID;
  tenantId: UUID;
  channel: 'whatsapp' | 'instagram' | 'email' | 'web' | 'api';
  externalContactId: string;
  text?: string;
  receivedAt: ISODateTime;
}

export interface ConversationContext {
  tenantId: UUID;
  personId?: UUID;
  companyId?: UUID;
  conversationId?: UUID;
  intent?: string;
  objective?: string;
  urgency?: 'low' | 'medium' | 'high';
  sentiment?: 'negative' | 'neutral' | 'positive';
  opportunityStage?: string;
  pendingPromises: string[];
  relevantMemories: string[];
  confidence: Confidence;
}

export interface ContextBuilder {
  build(input: MessageInput): Promise<ConversationContext>;
}
