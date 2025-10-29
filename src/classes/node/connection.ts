import axios, { AxiosInstance } from 'axios';
import { Repositories } from 'src/database/database';
import { apiRequest } from '../api/request';
import { NodeEndpoints } from './endpoints';
import { e } from './e';

export class NodeConnection {
  private _nodeId: string;
  private _api: AxiosInstance;

  constructor(nodeId: string) {
    this._nodeId = nodeId;
  }

  get e(): ReturnType<typeof e> {
    if (!this._api) throw new Error('API not initialized');

    return e(this._api);
  }

  private async _initializeApi() {
    const node = await Repositories.node.findOne({
      where: { id: this._nodeId },
    });

    if (!node) return null;

    this._api = axios.create({
      baseURL: `${node.address}/api`,
    });

    return this._api;
  }

  async api(): Promise<AxiosInstance | null> {
    if (!this._api) return await this._initializeApi();

    return this._api;
  }

  public async isConnected(): Promise<boolean> {
    const api = await this.api();
    if (!api) return false;

    const res = await apiRequest<string>(api, 'get', NodeEndpoints.health);

    return res.status == 'ok' && res.data === 'Healthy';
  }

  public static create(nodeId: string) {
    return new NodeConnection(nodeId);
  }
}
