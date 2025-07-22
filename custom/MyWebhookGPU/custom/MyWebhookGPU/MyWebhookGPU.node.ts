import { INodeType, INodeTypeDescription } from 'n8n-workflow';

export class MyWebhookGPU implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'My WebhookGPU Node',
    name: 'myWebhookGPU',
    group: ['transform'],
    version: 1,
    description: 'Dummy node for WebhookGPU setup.',
    defaults: {
      name: 'My WebhookGPU',
    },
    inputs: ['main'],
    outputs: ['main'],
    properties: [],
  };

  async execute(): Promise<any> {
    return [{ json: { success: true, message: 'WebhookGPU Custom Node working!' } }];
  }
}
