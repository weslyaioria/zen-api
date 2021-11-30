import { BaseHeader } from './base-header';

export class IBase<TData> extends BaseHeader {
  body: TData;
}
