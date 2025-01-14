export class Query {
    rpcUrl: string;

    constructor(rpcUrl: string) {
        this.rpcUrl = rpcUrl;
    }

    listDelegations = (address: string) => this.uri(`staking/delegators/${address}/delegations`);
    listUnbondDelegations = (address: string) => this.uri(`staking/delegators/${address}/unbonding_delegations`);
    getRewards = (address: string) => this.uri(`distribution/delegators/${address}/rewards`);
    getAccount = (address: string) => this.uri(`auth/accounts/${address}`);
    broadcastTransaction = () => this.uri('txs');

    private uri(path: string): string {
        return `${this.rpcUrl}/${path}`;
    }
}
